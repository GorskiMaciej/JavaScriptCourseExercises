const btn = document.querySelector('button')
const codesContainer = document.querySelector('.generatedCodes');

const chars = "ABCDEFGHIJK1234456789";
const numberOfCodes = 1000;
const codeLenght = 10;

const generateCodes = () => {

    for (let i = 0; i < numberOfCodes; i++) {
        let code = "";
        for (let j = 0; j < codeLenght; j++) {
            const randomChar = Math.floor(Math.random() * chars.length);
            code += chars[randomChar];
        }

        const div = document.createElement('div');
        div.textContent = code;
        codesContainer.appendChild(div);
    }
};

btn.addEventListener('click', generateCodes)