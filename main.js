let dvdBox = document.querySelector(".dvd-container");

let topE = 0,
  leftE = 0,
  topNum = 3,
  leftNum = 3,
  counter = 1;

setInterval(() => {
  topE += topNum;
  leftE += leftNum;
  dvdBox.style.top = `${topE}px`;
  dvdBox.style.left = `${leftE}px`;
  if (topE >= window.innerHeight - 138) {
    topNum = -3;
    counter++;
    dvdBox.children[0].setAttribute("src", `images/dvdlogo-0${counter}.svg`);
  }
  if (leftE >= window.innerWidth - 300) {
    leftNum = -3;
    counter++;
    dvdBox.children[0].setAttribute("src", `images/dvdlogo-0${counter}.svg`);
  }
  if (topE <= 0) {
    topNum = 3;
    counter++;
    dvdBox.children[0].setAttribute("src", `images/dvdlogo-0${counter}.svg`);
  }
  if (leftE <= 0) {
    leftNum = 3;
    counter++;
    dvdBox.children[0].setAttribute("src", `images/dvdlogo-0${counter}.svg`);
  }
  if (counter === 7) counter = 0;
}, 15);
