let monTexte = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua";

// Completer le code suivant pour afficher la longueur de la variable monTexte

alert(monTexte.length);


//Ajouter du code ci dessous pour réaliser la suite de l'exercice


console.log(monTexte.indexOf("i"));

let spanPosition = document.getElementById("position");
spanPosition.innerHTML = monTexte.indexOf("i");

let monTexteUpper = monTexte.toUpperCase();

let chaineMaj = document.getElementById("chaineMaj");
chaineMaj.innerHTML = monTexteUpper;

for (x = 0; x < chaineMaj.innerHTML.length; x++) {
    if (chaineMaj.innerHTML[x].includes("A")) {
        alert("lettre 'A' trouvé");
    }
}
