let score = 0; /*Variable que representa un comptador.*/
let randomTalp = 1; /* Vairbale que contiene un 1 */ 

/* Funció que mostra el talp */
function mostrarTalp(){

    /* Mostra tots els talps */
    for (let i = 1; i < 10; i++){
        document.getElementById("mole" + i).src = "topoNo.jpg";
    }

    /* Vam crear un random que mostrés un talp */
    randomTalp = Math.floor(Math.random() * 9) + 1;

    document.getElementById("mole" + randomTalp).src = "topoSi.jpg";

}

/* Funció que s'utilitza per fer clic al talp */

function clicTopo(numeroImagen){

    /* Mostrem el pa cada cop que toques una caixa. */
    document.getElementById("mole" + numeroImagen).src = "topoPam.jpg";

    /*  si el número del topo es igual a al número del random, significa que el contador sumara 10 puntos. */ 

    if (numeroImagen == randomTalp){
        score+=10;  
        
        /* se escoltar un so cada cop que sigui iguals. */
        document.getElementById("score").innerText = score;
        
        var audio = new Audio('boing.mp3');
        audio.play(); 
    }
}

/* Mostrem el mètode cada segon. */ 
setInterval(mostrarTalp, 1000);