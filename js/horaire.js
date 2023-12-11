

let lesLignesMetro = document.querySelectorAll(".ligne");
for(let uneLigne of lesLignesMetro) {
    uneLigne.addEventListener("click", afficherLesStations);
}

let lesStations = document.querySelectorAll(".lesStations");



function afficherLesStations() {
    for(let uneDivStations of lesStations){
        uneDivStations.style.display = "none";
    }
    for(let uneLigne of lesLignesMetro) {
        uneLigne.style.transform = "TranslateX(-15em)";
    }
    this.style.transform = "TranslateX(-10em)";
    console.log(this.childNodes[1])
    this.childNodes[1].style.display = "block";

    this.addEventListener("click", retirerLesStations);
}

function retirerLesStations(){
    for(let uneDivStations of lesStations){
        if(uneDivStations.style.display == "block")
        uneDivStations.style.display = "none";
    }
    this.style.transform = "TranslateX(-15em)";

    this.removeEventListener("click", retirerLesStations);
}


/************Section pour la barre de recherche*************** */

let laBarreRecherche = document.querySelector(".rechercheBus #recherche");

laBarreRecherche.addEventListener("click", afficherLaRechercheDesBus);

let lesBusRecherche = document.querySelector("main .lesBusRecherche");

function afficherLaRechercheDesBus(){
    lesBusRecherche.style.display = "block";
}