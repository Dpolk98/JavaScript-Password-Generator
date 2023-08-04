// Assignment Code
var generateBtn = $("#generate");
var closeEl = $("#close");
var submitEl = $("#submit");
var passwordText = $("#password");
var modal = document.getElementById("myModal");
var btn = document.getElementById("generate");
var span = document.getElementsByClassName("close")[0];
var lengthEl = document.getElementById("slideValue");
var slider = document.getElementById("length");

// Add event listener to generate button
submitEl.click(function(){
  modal.style.display = "none"
  document.getElementById("password").placeholder = `${generatePassword(slider.value)}`
});

function generatePassword(symbol, lower, upper, number, longness) {
  var finalPassword = "test"
  return finalPassword;
}
 
generateBtn.click (function() {
  modal.style.display = "block";
})

closeEl.click (function() {
  modal.style.display = "none";
})

lengthEl.innerHTML = `Password Length: ${slider.value} characters`;

slider.onchange = function() {
  lengthEl.innerHTML = `Password Length: ${this.value} characters`;
  console.log(this.value)
  return (this.value);
}