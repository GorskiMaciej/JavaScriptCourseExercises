let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;

const changeColor = (e) => {
    if (e.keyCode === 38) {
        if (red < 255) {
            red += 3;
            green += 3;
            blue += 3;
        } else {
            red = 255;
            green = 255;
            blue = 255;
        }
        console.log(red)
        document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
    } else if (e.keyCode === 40) {
        if (red > 0) {
            red -= 3;
            green -= 3;
            blue -= 3;
        } else {
            red = 0;
            green = 0;
            blue = 0;
        }
        console.log(red)
        document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
    }
};

const changeColor = (e) => {
    switch (e.keyCode) {
        case 38: {
            if (red < 255) {
                red += 3;
                green += 3;
                blue += 3;
            } else {
                red = 255;
                green = 255;
                blue = 255;
            }
            console.log(red)
            document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
            break;
        }
        case 40: {
            if (red > 0) {
                red -= 3;
                green -= 3;
                blue -= 3;
            } else {
                red = 0;
                green = 0;
                blue = 0;
            }
            console.log(red)
            document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
            break;
        }
    }
};



window.addEventListener('keydown', changeColor)