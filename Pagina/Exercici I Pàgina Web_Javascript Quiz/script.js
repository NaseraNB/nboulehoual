// Array de preguntas.
let preguntes = ["1: Què mostrarà?:", "2:  Aquest codi funciona?:", "3:  Aquest codi funciona?:", "4:  Quin valor mostrarà alert?:",
"5:  Aquest codi funciona?:", "6: Quin valor mostra?", "7: Quin valor mostra alert?", "8: Què mostrarà per pantalla?:", 
"9: Què mostrarà a la pantalla?:", "10: Què mostrarà l’alert?:"];

// Array de imagenes.
let imgJavaScript = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png"];

// Array de opcions correctas.
let correcta = [2, 0, 2, 2, 2, 1, 0, 1, 1, 1];

// variable de temporizador
let temporitzador;

// Array que mostrara las opcions
let opcions = [];

//carga de opcions
opcions.push(["NaN", "15", "105"]); // 1
opcions.push(["Sí i mostra 10", "Sí i mostra 25", "No"]); // 2
opcions.push(["No", "sí i mostra: 7", "sí i mostra  52"]); // 3
opcions.push(["1", "5", "0"]); // 4
opcions.push(["No", "sí i mostra  0", "sí i mostra 12"]); // 5
opcions.push(["true", "2 €", "10 €"]); // 6
opcions.push(["8", "6", "5"]); // 7
opcions.push(["Volvo Saab Ford", "Saab Ford", "Ford"]); // 8
opcions.push(["Juanito", "Maria", "Juanito Maria"]); // 9
opcions.push(["L1", "L2", "demo2"]); // 10

// Posision actual
let posActual = 0;

// preguntas acertadas por el usuario
let quantitatCorrectes = 0;

// preguntas falladas por el usuario
let quantitatIncorrectes = 0; 

// Funcion para comenzar el text.
function comenzarText(){

    // Al comenzar el text las variables valdran 0
    posActual = 0;
    quantitatCorrectes = 0;

    // Mostramos las pantallas necesarias.
    
    document.getElementById("Inici-programa2").style.display = "none";
    document.getElementById("Inici-programa1").style.display = "block";
    document.getElementById("joc-preguntas").style.display = "block";
    carregarPreImg();
}


// Funcio que carga las preguntas y las imagenes
function carregarPreImg(){

    // Comprovamos si nos a terminado la cantidad de imagenes.
    if(imgJavaScript.length <= posActual){
        acabarQüestionari();
    } else { 

        // Limpia las opciones, porque sin esta opcion se queca el color verde o rojo.
        netejarOpcions();

        // Mostramos la pregrnta
        document.getElementById("idPregunta").innerHTML = preguntes[posActual];

        // Mostramo la imagen
        document.getElementById("imgQuiz").src = imgJavaScript[posActual];

        // Mostramos la opciones
        document.getElementById("n0").innerHTML = opcions[posActual][0];
        document.getElementById("n1").innerHTML = opcions[posActual][1];
        document.getElementById("n2").innerHTML = opcions[posActual][2];

        // Inicamos un temporizador de 60 segundos.
        temporitzador =  setTimeout(respostaForaDeTemps, 60000);

    }
}

function netejarOpcions(){
    document.getElementById("n0").className = "nom";
    document.getElementById("n1").className = "nom";
    document.getElementById("n2").className = "nom";
    
    document.getElementById("l0").className = "lletra";
    document.getElementById("l1").className = "lletra";
    document.getElementById("l2").className = "lletra";   
}


function comprobarResposta(opcióTriada) {

    clearTimeout(temporitzador); // renicimos el tmporizador

    // La opcion elegida es correcta
    if (opcióTriada == correcta[posActual]){
        
        // Mostramos el color verde en la opcion.
        document.getElementById("n" + opcióTriada).className = "nom nomCorrecta";
        document.getElementById("l" + opcióTriada).className = "lletra lletraCorrecta";
        quantitatCorrectes++;

    } else {  // La opcion elegida es incorrecto

        // Mostramos el color rojo en la opcion.
        document.getElementById("n" + opcióTriada).className = "nom nomIncorrecta";
        document.getElementById("l" + opcióTriada).className = "lletra lletraIncorrecta";
        quantitatIncorrectes++;

        // Mostramos la opcion correcta
        document.getElementById("n" +correcta[posActual]).className = "nom nomCorrecta";
        document.getElementById("l" +correcta[posActual]).className = "lletra lletraCorrecta";
    }
    posActual++;

    // Esperaremos un 1 segundo para mostar la pregunta, imagen y las opciones.
    setTimeout(carregarPreImg, 1000);
}


function acabarQüestionari(){

    // Ocultamos el inici-programa2 ya que tiene el boton de iniciar text.
    document.getElementById("Inici-programa2").style.display = "none";

    // Mostramos el inici-programa1 porque no tiene el boton de text.
    document.getElementById("Inici-programa1").style.display = "block";

    // Ocultamos las preguntas, imagenes y opcones.
    document.getElementById("joc-preguntas").style.display = "none";
    document.getElementById("final").style.display = "block";

    // Mostramos el contador de correctas y de incorrectas.
    document.getElementById("numCorrectes").innerHTML = quantitatCorrectes;
    document.getElementById("numIncorrecta").innerHTML = quantitatIncorrectes;

}

function reniciarText(){
    
    // Mostramos la pantalla iniciar con el boton de iniciar text
    document.getElementById("Inici-programa2").style.display = "block";

    // Oculrtamos la pantalla del final
    document.getElementById("final").style.display = "none";
    document.getElementById("Inici-programa1").style.display = "none";

}