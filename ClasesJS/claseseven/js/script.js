function randomNumber() {
  let randomNum = Math.ceil(Math.random() * 100);
  console.log(randomNum);
  document.getElementById("num").innerHTML = randomNum;
}
