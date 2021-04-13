const form = document.querySelector("form");

const fullName = document.querySelector("#name");
const fullNameError = document.querySelector("#nameError");

const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

const checkbox = document.querySelector("#accept");
const checkboxError = document.querySelector("#checkboxError");

const checkoutMessage = document.querySelector(".checkout-success");

const close = document.querySelector(".x");
const nameText = document.querySelector(".name-text");


function validateForm(event) {
    event.preventDefault();
    
    if (checkLength(fullName.value, 1)) {
        fullNameError.style.display = "none";
    } else {
        fullNameError.style.display = "block";
    }

    if (checkLength(address.value, 5)) {
        addressError.style.display = "none";
    } else {
        addressError.style.display = "block";
    }

    if (validateEmail(email.value)) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

    if (checkbox.checked) {
        checkboxError.style.display = "none";
    } else {
        checkboxError.style.display = "block";
    }

    if (checkLength(fullName.value, 1) && checkLength(address.value, 5) && validateEmail(email.value) && checkbox.checked) {
        checkoutMessage.style.display = "block";
        createHTML();
        
        form.reset();
    } else {
        checkoutMessage.style.display = "none";
    }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}

close.addEventListener("click", closeSection);

function closeSection() {
    checkoutMessage.style.display = "none";
}

function createHTML() {
    nameText.innerHTML += `Congratulations on your purchase ${fullName.value}.`
}