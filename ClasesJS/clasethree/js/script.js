function sum() {
  let numOne = prompt("print first number");
  let numTwo = prompt("print second number");
  let sum = parseInt(numOne) + parseInt(numTwo);
  alert(sum);
  document.getElementById("output").innerHTML =
    numOne + " " + "+" + numTwo + "=" + sum;
}
