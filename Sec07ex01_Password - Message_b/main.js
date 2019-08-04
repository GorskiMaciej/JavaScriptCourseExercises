const input = document.getElementById('pass');
const passwords = ["user", "lato"];
const messages = ["Wiadomość po wpisanu hasła.", "gorąca pora roku"];
const div = document.querySelector('.message');

input.addEventListener('input', (e) => {
    div.textContent = "";
    const inputText = e.target.value;


    passwords.forEach((password, index) => {
        if (password === inputText) {
            div.textContent = messages[index];
            e.target.value = "";
        }
    })
})

input.addEventListener('focus', () => {
    input.classList.add("active");
})
input.addEventListener('blur', () => {
    input.classList.remove("active");
})