function clickMe() {
  let x = document.getElementById("input").value;
  let y;
  y = x.split("+");
  let counter = 0;
  for (i = 0; i < y.length; i++) {
    counter += Number(y[i]);
  }
  document.getElementById("p").innerHTML = counter;
}
