let rgbValue = 100;

document.body.style.backgroundColor = `rgb(${rgbValue}, ${rgbValue}, ${rgbValue})`;

const changeColor = (e) => {

  // using if
  // if (e.keyCode == 38) {
  //   if (rgbValue <= 255) {
  //     rgbValue += 3;
  //   }
  // } else if (e.keyCode == 40) {
  //   if (rgbValue >= 0) {
  //     rgbValue -= 3;s
  //   }
  // }

  //using swtich
  const selectedKey = e.keyCode;
  switch (selectedKey) {
    case 38:
      if (rgbValue <= 255) {
        rgbValue += 3;
      }
      break;
    case 40:
      if (rgbValue >= 0) {
        rgbValue -= 3;
      }
      break;
  }
  document.body.style.backgroundColor = `rgb(${rgbValue}, ${rgbValue}, ${rgbValue})`;
}

window.addEventListener('keydown', changeColor)