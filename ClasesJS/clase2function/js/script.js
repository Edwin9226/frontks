let lastName = "Rocha";
let fullName = getFullName(lastName);

console.log(fullName);
function getFullName(lastName) {
  let name = "Diego";
  name = name + " GAibor" + lastName;
  return name;
}

function sum() {
  let numOne = prompt("print first number");
  let numTwo = prompt("print second number");
  let numThree = prompt("print third number");
  let sum = parseInt(numOne) + parseInt(numTwo) + parseInt(numThree);
  alert(sum);
}

function concat() {
  let numOne = document.getElementById("numOne").value;
  let numTwo = document.getElementById("numTwo").value;
  let concatResp = Number(numOne) + Number(numTwo);
  alert(concatResp);
}
