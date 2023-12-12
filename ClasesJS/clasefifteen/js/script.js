function countEvent() {
  let numberArray = new Array(4);
  let sumPar = 0;
  for (let index = 0; index < numberArray.length; index++) {
    let numberInput = prompt("Ingrese un numero:");
    if (isNaN(numberInput) == false) {
      numberArray.push[index] = numberInput;
      if (numberInput % 2 == 0) {
        sumPar = sumPar + 1;
      }
    } else {
      index--;
      alert("No es un numero" + numberInput);
    }
  }
  document.getElementById("details").innerHTML =
    "El numer de pares es:" + sumPar;
}
