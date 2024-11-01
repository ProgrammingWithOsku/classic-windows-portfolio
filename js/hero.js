const taglines = ["Building scalable solutions", "Creating user-centric applications", "Optimizing performance", "Innovating with technology"];
let taglineIndex = 0;

function updateTagline() {
  const taglineElement = document.getElementById("tagline");
  taglineElement.textContent = taglines[taglineIndex];
  taglineIndex = (taglineIndex + 1) % taglines.length;
}

setInterval(updateTagline, 2000);
updateTagline();
