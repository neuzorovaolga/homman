import { checkLose, checkWin } from "./logic.js";

export function renderSecretLetters(word) {
  const wordArr = [...word];
  console.log(word);
  const text = document.getElementsByClassName("word-wrap")[0];

  wordArr.forEach((item) => {
    const elem = document.createElement("div");
    elem.textContent = " ";
    elem.classList.add("letter");
    text.append(elem);
  });
}

export function chekLatter(letter, word) {
  const wordArr = [...word];
  let userEror = true;
  wordArr.forEach((item, index) => {
    if (letter === item) {
      changeNode(index, letter);
      userEror = false;
    }
  });
  if (userEror) {
    checkLose();
  }
  checkWin();
}

function changeNode(index, letter) {
  const nodes = [...document.getElementsByClassName("letter")];
  nodes[index].append(letter);
  nodes[index].classList.add("black-letter");
}
