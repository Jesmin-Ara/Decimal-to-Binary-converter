let input = document.getElementById("decimal-input");
let output = document.getElementById("binary-output");
let button = document.getElementById("convert-button");

button.addEventListener("click", function() {
  let decimal = input.value;
  let binary = parseInt(decimal, 10).toString(2);
  output.innerText = binary;
})
input.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    let decimal = input.value;
    let binary = parseInt(decimal, 10).toString(2);
    output.innerText = binary;
  }
})
//Important Note: The parseInt() function parses a string and returns an integer.