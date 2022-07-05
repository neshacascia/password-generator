const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordTwo = document.querySelector('#password-two')
let passwordLength = 10

function generatePassword() {
    for (let i = 0; i <= passwordLength; i++) {
        let passwordOne = document.querySelector('#password-one')
        let randomIndex = Math.floor(Math.random() * characters.length)
        passwordOne.textContent += characters[randomIndex]
    }

    for (let i = 0; i <= passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        passwordTwo.textContent += characters[randomIndex]
    }
}









