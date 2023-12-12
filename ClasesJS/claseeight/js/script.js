function compare() {
  let numOne = document.getElementById("numOne").value;
  let numTwo = document.getElementById("numTwo").value;
  if (numOne > numTwo) {
    alert("El numero mayor es:" + numOne);
  } else {
    alert("El numero mayor es:" + numTwo);
  }
}
