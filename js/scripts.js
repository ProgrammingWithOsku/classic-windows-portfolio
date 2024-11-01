// Check if a language preference exists in localStorage
document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("preferredLanguage")) {
        document.getElementById("language-modal").style.display = "flex";
    }
});

// Set the language preference and close the modal
function setLanguage(language) {
    localStorage.setItem("preferredLanguage", language);
    document.getElementById("language-modal").style.display = "none";
    // Load content dynamically based on the selected language, if applicable
    // loadContentForLanguage(language);
}

// Check if cookie consent has already been given
document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("cookieConsent")) {
        document.getElementById("cookie-modal").style.display = "block";
    }
});

// Function to accept cookies and hide the popup
function acceptCookies() {
    localStorage.setItem("cookieConsent", "true");
    document.getElementById("cookie-modal").style.display = "none";
}

// Function to play the Windows XP welcome sound
function playWelcomeSound() {
    const audio = document.getElementById("welcome-sound");
    audio.play();
}

// Setup welcome sound to play only on first visit and on user interaction
document.addEventListener("DOMContentLoaded", () => {
    if (!localStorage.getItem("hasVisitedBefore")) {
        // Wait for user interaction to play the sound
        document.addEventListener("click", () => {
            playWelcomeSound();
            localStorage.setItem("hasVisitedBefore", "true");
        }, { once: true }); // Ensure it only triggers once
    }
});


// Wait for the page to fully load
window.addEventListener("load", () => {
    // Set a minimum display time of 3 seconds for the loading screen
    setTimeout(() => {
        document.getElementById("loading-screen").style.display = "none";
    }, 3000); // 3000 milliseconds = 3 seconds
});
