const btn = document.querySelector("button");
const ulContainer = document.querySelector("ul");
let counter = 1;

btn.addEventListener('click', () => {
    const newLi = document.createElement("li");

    newLi.textContent = counter;
    if (!(counter % 3)) {
        newLi.classList.add('big')
    }
    ulContainer.appendChild(newLi);

    counter += 2;
})