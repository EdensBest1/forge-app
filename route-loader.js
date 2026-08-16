(() => {
  const FORGE_RELEASE = "133";
  const requestedUrl = new URL(window.location.href);
  const routeMetadata = {
    title: document.title,
    description: document.querySelector('meta[name="description"]')?.content || "",
    robots: document.querySelector('meta[name="robots"]')?.content || "",
    canonical: document.querySelector('link[rel="canonical"]')?.href || `${requestedUrl.origin}${requestedUrl.pathname}`
  };

  function restoreRouteMetadata() {
    document.title = routeMetadata.title;
    const description = document.querySelector('meta[name="description"]');
    if (description && routeMetadata.description) description.content = routeMetadata.description;

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = routeMetadata.canonical;

    if (routeMetadata.robots) {
      let robots = document.querySelector('meta[name="robots"]');
      if (!robots) {
        robots = document.createElement("meta");
        robots.name = "robots";
        document.head.appendChild(robots);
      }
      robots.content = routeMetadata.robots;
    }
  }

  function assertCurrentShell(response, html) {
    const contentType = response.headers.get("content-type") || "";
    if (!response.ok || !contentType.toLowerCase().includes("text/html")) {
      throw new Error("Could not load a valid Forge app shell.");
    }
    const escapedRelease = FORGE_RELEASE.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const releaseMarker = new RegExp(`<meta\\s+name=["']forge-release["']\\s+content=["']v${escapedRelease}["']`, "i");
    if (!releaseMarker.test(html)) throw new Error("Forge app shell release mismatch.");
  }

  fetch(`/index.html?v=${FORGE_RELEASE}`, {
    cache: "no-store",
    credentials: "same-origin",
    headers: { Accept: "text/html" }
  })
    .then(async (response) => {
      const html = await response.text();
      assertCurrentShell(response, html);
      return html;
    })
    .then((html) => {
      const routedHtml = html.replace("<head>", '<head><base href="/" />');
      const appShell = new DOMParser().parseFromString(routedHtml, "text/html");
      const scripts = [...appShell.body.querySelectorAll("script")];

      for (const script of scripts) script.remove();

      document.documentElement.lang = appShell.documentElement.lang || "en";
      document.head.replaceChildren(...[...appShell.head.childNodes].map((node) => document.importNode(node, true)));
      document.body.replaceChildren(...[...appShell.body.childNodes].map((node) => document.importNode(node, true)));
      restoreRouteMetadata();

      for (const script of scripts) {
        const runtimeScript = document.createElement("script");
        for (const attribute of script.attributes) runtimeScript.setAttribute(attribute.name, attribute.value);
        runtimeScript.textContent = script.textContent;
        document.body.appendChild(runtimeScript);
      }
    })
    .catch(() => {
      document.body.replaceChildren();
      const main = document.createElement("main");
      main.className = "route-loader-error";
      main.setAttribute("role", "alert");
      main.setAttribute("tabindex", "-1");
      const title = document.createElement("h1");
      title.textContent = "Forge route unavailable";
      const copy = document.createElement("p");
      copy.textContent = "This page could not load the current Forge release. Your browser may be offline or finishing an update.";
      const actions = document.createElement("p");
      const retry = document.createElement("button");
      retry.type = "button";
      retry.textContent = "Try again";
      retry.addEventListener("click", () => window.location.reload());
      const link = document.createElement("a");
      link.href = "/";
      link.textContent = "Open Forge home";
      actions.append(retry, " ", link);
      main.append(title, copy, actions);
      document.body.append(main);
      main.focus();
    });
})();
