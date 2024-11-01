document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector(".about-me-section");

  function fadeInSection() {
    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
      aboutSection.classList.add("fade-in");
    }
  }

  window.addEventListener("scroll", fadeInSection);
});
