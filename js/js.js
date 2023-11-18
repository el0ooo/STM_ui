// faire jouer le son du metro lorsque l'utilisateur click sur le logo de la stm pour revenir a la page d'acceuil

let logoSTM = document.querySelector(".jouer-son");
logoSTM.addEventListener("click", JoueurSon);

// FONCTIONNE PAS POUR LE MOMENT
function JoueurSon(){
    let sonSTM = new Audio("../sons/sonSTM.mp3");
    sonSTM.play();
    console.log("jouer son");
}