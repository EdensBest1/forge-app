(function () {
  var allowed = ["lead_code", "utm_source", "utm_campaign", "segment", "license_type"];
  var storageKey = "crm_lead_attribution_v1";
  var params = new URLSearchParams(window.location.search);
  var attribution = {};

  allowed.forEach(function (key) {
    var value = params.get(key);
    if (value) attribution[key] = value.slice(0, 120);
  });

  if (Object.keys(attribution).length === 0) {
    try {
      attribution = JSON.parse(window.localStorage.getItem(storageKey) || "{}");
    } catch (_error) {
      attribution = {};
    }
  } else {
    window.localStorage.setItem(storageKey, JSON.stringify(attribution));
  }

  if (Object.keys(attribution).length === 0) return;

  document.querySelectorAll("a[href]").forEach(function (link) {
    var url;
    try {
      url = new URL(link.getAttribute("href"), window.location.origin);
    } catch (_error) {
      return;
    }
    if (url.origin !== window.location.origin) return;
    allowed.forEach(function (key) {
      if (attribution[key] && !url.searchParams.has(key)) {
        url.searchParams.set(key, attribution[key]);
      }
    });
    link.setAttribute("href", url.pathname + url.search + url.hash);
  });

  document.querySelectorAll("form").forEach(function (form) {
    allowed.forEach(function (key) {
      if (!attribution[key] || form.querySelector('input[name="' + key + '"]')) return;
      var input = document.createElement("input");
      input.type = "hidden";
      input.name = key;
      input.value = attribution[key];
      form.appendChild(input);
    });
  });
})();
