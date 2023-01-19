

// selecting button in index file

let generateBtn = document.querySelector("#generate");

// defining writePassword function 

function writePassword() {

    // ask user password length 

    let passLength = prompt("How long would you like your password to be?"); 

    // giving instructions to generatePassword 

    function generatePassword(passLength) { 

        // converting what is entered in prompt to a number between 8 and 128. 

        passLength = parseInt(passLength);
        if (passLength < 8 || passLength > 128) {
            alert("Your password must be between 8 and 128 characters");
            return;
        };

        let passChar = "!@#$%&abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let genPass = "";

        // randomly select characters from passChar string that is below the enter number in prompt then adds 1 

        for (let i = 0; i < passLength; i++) {
           genPass += passChar.charAt(Math.floor(Math.random() * passChar.length));
        };  
        return genPass; 
    }

    // putting the result of generatePassword into password variable 

    let password = generatePassword(passLength); 

    // this is the location in the index where generated password will be printed 

    let passwordText = document.querySelector("#password");

    // the generated password put inside password variable will be printed 

    passwordText.value = password;
};

// when button is clicked execute writePassword function printing the generated password 

generateBtn.addEventListener("click", writePassword);