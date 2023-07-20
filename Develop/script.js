// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
submit.addEventListener("click", writePassword);

function generatePassword () {
  
}

var modal = document.getElementById("myModal");

var btn = document.getElementById("generate");

var span = document.getElementsByClassName("close")[0];
 
btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

var slider = document.getElementById("length");
var output = document.getElementById("slideValue");
output.innerHTML = `Password Length: ${slider.value} characters`;

slider.oninput = function() {
  output.innerHTML = `Password Length: ${this.value} characters`;
  return (this.value)
}