function reset() {
  let container = document.getElementById("container");
  container.style.width = "10px";
  container.style.height = "10px";
  container.style.backgroundColor = "yellow";
}

function enlarge() {
  let container = document.getElementById("container");
  let sizeContainer = container.style.width;
  let sumContainer = parseInt(sizeContainer) + 10;
  container.style.width = sumContainer + "px";
  console.log(parseInt(sizeContainer));
  if (parseInt(sizeContainer) <= 500) {
    container.style.backgroundColor = "blue";
  } else {
    container.style.backgroundColor = "brown";
  }
}
