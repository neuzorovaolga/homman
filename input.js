import { word } from "./logic.js";
import { chekLatter } from "./word.js";

export function setButtonListener() {
  const butt = document.getElementsByTagName("button")[0];
  butt.onclick = handleButton;
}

function handleButton() {
  const input = document.getElementsByTagName("input")[0];
  let val = input.value;
  console.log(val);
  chekLatter(val, word);
  input.value = "";
}
