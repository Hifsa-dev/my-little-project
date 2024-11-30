const hour0 = document.querySelector("#hour-0");
const hour1 = document.querySelector("#hour-1");
const minute0 = document.querySelector("#minute-0");
const minute1 = document.querySelector("#minute-1");
const second0 = document.querySelector("#second-0");
const second1 = document.querySelector("#second-1");

function setNumber(element, number) {
  element.classList = `number number--${number}`;
}

function setSection(firstElement, secondElement, number) {
  const stringNumber = String(number);
  if (stringNumber.length > 1) {
    setNumber(firstElement, stringNumber[0]);
    setNumber(secondElement, stringNumber[1]);
  } else {
    setNumber(firstElement, 0);
    setNumber(secondElement, stringNumber[0]);
  }
}

function setClock() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  setSection(hour0, hour1, hours);
  setSection(minute0, minute1, minutes);
  setSection(second0, second1, seconds);
}

setClock();

setInterval(() => {
  setClock();
}, 500);            