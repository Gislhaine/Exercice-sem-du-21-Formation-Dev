// 1- Les variables:

// 1.1- Type nombre / number:
let sam = 50;

//Opérateurs mathematiques:
let a = 100;
let b = 200;

console.log(a * b);

// 1.2- Type chaine de caractères/Strings:
let prenom = "Samy";

//Opérateur de concatenation:
let nom = "Djemai";
console.log(prenom + " " + nom + ", comment allez vous?");
console.log(`Bonjour! ${prenom} ${nom}, comment allez-vous!`);

//1.3- Type boolean:
let isPermis = false;
let isMajeur = false;

//Opérateurs logiques:
//Le ET
console.log(isPermis && isMajeur);

// true && true = true
// true && false = false
// false && true = false
// false && false = false

//Le OU:
console.log(isPermis || isMajeur);
// true || true = true
// true || false = true
// false || true = true
// false || false = false

//Le xor / OU exclusif:
console.log((isPermis && !isMajeur) || (!isPermis && isMajeur));
// true xor true = false
// true xor false = true
// false xor true = true
// false || false = false

//1.4- Type tableau/ Arrays:
let cours = ["HTML", "CSS", "JS"];

console.log(cours);

let numbers = [2, 10, 22, 15, 0, 1, 36];

let filterNumbers = numbers.filter((nombre) => {
  return nombre >= 10;
});

//2- Les blocs:

//2.1- Les conditions:
//2.1.1- IF/ELSE
let isCssDone = true;
let isHtmlDone = true;
let isSassDone = true;

if (isCssDone && isHtmlDone && isSassDone) {
  console.log("Vous avez fini le programme");
} else {
  console.log("Vous n'avez pas fini le programme");
}

//2.1.2- SWITCH/CASE
let couleur = "rouge";

switch (couleur) {
  case "fraise":
  case "rouge":
    console.log("red");
    break;
  case "bleu":
    console.log("blue");
    break;
  default:
    console.log("Couleur inconnue");
}

//2.1.3- Op ternaire:
// condition ? Si vrai : Si faux

let isConduire = isPermis ? "vous pouvez conduire" : "vous ne pouvez pas conduire";

console.log(isPermis ? "vous pouvez conduire" : "vous ne pouvez pas conduire");

// 2.2- Les boucles:

//2.2.1- La boucle for:
for (let i = 0; i <= 20; i = i + 2) {
  console.log("nombre pair: " + i);
}

//2.2.2- La boucle while:
let j = 0;
while (j <= 20) {
  console.log("nombre pair: " + j);
  j = j + 2;
}

let leNombre;
// while(isNaN(leNombre)){
//     leNombre = prompt("Veuillez entrer un nombre");
// }

//Les fonctions:

//Déclaration de la fonction
function afficheBonjour() {
  console.log("Bonjour Samy!");
}

//Executer la fonction
afficheBonjour();

afficheBonjour();

// Déclaration de fonction paramétré
function disBonjour(nom, prenom) {
  console.log(`Bonjour ${nom} ${prenom}!`);
}

disBonjour("Djemai", "Samy");
disBonjour("John", "Doe");

function returnBonjour(nom, prenom) {
  return `Bonjour ${nom} ${prenom}!`;
}

console.log(returnBonjour("Fred", "Potter"));

//Exemple: Moyenne:

function moyenne(notes) {
  let somme = 0;
  for (let i = 0; i < notes.length; i++) {
    somme = somme + notes[i];
  }

  let laMoyenne = somme / notes.length; // 11

  return Math.round(laMoyenne * 100) / 100;
}

console.log(moyenne([15, 12, 7, 10, 13, 15, 6]));
console.log(moyenne([10, 8, 12, 13, 15]));

//les fonctions callbacks:
function nombrePairs(callback) {
  for (let i = 0; i <= 20; i = i + 2) {
    callback(i);
  }
}

nombrePairs((leNombrePair) => {
  console.log(leNombrePair);
});

nombrePairs((leNombrePair) => {
  console.log("Le nombre pairs est " + leNombrePair);
});

nombrePairs((leNombrePair) => {
  let p = document.createElement("p");
  p.textContent = "Le nombre pair: " + leNombrePair;
  document.body.appendChild(p);
});

function myFilter(tableau, callback) {
  let filteredTab = [];
  for (let i = 0; i < tableau.length; i++) {
    if (callback(tableau[i])) {
      filteredTab.push(tableau[i]);
    }
  }
  return filteredTab;
}

let newTab = myFilter([2, 10, 22, 15, 0, 1, 36], (element) => {
  return element >= 10;
});

console.log(newTab);

let newTab2 = myFilter([2, 10, 22, 15, 0, 1, 36], (element) => {
  return element <= 10;
});
console.log(newTab2);

//Les objet et classes
let user1 = {
  nom: "Djemai",
  prenom: "Samy",
  age: 29,
  isPermis: true,
  afficherUser: function () {
    return `Bonjour ${this.nom} ${this.prenom}`;
  },
};

console.log(user1.age);

console.log(user1.afficherUser());

console.log(user1);

