const div = document.createElement('div');
document.body.appendChild(div);
let divHeight = 1;
let grow = true;

window.addEventListener('scroll', () => {
    if (grow) {
        getBigger();
    } else {
        getSmaller();
    }

    if (divHeight >= window.innerHeight * 0.5) {
        grow = !grow;
    } else if (divHeight <= 0) {
        grow = !grow;
    }

})

const getBigger = () => {
    divHeight += 5;
    div.style.height = `${divHeight}px`;
    div.style.backgroundColor = "red";
};

const getSmaller = () => {
    divHeight -= 5;
    div.style.height = `${divHeight}px`;
    div.style.backgroundColor = "green";
};