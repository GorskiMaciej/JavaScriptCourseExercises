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
    ul.appendChild(task);
    input.value = "";
    const numberOfLi = listTasks.length;
    taskNumber.textContent = numberOfLi;
    task.querySelector('button').addEventListener('click', removeTask);

}

const removeTask = (e) => {
    e.target.parentNode.remove();
    taskNumber.textContent = listTasks.length;
}

form.addEventListener('submit', addTask)