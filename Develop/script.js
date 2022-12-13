// Global Variables /////////////////////////////////////////////////////////////////////////////////////////////////
var generateBtn = document.querySelector("#generate");
var generateMenu  = document.querySelector(".card-footer");
var menuEl = document.querySelector("#menu");
var errorMsg = document.querySelector("#error");

// Hiding away two html elements /////////////////////////////////////////////////////////////////////////////////////
errorMsg.style.display = "none";
menuEl.style.display = "none";

// Write password to the #password input //////////////////////////////////////////////////////////////////////////////
function writePassword() {
  var passwordText = document.querySelector("#password");
  var passLength = document.querySelector("#characters").value

  // Multi-Dimensional Array //////////////////////////////////////////////////////////////////////////////////////////
  var possibleChoices = [
  [],
  [],
  [],
  []
  ]

  // Generates password ///////////////////////////////////////////////////////////////////////////////////////////////
  function generatePassword() {
    var lowercase = document.querySelector("#lowercase");
    var uppercase = document.querySelector("#uppercase");
    var numbers = document.querySelector("#numbers");
    var special = document.querySelector("#special");
    
    // Resets the Gates //////////////////////////////////////////////////////////////////////////////////////////////
    var check1 = false;
    var check2 = false;
    var check3 = false;
    var check4 = false;

      // Checks which checkbox is checked and adds to the array  /////////////////////////////////////////////////////
      if (uppercase.checked) {
        possibleChoices.splice(0, 1, ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]);
      } 

      if (lowercase.checked) {
        possibleChoices.splice(1, 1, ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]);
      }

      if (numbers.checked) {
        possibleChoices.splice(2, 1, ["1","2","3","4","5","6","7","8","9","0"]);
      }

      if (special.checked) {
        possibleChoices.splice(3, 1, ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "-", ".", "`", "~", "|", "<", ">", "=", "-", "_"]);
      }

      // Loop for randomly selecting characters for the password /////////////////////////////////////////////////////
      password = "";
      for (var i = 0; i < passLength; i++) {
          var rando1 = Math.floor(Math.random() * possibleChoices.length);
          var rando2 = Math.floor(Math.random() * possibleChoices[rando1].length);
          console.log(rando1);

        // Series of gates to assure each chosen character type gets selected once //////////////////////////////////
        if (check1 === false && rando1 !== 0) {
          check1 = true;
          rando1 = 0;
          i ++;
          rando2 = Math.floor(Math.random() * possibleChoices[rando1].length);
          if (possibleChoices[rando1][rando2] === undefined) {
            i --;
            console.log("booty");
            continue;      
        } else {
          password += possibleChoices[rando1][rando2];
        }
        }

        // Gate 2 ///////////////////////////////////////////////////////////////////////////////////////////////////
        if (check2 === false && rando1 !== 1) {
          check2 = true;
          rando1 = 1;
          i ++;
          rando2 = Math.floor(Math.random() * possibleChoices[rando1].length);
          if (possibleChoices[rando1][rando2] === undefined) {
            i --;
            console.log("booty");
            continue;      
        } else {
          password += possibleChoices[rando1][rando2];
        }
        }

        // Gate 3 //////////////////////////////////////////////////////////////////////////////////////////////////
        if (check3 === false && rando1 !== 2) {
          check3 = true;
          rando1 = 2;
          i ++;
          rando2 = Math.floor(Math.random() * possibleChoices[rando1].length);
          if (possibleChoices[rando1][rando2] === undefined) {
            i --;
            console.log("booty");
            continue;      
        } else {
          password += possibleChoices[rando1][rando2];
        }
        }

        // Gate 4 //////////////////////////////////////////////////////////////////////////////////////////////////
        if (check4 === false && rando1 !== 3) {
          check4 = true;
          rando1 = 3;
          i ++;
          rando2 = Math.floor(Math.random() * possibleChoices[rando1].length);
          if (possibleChoices[rando1][rando2] === undefined) {
            i --;
            console.log("booty");
            continue;      
        } else {
          password += possibleChoices[rando1][rando2];
        }
        }

        if (possibleChoices[rando1][rando2] === undefined) {
            i --;
            console.log("booty");
            continue;      
        } else {
          password += possibleChoices[rando1][rando2];
        }
      }
  }
  // Runs the function and writes the password ///////////////////////////////////////////////////////////////////////
  generatePassword();
  passwordText.value = password;
  console.table(possibleChoices);
}

// Add event listener to generate button ////////////////////////////////////////////////////////////////////////////
generateBtn.addEventListener("click", function(event) {
  // Displays the menu on first press
  if (menuEl.style.display === "none"){
        menuEl.style.display = "";
  // If the menu is open, check if any options have been selected //////////////////////////////////////////////////
  } else if (menuEl.style.display === "" && document.querySelector('.checkbox:checked') !== null) {
    errorMsg.style.display = "none";
    writePassword();
  // If none have been selected, show error ///////////////////////////////////////////////////////////////////////
  } else {
    errorMsg.style.display = "";
  }
}

);
