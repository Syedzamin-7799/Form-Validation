function validateForm() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("pwd").value;
    
    let usernamePattern = /^[a-zA-Z0-9_]{3,16}$/;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;

    let isValid = true;
    if (!emailPattern.test(email)) {
        document.getElementById("email-error").innerHTML = "Please enter a valid email address.";
        isValid = false;
    } else {
        document.getElementById("email-error").innerHTML = "";
    }

    if (!passwordPattern.test(password)) {
        document.getElementById("password-error").innerHTML = "Password must be 6-20 characters and must contain at least one numeric digit, one uppercase and one lowercase letter.";
        isValid = false;
        return isValid;
}}