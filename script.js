const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => {
      const active = item === button;
      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", String(active));
    });

    projectCards.forEach((card) => {
      const tags = card.dataset.tags.split(" ");
      card.hidden = filter !== "all" && !tags.includes(filter);
    });
  });
});
