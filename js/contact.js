document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (event) => {
        // Prevent form from submitting if there are validation errors
        if (!form.checkValidity()) {
            event.preventDefault();
            alert("Please fill out all required fields.");
        } else {
            alert("Thanks for your feedback!");
        }
    });
});
