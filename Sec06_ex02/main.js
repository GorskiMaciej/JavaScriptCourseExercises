let rgbValue = 100;

document.body.style.backgroundColor = `rgb(${rgbValue}, ${rgbValue}, ${rgbValue})`;

const changeColor = (e) => {

  // using if
  // if (e.keyCode == 38) {
  //   rgbValue += 3;
  // } else if (e.keyCode == 40) {
  //   rgbValue -= 3;
  // }

  //using swtich
  const selectedKey = e.keyCode;
  switch (selectedKey) {
    case 38:
      rgbValue += 3;
      break;
    case 40:
      rgbValue -= 3;
      break;
  }
  document.body.style.backgroundColor = `rgb(${rgbValue}, ${rgbValue}, ${rgbValue})`;
}

window.addEventListener('keydown', changeColor)