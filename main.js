
const EMAIL = "gregorynouebissi@gmail.com";
const GITHUB = "greg11-git";

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-year]").forEach((element) => {
    element.textContent = new Date().getFullYear();
  });

  // Mettre à jour automatiquement les liens de contact
  document.querySelectorAll('a[href^="mailto:"]').forEach((link) => {
    link.href = `mailto:${EMAIL}`;
    const text = link.querySelector("b");
    if (text) text.textContent = EMAIL;
  });

  document.querySelectorAll('a[href*="github.com/"]').forEach((link) => {
    link.href = `https://github.com/${GITHUB}`;
    const text = link.querySelector("b");
    if (text) text.textContent = `github.com/${GITHUB}`;
  });

  // Menu mobile
  const menu = document.querySelector(".menu");
  const nav = document.querySelector(".topbar nav");

  if (menu && nav) {
    menu.addEventListener("click", () => {
      const isOpen = menu.getAttribute("aria-expanded") === "true";
      menu.setAttribute("aria-expanded", String(!isOpen));
      nav.classList.toggle("open", !isOpen);
    });
  }

  // Animations au défilement
  document.querySelectorAll(".reveal").forEach((element) => {
    if (!("IntersectionObserver" in window)) {
      element.classList.add("visible");
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    observer.observe(element);
  });
});