const body = document.body;

const getColor = (e) => {
    const x = e.clientX;
    const y = e.clientY;

    if (!(x % 2) && !(y % 2)) {
        return "red";
    } else if ((x % 2) && (y % 2)) {
        return "blue";
    } else {
        return "green";
    }
}

const showCoordinates = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    console.log(`${x},${y}`);
};

body.addEventListener('click', (event) => {
    showCoordinates(event);
    const color = getColor(event);
    body.style.backgroundColor = color;
})