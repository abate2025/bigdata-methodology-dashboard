
// Set active nav link based on current page
document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  document.querySelectorAll("nav a").forEach(a => {
    if (a.dataset.nav === page) a.classList.add("active");
  });
});
