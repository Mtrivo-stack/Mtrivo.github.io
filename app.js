// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Select the buttons
    const yesButton = document.querySelector(".button-container button:first-child");
    const noButton = document.querySelector(".button-container button:last-child");

    // Add click event listeners
    yesButton.addEventListener("click", () => {
        alert("Great! ❤️");
    });

    noButton.addEventListener("click", () => {
        alert("Sad 😢");
    });
});
