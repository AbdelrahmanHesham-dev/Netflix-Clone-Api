let submitBtn = document.getElementById("submitBtn");

submitBtn.style.pointerEvents = "none";

function valid() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError");

    if (email.indexOf("@") == -1 || email.length <= 0) {
        emailError.innerHTML = "Please Enter a Valid Email";
        submitBtn.style.pointerEvents = "none"; 
    } else if (email.indexOf("@") > -1 && email.length > 0) {
        emailError.innerHTML = "";
    }

    if (password.length < 8 || password.length > 25) {
        passwordError.innerHTML = "Please enter a strong password greater than 8 characters.";
        submitBtn.style.pointerEvents = "none"; 
    } else if (password.length >= 8 && password.length <= 25) {
        passwordError.innerHTML = "";
    }

    if (email.indexOf("@") > -1 && email.length > 0 && password.length >= 8 && password.length <= 25) {
        submitBtn.style.pointerEvents = "auto"; 
    }
}