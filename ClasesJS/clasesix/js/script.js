function selectBackColor() {
  let colorSelect = document.getElementById("color-select").value;
  let colorSelectInput = document.getElementById("color-select-input").value;
  console.log(colorSelect);
  console.log(colorSelectInput);
  document.getElementById("myDiv").style.backgroundColor = colorSelectInput;
}

function selectTextColor() {
  let colorSelectInput = document.getElementById("color-select-input").value;
  document.getElementById("myDiv").style.color = colorSelectInput;
}
