const input = document.querySelector('input');
const div = document.querySelector('div');
const passwords = ["jeDen", "dWa"];
const messages = ["Pierwsza wiadomość.", "Druga wiadomość."]

const shwoMessage = (event) => {
    div.textContent = "";
    passwords.forEach((password, index) => {

        if (event.target.value.toUpperCase() === password.toUpperCase()) {
            div.textContent = messages[index];
            input.value = "";
        }
    })

}

input.addEventListener('input', shwoMessage);