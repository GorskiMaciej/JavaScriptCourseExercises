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
    const li1 = document.createElement('li');
    const li2 = document.createElement('li');
    const li3 = document.createElement('li');
    const li4 = document.createElement('li');
    const li5 = document.createElement('li');
    const li6 = document.createElement('li');
    const li7 = document.createElement('li');
    const li8 = document.createElement('li');
    const li9 = document.createElement('li');
    const li10 = document.createElement('li');
    const liArray = [li1, li2, li3, li4, li5, li6, li7, li8, li9, li10];

    for (let i = 0; i < liArray.length; i++) {
        ul.appendChild(liArray[i]);
        liArray[i].textContent = `Element nr ${orderElement}`;
        liArray[i].style.fontSize = `${size}px`;
        size++;
        orderElement++;
    }

}

init()