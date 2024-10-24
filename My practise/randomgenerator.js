function generatePassword(length,includeLowercase , includeUppercase, includeNumbers, includeSymbols){

    const lowercaseChars = `abcdefghijklmnopqrstuvw`;
    const uppercaseChars = `ABCDEFGHIJKLMNOPRSTUVWXYZ`;
    const numberChars = `0123456789`;
    const symbolChars = `!@#$%^&*()~()_{"+++="?><|:|:'`;

    let allowedChars = ``;
    let password = ``;

    allowedChars += includeLowercase ? lowercaseChars : ``;
    allowedChars += includeUppercase ? uppercaseChars : ``;
    allowedChars += includeNumbers ? numberChars : ``;
    allowedChars += includeSymbols ? symbolChars : ``;

    if(length <= 0){
 return `(The password length must at least be equal to 1!)`;
    }
 if(allowedChars.length === 0){
    return `(At least one set of characters has to be selected)`;
 }
 for(let i = 0; i < length; i++){
const randomIndex = Math.floor(Math.random() * allowedChars.length);
password += allowedChars[randomIndex];
 }
    return password;
}

const passwordLength = 12;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatePassword(passwordLength, includeLowercase, includeUppercase,includeNumbers, includeSymbols);
 console.log (`The generated password is ${password}`);