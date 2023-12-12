function salaryAccounts() {
  let countSalary = new Array(5);
  for (let index = 0; index < countSalary.length; index++) {
    let salary = prompt("Ingrese un salario:");
    countSalary[index] = salary;
    console.log(countSalary[index]);
  }
  let sumSalary = countSalary.reduce(function (a, b) {
    return parseInt(a) + parseInt(b);
  });

  document.getElementById("sum").innerHTML = sumSalary;
  document.getElementById("average").innerHTML = sumSalary / countSalary.length;

  countSalary.forEach((salary) => {
    console.log(salary);
    if (salary > 1000) {
      a++;
      console.log(a);
    }
  });
  document.getElementById("above1000").innerHTML =
    "Los valores superiores a 1000 son: " + a;
}
