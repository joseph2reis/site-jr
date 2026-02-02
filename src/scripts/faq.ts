export function initFAQ() {
  const container = document.querySelector("#faq-container");
  // Se já foi iniciado, não faz nada (evita o bug de sumir)
  if (!container || container.getAttribute('data-faq-ready')) return;
  
  container.setAttribute('data-faq-ready', 'true');

  container.addEventListener("click", (e) => {
    const trigger = (e.target as HTMLElement).closest(".faq-trigger");
    if (!trigger) return;

    const currentItem = trigger.closest(".faq-item") as HTMLElement;
    const content = currentItem.querySelector(".faq-content") as HTMLElement;
    const icon = currentItem.querySelector(".faq-icon") as HTMLElement;
    const allItems = container.querySelectorAll(".faq-item");

    const isOpen = currentItem.classList.contains("active");

    // Fecha os outros
    allItems.forEach((item) => {
      if (item !== currentItem) {
        item.classList.remove("active");
        (item.querySelector(".faq-content") as HTMLElement).style.maxHeight = "0";
        (item.querySelector(".faq-icon") as HTMLElement).style.transform = "rotate(0deg)";
      }
    });

    // Abre/Fecha o atual
    if (isOpen) {
      currentItem.classList.remove("active");
      content.style.maxHeight = "0";
      icon.style.transform = "rotate(0deg)";
    } else {
      currentItem.classList.add("active");
      content.style.maxHeight = content.scrollHeight + "px";
      icon.style.transform = "rotate(45deg)";
    }
  });
}