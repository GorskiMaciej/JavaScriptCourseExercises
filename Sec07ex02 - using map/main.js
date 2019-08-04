const input = document.querySelector('input');
const div = document.querySelector('div');
const passwords = ["jeDen", "dWa"];
const messages = ["Pierwsza wiadomość.", "Druga wiadomość."]
const uniformedPasswords = passwords.map(password => password.toUpperCase())

const shwoMessage = (event) => {
    const input = event.target.value.toUpperCase();
    div.textContent = "";
    for (let i = 0; i < uniformedPasswords.length; i++) {
        if (input === uniformedPasswords[i]) {
            div.textContent = messages[i];
            input.value = "";
        }
    }
}

input.addEventListener('input', shwoMessage);