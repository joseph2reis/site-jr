// src/scripts/reveal.ts

export function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible'); // Mudamos de active para visible
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
  });

  const elementsToReveal = document.querySelectorAll('.reveal');
  elementsToReveal.forEach(el => observer.observe(el));
}