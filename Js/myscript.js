
let emailRequired = prompt("Inserisca la sua email");

let email = ["andrea@gmail.com", "marco@gmail.com", "gianluca@gmail.com", "sara@gmail.com"];
console.log(email);
let validEmail;

for (i = 0; i < email.length ; i++){
    if (emailRequired == email[i]){
    validEmail = emailRequired;
    } 
}
if(validEmail == emailRequired){
    alert("Benvenuto/a "+ emailRequired);
}
else{
    alert("Attenzione!!! email non valida.");
}

