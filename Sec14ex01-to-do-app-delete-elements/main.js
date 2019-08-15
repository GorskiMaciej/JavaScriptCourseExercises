const tasks = [...document.querySelectorAll('button[data-key]')];

const removeTask = (e) => {
    const index = e.target.dataset.key;
    document.querySelector(`li[data-key="${index}"]`).remove();
}

tasks.forEach((task) => {
    task.addEventListener('click', removeTask);
})