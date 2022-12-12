// Assignment Code
var generateBtn = document.querySelector("#generate");
var generateMenu  = document.querySelector(".card-footer");
var menuEl = document.querySelector("#menu");
var errorMsg = document.querySelector("#error")
errorMsg.style.display = "none";
menuEl.style.display = "none";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passLength = document.querySelector("#characters").value
  var possibleChoices = [
  ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],
  ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
  ["1","2","3","4","5","6","7","8","9","0"],
  ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]
  ]

  function generatePassword() {
    password = "";
    for (var i = 0; i < passLength; i++) {
      var rando1 = Math.floor(Math.random() * possibleChoices.length);
      var rando2 = Math.floor(Math.random() * possibleChoices[rando1].length);
      // console.log(rando1);
      // console.log(rando2);
      password += possibleChoices[rando1][rando2];
    }
   }
  generatePassword();
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function(event) {
// Displays the menu on first press
  if (menuEl.style.display === "none"){
        menuEl.style.display = "";
// If the menu is open, check if any options have been selected
  } else if (menuEl.style.display === "" && document.querySelector('.checkbox:checked') !== null) {
    errorMsg.style.display = "none";
    writePassword();
// If none have been selected, show error
  } else {
    errorMsg.style.display = "";
  }

}
);