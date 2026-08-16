(() => {
  function stringValue(value) {
    if (value == null) return "";
    if (typeof value === "object") {
      try { return JSON.stringify(value); } catch { return String(value); }
    }
    return String(value);
  }

  function neutralizeFormula(value) {
    const text = stringValue(value).replace(/^\uFEFF/, "");
    return /^[\t\r ]*[=+\-@]/.test(text) ? `'${text}` : text;
  }

  function cell(value) {
    return `"${neutralizeFormula(value).replaceAll('"', '""')}"`;
  }

  globalThis.ForgeCsv = Object.freeze({ cell, neutralizeFormula });
})();
