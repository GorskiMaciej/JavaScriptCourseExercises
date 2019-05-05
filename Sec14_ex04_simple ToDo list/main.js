const searchForm = document.querySelector('form.searching');
const searchingInput = document.querySelector('.searching input');
const btnClear = document.querySelector('.clearing');
let tasks = [];
const addForm = document.querySelector('form.adding');
const ul = document.querySelector('ul');
const input = document.querySelector('input');
const li = document.getElementsByClassName('task');
let numberOfTask = document.querySelector('h2 span');

const listOfTasks = [];

const addTask = (e) => {
    e.preventDefault();
    const taskText = input.value;
    if (taskText === "") return;
    const task = document.createElement('li');
    task.className = ('task');
    task.innerHTML = taskText + "<button>X</button>";
    listOfTasks.push(task);
    renderTasks();
    updateNumberOfTasks();
    input.value = "";
    task.querySelector('button').addEventListener('click', removeTask);
}

const removeTask = (e) => {
    const indexOfRemoved = e.target.parentNode.dataset.key;
    listOfTasks.splice(indexOfRemoved, 1);
    renderTasks();
    updateNumberOfTasks();
}

const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();

    tasks = listOfTasks.filter(element => element.textContent.toLowerCase().includes(searchText));
    renderSearchedTasks(tasks);
}

const updateNumberOfTasks = () => {
    numberOfTask.textContent = li.length;
}
const renderTasks = () => {
    ul.textContent = "";
    listOfTasks.forEach((element, index) => {
        element.dataset.key = index;
        ul.appendChild(element);
    })
}
const renderSearchedTasks = (tasks) => {
    ul.textContent = "";
    tasks = tasks.map(element => ul.appendChild(element));
}


addForm.addEventListener('submit', addTask);
searchForm.addEventListener('input', searchTask);
btnClear.addEventListener('click', (e) => {
    e.preventDefault();
    searchingInput.value = "";
    tasks = listOfTasks;
    renderSearchedTasks(tasks);
})