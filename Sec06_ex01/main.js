let text = document.createElement('p');
document.body.appendChild(text);
let positionX = null;
let positionY = null;
text.textContent = `${positionX},${positionY}`;
text.style.position = "fixed";
text.style.top = "50%";
text.style.left = "50%";
text.style.transform = "translate(-50%,-50%)";
text.style.fontSize = "50px";

document.body.addEventListener('click', (evnt) => {
    positionX = evnt.clientX;
    console.log(positionX);
    positionY = evnt.clientY;
    console.log(positionY);

    let evenX = !(positionX % 2);
    let evenY = !(positionY % 2);

    if (evenX && evenY) {
        document.body.style.backgroundColor = "red";
    } else if (!evenX && !evenY) {
        document.body.style.backgroundColor = "blue";
    } else {
        document.body.style.backgroundColor = "green";
    };
    text.textContent = `${positionX},${positionY}`;
});