function sum() {
  let numOne = document.getElementById("numOne").value;
  let numTwo = document.getElementById("numTwo").value;
  let numThree = document.getElementById("numThree").value;
  let sum = parseInt(numOne) + parseInt(numTwo) + parseInt(numThree);
  let promedio = sum / 3;
  alert(sum);
  document.getElementById("myp").innerHTML =
    numOne +
    " " +
    "+" +
    numTwo +
    "+" +
    numThree +
    "=" +
    sum +
    " " +
    "El promedio es:" +
    promedio;
}
