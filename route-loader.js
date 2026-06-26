fetch("/index.html", { cache: "no-store" })
  .then((response) => {
    if (!response.ok) throw new Error("Could not load Forge app shell.");
    return response.text();
  })
  .then((html) => {
    const routedHtml = html.replace("<head>", '<head><base href="/" />');
    document.open();
    document.write(routedHtml);
    document.close();
  })
  .catch(() => {
    document.body.innerHTML = "<main style=\"font-family: system-ui, sans-serif; padding: 24px;\"><h1>Forge route unavailable</h1><p>Open <a href=\"/\">Forge home</a> and try again.</p></main>";
  });
