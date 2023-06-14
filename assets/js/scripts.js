// Déclaration des constantes et variables pour le menu burger
const btnOpen       = document.getElementById('logo-burger'),
      btnClose      = document.getElementById('close-menu'),
      menuBurger    = document.getElementById('nav-overlay'),
      navbar        = document.getElementById('navbar');
let btnActions      = [btnOpen, btnClose];

// Déclaration des constantes du menu accordéon
const accordeon     = document.getElementsByClassName('accordeon'),
      accordeonText = document.getElementsByClassName('accordeon_text'),
      arrow         = document.getElementsByClassName('accordeon_arrow');

// Déclaration de la constante pour le scroll up
const scrollUp      = document.querySelector('.scroll-up');

// Déclaration de la constante navLink pour le lien actif du menu
const navLinks      = document.getElementsByClassName('element-menu');

/** 
* On boucle sur le tableau btnActions puis on écoute l'évènement au click sur les boutons 
* open et close pour ajouter ou supprimer la class 'show-menu' pour l'apparition du menu burger 
*/
btnActions.map((btn) => {

    btn.addEventListener('click', () => {
        menuBurger.classList.toggle('show-menu');
    });
});

/** 
* On écoute l'évènement au clique sur le container du menu burger et on récupère 
* la cible du clique avec l'argument 'e'
* Si la cible du clique est différente de la navbar ou d'un élément du menu alors on retire la classe 'show-menu'
*/
menuBurger.addEventListener('click', (e) => {
    e.target != navbar && menuBurger.classList.remove('show-menu');
});

/**
* On écoute l'évènement aux changements de tailles de la fenêtre du navigateur 
* Si la largeur de la fenêtre est supérieur à 992px alors on retire la class 'show-menu' 
*/
window.addEventListener('resize', () => {
    this.innerWidth > 992 && menuBurger.classList.remove('show-menu');
});

/**
 * On écoute l'évènement au scroll de la fenêtre du navigateur.
 * Grâce à une opération ternaire, on réalise notre condition :
 * Si le scroll est supérérieur à 400px alors on ajoute la class 'show' sinon on la retire
 */
window.addEventListener('scroll', () => {
    this.scrollY > 400 ? scrollUp.classList.add('show') : scrollUp.classList.remove('show');
});

// Menu accordéon
for (let j = 0; j < accordeon.length; j++) {

    accordeon[j].addEventListener('click',  () => {
        accordeonText[j].classList.toggle('open');
        arrow[j].classList.toggle('rotate');
    });
};

// Lien actif de la page dans le menu
for (let n = 0; n < navLinks.length; n++) {

    let currentLink = location.pathname.split('/')[1];

    if (navLinks[n].getAttribute('href').indexOf(currentLink) !== -1) {
        navLinks[n].className += ' active';
    }
};