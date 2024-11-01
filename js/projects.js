document.addEventListener("DOMContentLoaded", function () {
  const projectCards = document.querySelectorAll(".project-card");

  function revealProjects() {
    projectCards.forEach((card) => {
      const cardPosition = card.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (cardPosition < screenPosition) {
        card.classList.add("fade-in");
      }
    });
  }

  window.addEventListener("scroll", revealProjects);

  // Trigger revealProjects on load in case cards are already in view
  revealProjects();
});
