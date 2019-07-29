let counter = 0;

const btn = document.querySelector('button');


const addElement = () => {
    counter++;
    const div = document.createElement('div');
    if (!(counter % 5)) {
        div.classList.add('circle');
    }
    div.classList.add('box');
    div.textContent = counter;
    document.body.appendChild(div);
}

btn.addEventListener('click', addElement);