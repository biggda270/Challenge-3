// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwlength;
var confirmNumeric;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

function getInfo() {
pwlength = prompt("Choose a length between 8 and 128 characters.")
if (pwlength < 8 || pwlength > 128 ) {
  alert("Password must be between 8 and 128 charcters long!")
  return null
}

confirmUppercase =confirm("Would you like to include Uppercase characters?")
confirmLowercase =confirm("Would you like to include lowercase characters?")
confirmNumeric =confirm("Would you like to include numeric characters?")
confirmCharacter =confirm("Would you like to include special charcaters?")
if (confirmUppercase === false && confirmLowercase === false && confirmNumeric === false && confirmCharacter === false) {
  alert("You must select at least one!")
  return null
}


}

function generatePassword() {
  getInfo() 
  console.log(pwlength)
  console.log(confirmUppercase)
  console.log(confirmLowercase)
  console.log(confirmNumeric)
  console.log(confirmCharacter)
  var chosenCharacterArray = []
  //if confirmuppercasee ==== true we want to push the uppercase array into the chosen character array

 // var userInput = prompt("What do you want your password to be?")
  //return userInput;
}


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

//var chosenCharacterArray = []
/*var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//https://www.w3schools.com/jsref/jsref_push.asp

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random*/