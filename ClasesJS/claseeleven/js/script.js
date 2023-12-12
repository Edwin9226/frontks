function numberLucky() {
  let numberLuck = prompt("Ingrese un número");
  if (numberLuck == 777) {
    document.getElementById("details").innerHTML = "1,000,000$";
    document.getElementById("details").style.color = "blue";
    document.getElementById("details").style.border = "5px solid red";
    document.getElementById("details").style.background = "yellow";
  } else {
    document.getElementById("details").innerHTML = "Tu Nombre";
    document.getElementById("details").style.color = "yellow";
    document.getElementById("details").style.border = "5px solid red";
    document.getElementById("details").style.background = "black";
  }
}
