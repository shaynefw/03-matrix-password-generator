

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

            // the return stops the function from generating a password even if the condition wasn't met 

            return;
        };

        // let passChar be empty because we don't know what user will want 

        let passChar = "";

        // adds additional promps to user requesting specific character types they want in password 

        let lowercaseOption = prompt("Would you like lowercase letters in your password? (yes/no)");
        if (lowercaseOption === "yes") {
            passChar += "abcdefghijklmnopqrstuvwxyz";
        };

        let uppercaseOption = prompt("Would you like uppercase letters in your password? (yes/no)");
        if (uppercaseOption === "yes") {
            passChar += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        };

        let numericOption = prompt("Would you like numbers in your password?");
        if (numericOption === "yes") {
            passChar += "0123456789";
        };

        let specialOption = prompt("Would you like special characters in your password?");
        if (specialOption === "yes") {
            passChar += "!@#$%&()";
        };

        // the ! checks to see if there is any length of characters inside passChar. 
        // If there is no length the the following alert message will be displayed 

        if (!passChar.length) {
            alert("Please press generate button again and say yes to atleast one option.");
            return;
        };

        // let passChar = "!@#$%&abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; 
        let genPass = "";

        // randomly select characters from passChar string that is below the 
        // enterd number in prompt then adds 1 

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