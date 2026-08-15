import { appendFile, readFile } from "node:fs/promises";

export class FilesystemLeadStore {
  constructor(path) {
    this.path = path;
    this.requestIds = null;
  }

  async initialize() {
    if (this.requestIds) return;
    this.requestIds = new Set();
    try {
      const rows = (await readFile(this.path, "utf8")).trim().split("\n").filter(Boolean);
      for (const row of rows) this.requestIds.add(JSON.parse(row).requestId);
    } catch (error) {
      if (error?.code !== "ENOENT") throw error;
    }
  }

  async save(write) {
    await this.initialize();
    if (this.requestIds.has(write.requestId)) return ["filesystem-test"];
    await appendFile(this.path, `${JSON.stringify(write)}\n`, { encoding: "utf8", mode: 0o600 });
    this.requestIds.add(write.requestId);
    return ["filesystem-test"];
  }

  async records() {
    await this.initialize();
    try {
      return (await readFile(this.path, "utf8")).trim().split("\n").filter(Boolean).map((row) => JSON.parse(row));
    } catch (error) {
      if (error?.code === "ENOENT") return [];
      throw error;
    }
  }
}
