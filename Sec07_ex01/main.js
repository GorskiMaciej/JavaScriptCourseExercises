// Projekt 5 - Zadanie dla Ciebie 
// Sprawdź czy wpisane w input hasło pasuje do któregoś z haseł w tablicy. Jeśli tak wyświetl wiadomość w <div>
//wielkość liter nie ma znaczenia (wykorzystaj metodę .toUpperCase lub .toLowerCase - pamiętaj, że metody te działają na pojedyńczym elemencie typu string)

const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA'];
const messages = ["super", "działa!"];
let messageDispalyer = document.querySelector('div');

const showMessage = (e) => {
    passwords.forEach((password, index) => {
        if (password.toUpperCase() === e.target.value.toUpperCase()) {
            messageDispalyer.textContent = messages[index];
        }
    })
};

input.addEventListener("input", showMessage);