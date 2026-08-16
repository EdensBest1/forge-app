(() => {
  const forms = document.querySelectorAll("[data-productionization-form]");
  for (const form of forms) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const type = form.getAttribute("data-productionization-form") || "general";
      const key = "productionization:" + type;
      const record = Object.fromEntries(new FormData(form).entries());
      record.createdAt = new Date().toISOString();
      record.status = "Submitted for admin review";
      const existing = JSON.parse(localStorage.getItem(key) || "[]");
      existing.push(record);
      localStorage.setItem(key, JSON.stringify(existing));
      const state = form.querySelector(".save-state");
      if (state) state.textContent = "Saved locally for MVP review. No message, payment, dispatch, or regulated action was sent.";
      form.reset();
    });
  }
})();