//Les classes:
class Utilisateur {
  constructor(unEmail, username, age) {
    this.email = unEmail;
    this.username = username;
    this.age = age;
    this.afficheUser = function () {
      console.log(`Bonjour ${this.email} ${this.username}`);
    };
    this.saveToDB = function () {
      console.log("Enregistrer l'utilisateur dans la base de données");
    };
  }
}

let utlisateur1 = new Utilisateur("sam@sam.com", "sam", 29);
let utlisateur2 = new Utilisateur("john@john.com", "John", 39);

console.log(utlisateur1.email);

utlisateur1.afficheUser();

//Exemple programmation fonctionnel
function User(email, username, age) {
  return {
    email: email,
    username: username,
    age: age,
    afficheUser: function () {
      console.log(`Bonjour ${this.email} ${this.username}`);
    },
  };
}

let user2 = User("john@john.com", "John", 39);
user2.afficheUser();

//Manipulation du DOM

console.dir(document);

//Selection d'éléments avec la nom de balise
let h1List = document.getElementsByTagName("h1");
let h1List2 = document.querySelectorAll("h1");

//Selection d'éléments avec la nom de la classe
let paragraphelist = document.getElementsByClassName("paragraphe");
let paragraphelist2 = document.querySelectorAll(".paragraphe");

let dernierP = document.querySelector("p:last-child");
console.log(dernierP);

//Selection d'un élément avec l'id
let p = document.getElementById("text1");
let p2 = document.querySelector("#text1");

//Modifier des éléments:

//Modifier les texte dans l'élément
p.textContent = "un paragraphe intéressant!";

//Modifier et interpreter des balise dans l'élément:
p2.innerHTML = "un paragraphe <strong>intéressant!</strong>";

//Modifier la balise et son contenu
dernierP.outerHTML = "<h2>Le nombre pair: 20</h2>";

//Midifier le style:
//background-color: red;
//camelCase:
//backgroundColor
//borderRadius
p2.style.color = "rgb(100, 100, 100)";

//Créer des élément:
let newP = document.createElement("p");

//Modifier et ajoute du contenu
newP.textContent = "Un paragraphe";
newP.style.fontSize = "35px";

//Ajoute dans un élément du DOM
document.getElementById("addText").appendChild(newP);

//document.getElementById('addText').appendChild(document.createElement('p'));

//exemple de reponse de la DB:
let user = {
    email:"sam@sam.com",
    role:"admin"
}

//afficher les input si l'utilisateur est un admin
if(user.role ==="admin"){
    //Créer un input
    let inputUsername = document.createElement('input')
    //ajouter un attribut a l'élément:
    inputUsername.setAttribute("name", "username");

    //Créer un bouton
    let button = document.createElement('button');
    button.id = "validateButton"
    button.textContent = 'Valider';

    //ajouter le bouton et l'input dans le form
    document.querySelector('form').append(inputUsername);
    document.querySelector('form').appendChild(button);
}else{
    let p = document.createElement('p')
    p.textContent = "Veuillez vous connecter";
    document.querySelector('form').append(p);
}

//Les évenements:
document.querySelector("#validateButton").addEventListener("click", 
(event) => {
    //Empeche le rafraichissement de la page
    event.preventDefault();

    //selectionner l'input avec l'attribut name=username
    let input = document.querySelector('[name="username"]');

    //Créer un élément HTML paragraphe
    let user = document.createElement('p');

    //modifier le texte du paragraphe avec la valeur de l'input
    user.textContent = input.value;

    //Ajouter a la div les paragraphe
    document.getElementById('users').appendChild(user);
});

//Exercice: d'avoir un inpur pour entrer un nombre et afficher dans la page la table de multiplication du nombre.

//1. Dans le HTML: Ajouter le input et un bouton. DONE

//2. Dans le JS:
//2.1- Selectionner le bouton et surveille l'evenement clique.DONE
document.querySelector('#tableButton').addEventListener('click', 
(e)=>{
    e.preventDefault();
    
    //2.2- On selectionne l'input pour connaitre sa valeur. DONE
    let nombreInput = document.querySelector('#numberInput');
    let nombre = nombreInput.value;

    // let theNumber = document.querySelector('#numberInput').value;

    //2.3- remplacer l'ancienne table. DONE
    let laTable = document.getElementById('table');
    laTable.innerHTML = '';

    
    //2.4- utiliser une boucle pour generer les ligne de la table, et pour chaque ligne l'ajouter dans le DOM. DONE
    for(let i = 0; i <=10; i++){
        //Crée le paragraphe
        let p = document.createElement('p');
        //On ajoute l'opération dans le texte du paragraphe
        p.textContent = `${i} x ${nombre} = ${i * nombre}`;
        // p.textContent = i + " x " + nombre + " = " + (i * nombre);

        //ajoute le pragraphe dans la div du DOM
        laTable.appendChild(p);
    }
});

//Tuto Navbar Responsive

//CSS:
// Les animations et la 3D.
// Les media query: Site responsive.

// SASS:
//Les bases
//Exemple Bootstrap

// Le Patter MVC: Model Vue Controller.






