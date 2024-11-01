document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(event) {
    event.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});


const toggleButton = document.getElementById("dark-mode-toggle");

toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


