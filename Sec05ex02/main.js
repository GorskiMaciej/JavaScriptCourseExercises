let size = 10;
let orderElement = 1;

const init = () => {
    const btnAdd = document.createElement("button");
    btnAdd.textContent = "Dodaj 10 elementów listy";
    document.body.appendChild(btnAdd);

    const btnReset = document.createElement("button");
    btnReset.textContent = "Reset";
    document.body.appendChild(btnReset);

    const ul = document.createElement("ul");
    document.body.appendChild(ul);
    btnAdd.addEventListener('click', createLiElements)
    btnReset.addEventListener('click', reset)
}

const createLiElements = () => {
    for (let i = 0; i < 10; i++) {
        const ul = document.querySelector('ul');
        const li = document.createElement("li");
        li.textContent = `Element nr ${orderElement++}`;
        li.style.fontSize = `${size++}px`;
        ul.appendChild(li);
    }

}

const reset = () => {
    size = 10;
    orderElement = 1;
    const list = [...document.querySelectorAll('li')];
    list.forEach((listElement) => {
        listElement.parentNode.removeChild(listElement);
    })
    //or
    // document.querySelector('ul').textContent = "";

}

init()