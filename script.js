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

const spotlight = document.querySelector("[data-spotlight]");

if (spotlight) {
  const cards = Array.from(spotlight.querySelectorAll(".spotlight-card"));
  const dots = Array.from(spotlight.querySelectorAll(".spotlight-dots span"));
  const nextButton = spotlight.querySelector("[data-spotlight-next]");
  const prevButton = spotlight.querySelector("[data-spotlight-prev]");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let activeIndex = Math.max(0, cards.findIndex((card) => card.classList.contains("active")));
  let timerId;
  let paused = reduceMotion;

  const showCard = (index) => {
    activeIndex = (index + cards.length) % cards.length;

    cards.forEach((card, cardIndex) => {
      card.classList.toggle("active", cardIndex === activeIndex);
    });

    dots.forEach((dot, dotIndex) => {
      dot.classList.toggle("active", dotIndex === activeIndex);
    });
  };

  const scheduleNext = () => {
    window.clearTimeout(timerId);

    if (paused || cards.length < 2) {
      return;
    }

    const duration = Number(cards[activeIndex].dataset.duration) || 5000;
    timerId = window.setTimeout(() => {
      showCard(activeIndex + 1);
      scheduleNext();
    }, duration);
  };

  const move = (step) => {
    showCard(activeIndex + step);
    scheduleNext();
  };

  nextButton?.addEventListener("click", () => move(1));
  prevButton?.addEventListener("click", () => move(-1));

  spotlight.addEventListener("mouseenter", () => {
    paused = true;
    window.clearTimeout(timerId);
  });

  spotlight.addEventListener("mouseleave", () => {
    paused = reduceMotion;
    scheduleNext();
  });

  spotlight.addEventListener("focusin", () => {
    paused = true;
    window.clearTimeout(timerId);
  });

  spotlight.addEventListener("focusout", () => {
    paused = reduceMotion;
    scheduleNext();
  });

  showCard(activeIndex);
  scheduleNext();
}
