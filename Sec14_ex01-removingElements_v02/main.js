const removeTask = (e) => {
    const index = e.target.dataset.key;
    document.querySelector(`li[data-key="${index}"]`).remove();
}

document.querySelectorAll('button[data-key').forEach(li => {
    li.addEventListener('click', removeTask)
})