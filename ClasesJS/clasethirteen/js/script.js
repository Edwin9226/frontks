function twoNumber() {
  let numberOne = prompt("ingrese un numero uno");
  let numberTwo = prompt("Ingrese un numero dos");
  let sum = Number(numberOne) + Number(numberTwo);
  let details = document.getElementById("details");
  if (sum >= 100) {
    details.innerHTML = sum;
    details.style.color = "blue";
  } else {
    details.innerHTML = sum;
    details.style.color = "red";
  }
}
