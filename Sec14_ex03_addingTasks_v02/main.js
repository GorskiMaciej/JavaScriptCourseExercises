const toDoList = [];
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const listTasks = document.getElementsByClassName('task');
const input = document.querySelector('input');

const addTask = (e) => {
    e.preventDefault();
    const titleTask = input.value;
    if (titleTask === "") return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = titleTask + "<button>X</button>";
    toDoList.push(task);
    toDoListUpdate();


    // ul.appendChild(task);
    input.value = "";
    const numberOfLi = listTasks.length;
    taskNumber.textContent = numberOfLi;
    task.querySelector('button').addEventListener('click', removeTask);

}

const removeTask = (e) => {
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1);
    toDoListUpdate();
    taskNumber.textContent = listTasks.length;
}
const toDoListUpdate = () => {
    ul.textContent = "";
    toDoList.forEach((listElement, key) => {
        listElement.dataset.key = key;
        ul.appendChild(listElement)
    });
}
form.addEventListener('submit', addTask)