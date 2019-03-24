const input = document.querySelector("input");
const passwords = ['jedEN', 'DwA', "tRzy"];
const messages = ["super", "działa!", ];
const messageDisplayer = document.querySelector('div');



passwords.map((password, index) => passwords[index] = password.toUpperCase());


console.log(passwords);
const showMessage = (e) => {
    passwords.forEach((element, index) => {
        const inputText = e.target.value.toUpperCase();
        if (element === inputText) {
            messageDisplayer.textContent = messages[index];
        }
    });
};

input.addEventListener("input", showMessage);