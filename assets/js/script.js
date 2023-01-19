
var upperCase = ["A", "B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCase = ["a", "b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var specialChar = ["!","@","#","$","%","^","&","*","(",")","-","+","=","{","}","|","/",":",";",",",".","<",">","?0","'"];
var numericInt = ["0","1","2","3","4","5","6","7","8","9"];

// selecting button in index file

let generateBtn = document.querySelector("#generate");

// defining writePassword function 

function writePassword() {

    // ask user password length 

    // let passLength = prompt("How long would you like your password to be?"); 

    // giving instructions to generatePassword 

    

    // putting the result of generatePassword into password variable 

    let password = generatePassword(); 
    console.log(password)

    // this is the location in the index where generated password will be printed 

    let passwordText = document.querySelector("#password");

    // the generated password put inside password variable will be printed 

    passwordText.value = password;
};

function generatePassword() { 

    // converting what is entered in prompt to a number between 8 and 128. 

    // passLength = parseInt(passLength);
    var passLength = parseInt(prompt("How many characters would you like your password?"));
    if (passLength < 8) {
        alert("Password length should be atleast 8 characters.");
        return null;
    }
    if (passLength > 128) {
        alert("Password length must be less than 129 characters.");
        return null;
    }
    // if (passLength < 8 || passLength > 128) {
    //     alert("Your password must be between 8 and 128 characters");

    //     // the return stops the function from generating a password even if the condition wasn't met 

    //     return;
    // };

    // let passChar be empty because we don't know what user will want 

    let passChar = [];
    let  guaranteedChar = [];
    let result = [];

    // adds additional promps to user requesting specific character types they want in password 

    let lowercaseOption = confirm("Would you like lowercase letters in your password?");
    let uppercaseOption = confirm("Would you like uppercase letters in your password?");
    let numericOption = confirm("Would you like numbers in your password?");
    let specialOption = confirm("Would you like special characters in your password?");
   
    if (specialOption) {
        passChar = passChar.concat(specialChar);
        guaranteedChar.push(randomChoice(specialChar));
    };

    if (lowercaseOption) {
        passChar = passChar.concat(lowerCase);
        guaranteedChar.push(randomChoice(lowerCase));
    };

    if (uppercaseOption) {
        passChar = passChar.concat(upperCase);
        guaranteedChar.push(randomChoice(upperCase));
    };

    if (numericOption) {
        passChar = passChar.concat(numericInt);
        guaranteedChar.push(randomChoice(numericInt));
    };

    for (var i = 0; i < passLength; i++) {
        var passChars = randomChoice(passChar);
    
        result.push(passChars);
      };
      for (var i = 0; i < guaranteedChar.length; i++) {
        result[i] = guaranteedChar[i];
      };

      return result.join('');

    // the ! checks to see if there is any length of characters inside passChar. 
    // If there is no length the the following alert message will be displayed 

    // if (!passChar.length) {
    //     alert("Please press generate button again and say yes to atleast one option.");
    //     return;
    // };

    // let passChar = "!@#$%&abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; 
    // let genPass = "";

    // randomly select characters from passChar string that is below the 
    // enterd number in prompt then adds 1 
    console.log(specialOption);
    console.log(numericOption);
    console.log(uppercaseOption);
    console.log(lowercaseOption);
    // for (let i = 0; i < passLength; i++) {
    //     Math.floor(Math.random() * passChar.length);
    // };  
    // return genPass; 
}

function randomChoice(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
  
    return randElement;
  }

// when button is clicked execute writePassword function printing the generated password 

generateBtn.addEventListener("click", writePassword);

console.log()