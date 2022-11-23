//Créer et ajout la navbar:
let nav = document.querySelector('nav');
nav.innerHTML = `
    <div class="brand">
        <svg id="menuButton" width="512" height="512" viewBox="0 0 512 512" fill="none">
          <rect x="20" y="72" width="473" height="63" rx="13" fill="#ffffff" />
          <rect x="20" y="225" width="473" height="63" rx="13" fill="white" />
          <rect x="20" y="378" width="473" height="63" rx="13" fill="white" />
        </svg>
        <p id="logo">LOGO</p>
    </div>
    <ul class="menu">
        <li>
          <a href="./index.html">Acceuil</a>
        </li>
        <li>
          <a href="./personnages.html">Personnages</a>
        </li>
        <li>
          <a href="./animations.html">Animations</a>
        </li>
    </ul>
`


// La partie qui s'occupe du l'interaction avec la navbar
document.querySelector("#menuButton").addEventListener('click', ()=>{
    let menu = document.querySelector('.menu');

    console.log(menu.style.left)
    if(menu.style.left === "0px"){
        menu.style.left = '-100%';
    }else{
        menu.style.left = '0px';
    }
})