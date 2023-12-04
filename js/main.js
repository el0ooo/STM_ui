// faire jouer le son du metro lorsque l'utilisateur click sur le logo de la stm pour revenir a la page d'acceuil
let sonSTM = new Audio("js/SonSTM.mp3");

let logoSTM = document.querySelector(".logo");
logoSTM.addEventListener("click", JoueurSon);

// FONCTIONNE PAS POUR LE MOMENT
function JoueurSon(){
    sonSTM.play();
    console.log("test");
}