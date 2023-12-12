function imageShow() {
  let numberShow = prompt("Ingrese u  Numero:");
  let imageA1 = document.getElementById("a1");
  let imageA2 = document.getElementById("a2");
  let imageA3 = document.getElementById("a3");
  debugger;
  if (numberShow < 100) {
    imageA1.style.display = "flex";
    imageA2.style.display = "flex";
    imageA3.style.display = "flex";
  } else if (numberShow == 100) {
    imageA1.style.display = "flex";
    imageA2.style.display = "flex";
  } else {
    imageA1.style.display = "flex";
    imageA2.style.display = "none";
    imageA3.style.display = "none";
  }
}
