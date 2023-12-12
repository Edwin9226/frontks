function personDetail() {
  let country = document.getElementById("country").value;
  let city = document.getElementById("city").value;
  alert("Country:" + country + " ----City:" + city);
  document.getElementById("myp").innerHTML =
    "Country:" + country + " ----City:" + city;
}
