import { changePicture } from "./picture.js";

const arrWords = [
  "школа",
  "поезд",
  "яблоко",
  "пингвин",
  "океан",
  "метеорит",
  "праздник",
  "цветок",
  "солнце",
  "зоопарк",
];

function generatorWord(arr) {
  let num = Math.floor(Math.random() * arrWords.length);
  return arr[num];
}

export const word = generatorWord(arrWords);

export let counter = makeCounter();

function startGame() {
  location.reload();
}

export function checkLose() {
  const numb = counter();
  changePicture(numb);
  callLoseNotification(numb);
}

function callLoseNotification(numb) {
  if (numb === 2) {
    setTimeout(() => {
      let massage = confirm("Вы проиграли! Хотите начать заново?");
      if (massage === false) {
        const input = document.getElementsByTagName("input")[0];
        console.log(input);
        input.disabled = true;
        const button = document.querySelector("button");
        button.disabled = true;
      } else {
        startGame();
      }
    }, 200);
  }
}

export function checkWin() {
  const nodes = [...document.getElementsByClassName("letter")];
  console.log(nodes);
  const havingClass = nodes.every((item) =>
    item.classList.contains("black-letter")
  );
  console.log(havingClass);
  callWinNotification(havingClass);
}

function callWinNotification(havingClass) {
  if (havingClass) {
    setTimeout(() => {
      let massage = confirm("Вы выиграли! Хотите начать заново?");
      if (massage === false) {
        const input = document.getElementsByTagName("input")[0];
        console.log(input);
        input.disabled = true;
        const button = document.querySelector("button");
        button.disabled = true;
      } else {
        startGame();
      }
    }, 200);
  }
}

function makeCounter() {
  let count = 0;
  return function () {
    return count++;
  };
}
