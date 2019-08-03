const body = document.body;

const changeColorAndSHowCoordinates = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    const backgroundColor = "";

    console.log(`${x},${y}`);
    if (!(x % 2) && !(y % 2)) {
        body.style.backgroundColor = "red";
    } else if ((x % 2) && (y % 2)) {
        body.style.backgroundColor = "blue";
    } else {
        body.style.backgroundColor = "green";
    }
}

body.addEventListener('click',
    changeColorAndSHowCoordinates)