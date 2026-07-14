import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const agentDirectory = path.join(".claude", "agents");
const filenames = (await readdir(agentDirectory))
  .filter((filename) => filename.endsWith(".md"))
  .sort();

assert.ok(filenames.length >= 8, "Expected the complete initial Forge agent library.");

const requiredFields = [
  "name",
  "description",
  "tools",
  "model",
  "permissionMode",
  "maxTurns",
  "effort"
];
const allowedPermissionModes = new Set(["default", "manual", "plan"]);
const prohibitedPermissionModes = new Set([
  "acceptEdits",
  "auto",
  "dontAsk",
  "bypassPermissions"
]);
const allowedModels = new Set(["inherit", "haiku", "sonnet", "opus", "fable"]);
const allowedEffort = new Set(["low", "medium", "high", "xhigh", "max"]);
const writeTools = new Set(["Write", "Edit"]);
const names = new Set();

function parseFrontmatter(source, filename) {
  assert.ok(source.startsWith("---\n"), `${filename} must start with YAML frontmatter.`);
  const end = source.indexOf("\n---\n", 4);
  assert.notEqual(end, -1, `${filename} must close YAML frontmatter.`);

  const metadata = {};
  for (const rawLine of source.slice(4, end).split("\n")) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;
    const separator = line.indexOf(":");
    assert.notEqual(separator, -1, `${filename} has invalid frontmatter line: ${rawLine}`);
    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1).trim();
    assert.ok(key && value, `${filename} has an empty frontmatter key or value.`);
    metadata[key] = value;
  }

  return {
    metadata,
    body: source.slice(end + 5).trim()
  };
}

for (const filename of filenames) {
  const source = await readFile(path.join(agentDirectory, filename), "utf8");
  const { metadata, body } = parseFrontmatter(source, filename);

  for (const field of requiredFields) {
    assert.ok(metadata[field], `${filename} is missing required field: ${field}`);
  }

  assert.match(
    metadata.name,
    /^[a-z][a-z0-9-]*$/,
    `${filename} name must use lowercase letters, numbers, and hyphens.`
  );
  assert.ok(!names.has(metadata.name), `Duplicate agent name: ${metadata.name}`);
  names.add(metadata.name);

  assert.ok(
    metadata.description.length >= 50,
    `${filename} description must clearly state when the agent should be used.`
  );
  assert.ok(body.length >= 200, `${filename} needs a substantive operating prompt.`);

  assert.ok(
    allowedModels.has(metadata.model) || metadata.model.startsWith("claude-"),
    `${filename} uses an unapproved model value: ${metadata.model}`
  );
  assert.ok(
    allowedPermissionModes.has(metadata.permissionMode),
    `${filename} uses an unapproved permission mode: ${metadata.permissionMode}`
  );
  assert.ok(
    !prohibitedPermissionModes.has(metadata.permissionMode),
    `${filename} uses a prohibited permission mode: ${metadata.permissionMode}`
  );
  assert.ok(
    allowedEffort.has(metadata.effort),
    `${filename} uses an invalid effort level: ${metadata.effort}`
  );

  const maxTurns = Number.parseInt(metadata.maxTurns, 10);
  assert.ok(Number.isInteger(maxTurns), `${filename} maxTurns must be an integer.`);
  assert.ok(maxTurns >= 1 && maxTurns <= 30, `${filename} maxTurns must be between 1 and 30.`);

  const tools = metadata.tools.split(",").map((tool) => tool.trim()).filter(Boolean);
  assert.ok(tools.length > 0, `${filename} must have an explicit tool allowlist.`);
  const canWrite = tools.some((tool) => writeTools.has(tool));

  if (canWrite) {
    assert.equal(
      metadata.isolation,
      "worktree",
      `${filename} can write and therefore must use worktree isolation.`
    );
    assert.notEqual(
      metadata.permissionMode,
      "plan",
      `${filename} cannot write while configured for plan mode.`
    );
  } else {
    assert.ok(!tools.includes("Write") && !tools.includes("Edit"), `${filename} must remain read-only.`);
  }

  assert.ok(!metadata.mcpServers, `${filename} must not receive MCP access in the initial baseline.`);
  assert.ok(!tools.includes("Agent"), `${filename} must not spawn nested agents in the initial baseline.`);
}

const rootRules = await readFile("AGENTS.md", "utf8");
for (const requiredRule of [
  "Human approval is required",
  "npm run check",
  "Never place secrets",
  "Stop and escalate"
]) {
  assert.ok(rootRules.includes(requiredRule), `AGENTS.md is missing required rule: ${requiredRule}`);
}

console.log(`Agent governance check passed for ${filenames.length} project agents.`);
