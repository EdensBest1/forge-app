fetch("/index.html", { cache: "no-store" })
  .then((response) => {
    if (!response.ok) throw new Error("Could not load Forge app shell.");
    return response.text();
  })
  .then((html) => {
    const routedHtml = html.replace("<head>", '<head><base href="/" />');
    const appShell = new DOMParser().parseFromString(routedHtml, "text/html");
    const scripts = [...appShell.body.querySelectorAll("script")];

    for (const script of scripts) script.remove();

    document.documentElement.lang = appShell.documentElement.lang || "en";
    document.head.replaceChildren(...[...appShell.head.childNodes].map((node) => document.importNode(node, true)));
    document.body.replaceChildren(...[...appShell.body.childNodes].map((node) => document.importNode(node, true)));

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
    const title = document.createElement("h1");
    title.textContent = "Forge route unavailable";
    const copy = document.createElement("p");
    const link = document.createElement("a");
    link.href = "/";
    link.textContent = "Forge home";
    copy.append("Open ", link, " and try again.");
    main.append(title, copy);
    document.body.append(main);
  });
