document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".contact-form");
  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevents the default form submission for testing
  
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      if (name && email && message) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Please fill out all fields before submitting.");
      }
    });
  });
  