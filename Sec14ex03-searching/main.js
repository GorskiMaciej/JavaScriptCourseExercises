const input = document.querySelector('input');
const ul = document.querySelector('ul');
const liList = document.querySelectorAll('li');

const searchElement = (e) => {
    let elements = [...liList];
    let searchText = e.target.value.toLowerCase();
    elements = elements.filter(li => li.textContent.toLowerCase().includes(searchText));
    ul.textContent = "";
    elements.forEach(li => ul.appendChild(li));
}

input.addEventListener("input", searchElement)