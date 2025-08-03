document.addEventListener("DOMContentLoaded", function () {
    
    const form = document.getElementById("registration-form");
    const feedbackDiv = document.getElementById("form-feedback");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from submitting

        // Get and trim input values
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Initialize validation
        let isValid = true;
        let messages = [];

        // Username validation
        if (username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email validation
        if (!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Email must be a valid format and contain '@' and '.'");
        }

        // Password validation
        if (password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Display feedback
        if (isValid) {
            feedbackDiv.style.display = "block";
            feedbackDiv.style.color = "green";
            feedbackDiv.style.backgroundColor = "#d4edda";
            feedbackDiv.textContent = "Registration successful!";
        } else {
            feedbackDiv.style.display = "block";
            feedbackDiv.style.color = "#d8000c";
            feedbackDiv.style.backgroundColor = "#ffbaba";
            feedbackDiv.innerHTML = messages.join("<br>");
        }
    });
});
