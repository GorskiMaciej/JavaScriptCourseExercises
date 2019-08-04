const input = document.querySelector('input');
const btn = document.querySelector('button');
const namesContainer = document.querySelector('div');

const names = [];

const addName = () => {
    const newName = input.value;

    if (newName.length) {
        for (name of names) {
            if (name === newName) {
                alert("Written name is already on list!")
                input.value = ""
                return;
            }
        }
        names.push(newName);
        namesContainer.textContent += newName + ", ";
        input.value = ""
    }
};

btn.addEventListener('click', addName)