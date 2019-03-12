const divElement = document.createElement('div');
document.body.appendChild(divElement);
let divHeight = 5;
divElement.style.height = divHeight + "px";
divElement.style.width = "100vw";
divElement.style.position = "fixed";
divElement.style.top = "0";
divElement.style.position = "0";
divElement.style.backgroundColor = "green";
document.body.style.height = "10000px";

let grow = true;

function changeHeight() {
    console.log("scroll")
    if (divHeight >= window.innerHeight / 2) {
        grow = !grow;
    } else if (divHeight <= 0) {
        grow = !grow;
    }

    if (grow) {
        divHeight += 5;
        divElement.style.backgroundColor = "green";
    } else {
        divHeight -= 5;
        divElement.style.backgroundColor = "red";
    }

    divElement.style.height = divHeight + "px";
}

window.addEventListener("scroll", changeHeight);