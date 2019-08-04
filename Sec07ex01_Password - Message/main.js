const input = document.getElementById('pass');
const password = "user";
const message = "Wiadomość po wpisanu hasła."
const div = document.querySelector('.message');

input.addEventListener('input', (e) => {
    if (password === e.target.value) {
        div.textContent = message;
        e.target.value = "";
    } else {
        div.textContent = "";
    }
})

input.addEventListener('focus', () => {
    input.classList.add("active");
})
input.addEventListener('blur', () => {
    input.classList.remove("active");
})