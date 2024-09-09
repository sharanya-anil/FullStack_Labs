// script.js
function validateForm() {
    let isValid = true;

    // Username validation
    const username = document.getElementById("username").value.trim();
    if (username === "") {
        document.getElementById("usernameError").textContent = "Username is required";
        isValid = false;
    } else {
        document.getElementById("usernameError").textContent = "";
    }

    // Email validation
    const email = document.getElementById("email").value.trim();
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === "" || !emailRegex.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address";
        isValid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

    // Phone number validation
    const phone = document.getElementById("phone").value.trim();
    const phoneRegex = /^[0-9]{10}$/;
    if (phone === "" || !phoneRegex.test(phone)) {
        document.getElementById("phoneError").textContent = "Please enter a valid 10-digit phone number";
        isValid = false;
    } else {
        document.getElementById("phoneError").textContent = "";
    }

    // Password validation
    const password = document.getElementById("password").value;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[&%$#@]).{7,}$/;
    if (password === "" || !passwordRegex.test(password)) {
        document.getElementById("passwordError").textContent = "Password must be at least 7 characters long and contain at least one capital letter, one digit, and one special character from the set (&, $, #, @)";
        isValid = false;
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    // Confirm password validation
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (confirmPassword === "" || password !== confirmPassword) {
        document.getElementById("confirmPasswordError").textContent = "Passwords do not match";
        isValid = false;
    } else {
        document.getElementById("confirmPasswordError").textContent = "";
    }

    if (isValid) {
        // Show the success modal
        $('#successModal').modal('show');

        // Optionally, you can reset the form here
        // document.getElementById("registrationForm").reset();
    }

    return isValid;
}