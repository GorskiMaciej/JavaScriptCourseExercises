let size = 10;
let orderElement = 1;

const init = () => {
    const mainUl = document.createElement('ul');

    const btn = document.createElement('button')
    btn.textContent = "Add 10 elements to list";
    document.body.appendChild(btn);
    document.body.appendChild(mainUl);

    btn.addEventListener('click', createLiElements);

}

const createLiElements = () => {
    const ul = document.querySelector('ul');

    for (let i = 0; i < 10; i++) {
        const li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = `Element nr ${orderElement++}`;
        li.style.fontSize = `${size++}px`;
    }

}

init()