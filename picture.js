export function changePicture(numb) {
  const arrImg = ["./img/2.png", "./img/3.png", "./img/4.png"];
  let img = document.getElementsByClassName("img")[0];
  img.src = arrImg[numb];
}
