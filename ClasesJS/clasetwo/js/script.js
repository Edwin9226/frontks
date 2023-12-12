function reset() {
  document.getElementById("box").style.width = "10px";
  document.getElementById("box").style.height = "10px";
  document.getElementById("box").style.background = "yellow";
}

function enlarge() {
  let currentSizeWidth = document.getElementById("box").style.width;
  let currentSizeHeight = document.getElementById("box").style.height;

  let sumWidth = parseInt(currentSizeWidth) + 10;
  let sumHeight = parseInt(currentSizeHeight) + 10;

  document.getElementById("box").style.width = sumWidth + "px";
  document.getElementById("box").style.height = sumHeight + "px";
}
