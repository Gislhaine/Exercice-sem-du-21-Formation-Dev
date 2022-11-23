
async function getPersonnages(){
    //END POINT:
    //Envoi une requete a l'API
    let data = await fetch("https://thronesapi.com/api/v2/Characters");

    //Transforme le json en type Javascript
    let personnages = await data.json();

    //Selectionner la div qui contient les personnages
    let personnagesDiv = document.getElementById('personnages');
    
    //Utiliser un boucle pour ajouter change personnage dans la div:
    for( let i = 0; i < personnages.length; i++){
        let persoDiv = document.createElement('div');
        persoDiv.innerHTML = `
        <h2>${personnages[i].fullName}</h2>
        <img src=${personnages[i].imageUrl} />
        <p>${personnages[i].title}</p>
        `
        personnagesDiv.appendChild(persoDiv);
    }
}
getPersonnages()