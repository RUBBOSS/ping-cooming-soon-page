const form = document.querySelector('form');
const input = document.querySelector('input');
const alertInfo = document.querySelector('.heading .form-control span');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (input.value === "") {
        alertMsg();
        return (alertInfo.innerHTML = "Please fill your email.");
    }

    if (!input.value.match(pattern)) {
        alertMsg();
        return (alertInfo.innerHTML = "Please provide a valid email.");
    }

    return alert ("Thank you for filling your email.");
});

function alertMsg () {
    input.style.borderColor = "hsl(0, 93%, 68%)";
    alertInfo.style.display = "block";
}

function clearAlert() {
    input.style.borderColor = "hsla(0, 0%, 59%, 50%)";
    alertInfo.style.display = "none";
}

input.addEventListener("keypress", () => {
    clearAlert();
});