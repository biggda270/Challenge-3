// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//button click asks for password criteria

//criteria length of 8-128 characters

//prompt for character type

//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// input should be validated and onbe charcter type selected

// password is genrated and shown as prompt or written to page