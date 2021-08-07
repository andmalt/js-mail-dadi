
let emailRequired = prompt("Inserisca la sua email");

let email = ["andrea@gmail.com", "marco@gmail.com", "gianluca@gmail.com", "sara@gmail.com"];
console.log(email);

let validEmail;
let myNumber;
let pcNumber;

for (i = 0; i < email.length ; i++){
    if (emailRequired == email[i]){
    validEmail = emailRequired;
    } 
}
if(validEmail == emailRequired){
    alert("Benvenuto/a "+ emailRequired);
    myNumber = parseInt((Math.random() * 6) + 1);
    pcNumber = parseInt((Math.random() * 6) + 1);
}
else{
    alert("Attenzione!!! email non valida.");
    myNumber = 0;
    pcNumber = 0;
}

let result;

if(myNumber > pcNumber){
    result = "Complimenti!!! hai vinto"; 
}else if(myNumber < pcNumber){
    result = "Spiacente hai perso!";
}else if((myNumber == 0) || (pcNumber == 0)){
    result = "Numeri non creati inserire un'email valida!";
}else {
    result = "Hai pareggiato!";
}

document.getElementById("my-number").innerHTML = myNumber;
document.getElementById("pc-number").innerHTML = pcNumber;
document.getElementById("result").innerHTML = result;


console.log("my:"+myNumber + " pc:"+pcNumber);