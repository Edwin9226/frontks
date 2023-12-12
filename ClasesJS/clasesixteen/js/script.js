function sumNumbers() {
  let numberArray = new Array(5);
  let sumNumber = 0;
  for (let index = 0; index < numberArray.length; index++) {
    let numberInput = prompt("Ingrese un numero:");
    if (isNaN(numberInput) == false) {
      numberArray.push[index] = numberInput;
      sumNumber = parseInt(sumNumber) + parseInt(numberInput);
    } else {
      index--;
      alert("No es un numero: " + numberInput);
    }
  }
  document.getElementById("sum").innerHTML =
    "La suma de los 5 numeros es: " + sumNumber;
}
