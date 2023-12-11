let leBody = document.querySelector("body");

let leMenuBurger = document.querySelector(".MenuBurger");

leMenuBurger.addEventListener("click", animerMenu);

let leNav = document.querySelector("header>nav>ul")

let leslignesDuMenuBurger = document.querySelectorAll(".ligneMenuBurger");

let ligneAnim1 = document.querySelector(".ligneMenuBurger.ligneAnim1");
let ligneAnim2 = document.querySelector(".ligneMenuBurger.ligneAnim2");

let menuOuvert = false;

function animerMenu(){
    if(!menuOuvert){
        leNav.style.transform = "TranslateX(0%)";
        for(uneLigne of leslignesDuMenuBurger){
            uneLigne.style.backgroundColor = "black";
        }

        // Animation des lignes du menu en fleche
        ligneAnim1.style.width = "50%";
        ligneAnim2.style.width = "50%";

        ligneAnim1.style.transform = "Translate(57%,150%) Rotate(45deg)"
        ligneAnim2.style.transform = "Translate(57%,-150%) Rotate(-45deg)"

        // On empeche le scroll quand le menu est ouvert
        leBody.style.overflow = "hidden";
    }
    else{
        leNav.style.transform = "TranslateX(100%)";
        for(uneLigne of leslignesDuMenuBurger){
            uneLigne.style.backgroundColor = "white";
        }
        ligneAnim1.style.width = "100%";
        ligneAnim2.style.width = "100%";

        ligneAnim1.style.transform = "Translate(0) Rotate(0)"
        ligneAnim2.style.transform = "Translate(0) Rotate(0)"

        leBody.style.overflow = "scroll";
    }
    menuOuvert = !menuOuvert;
}