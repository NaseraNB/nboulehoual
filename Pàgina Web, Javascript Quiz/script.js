/* array amb les respostes correctes */
let correcta = [3, 1, 1, 3, 3, 2, 1, 2, 2, 1];

/* array amb les preguntes */
let preguntasT = [
["1: Què mostrarà?", " NaN", " 15", " 105"],
["2: Aquest codi funciona?", " Sí i mostra 10", " Sí i mostra 25", " No"],
["3: Aquest codi funciona?"," No", " sí i mostra: 7", " sí i mostra  57"],
["4: Quin valor mostrarà alert?"," 1", " 5", " 0"],
["5: Aquest codi funciona?"," No", " sí i mostra  0", " sí i mostra 12"],
["6: Quin valor mostra?"," true", " 2 €", " 10 €"],
["7: Quin valor mostra alert?"," 8", " 6", " 5"],
["8: Què mostrarà per pantalla?"," Volvo Saab Ford", " Saab Ford", " Ford"],
["9: Què mostrarà a la pantalla?"," Juanito", " Maria", " Juanito Maria"],
["10: Què mostrarà l'alert?"," L1", " L2", " demo2"],
["","", "", ""]
];

/* variable que desa la quantitat de preguntes respostes correctament */
let cantidad_correctas = 0;

/* variable que desa la quantitat de preguntes respostes incorrectament */
let cantidad_incorrecta = 0;

/* Número de la pregunta en què estem. */
let nPregunta = 0;

/* La funcio reiniciar s'utilitza per reiniciar el programa des de la pregunta 1 */

function reiniciar(){

    /* Si reinicies els comptadors han de tornar a 0 i nPreguntes també  */
    cantidad_correctas = 0;
    cantidad_incorrecta = 0;
    nPregunta = 0;

    /* Mostrem la imatge depenent el número */
    document.getElementById("image").src=(nPregunta+1)+".png"; 

    /* Mostrem la pregunta */
    document.getElementById("preId").innerHTML = preguntasT[nPregunta][0];

     /* Mostrem les opcions */
    document.getElementById("label1").innerHTML = '<input type="radio" value="1" name="pre" id="op1">'+ preguntasT[nPregunta][1];
    document.getElementById("label2").innerHTML = '<input type="radio" value="2" name="pre" id="op2">'+ preguntasT[nPregunta][2];
    document.getElementById("label3").innerHTML = '<input type="radio" value="3" name="pre" id="op3">'+preguntasT[nPregunta][3];

    /* Si és correcte es desa a la variable cantidad_correctas sinó cantidad_incorrecta */ 
    document.getElementById("resultado").innerHTML = cantidad_correctas;
    document.getElementById("resultado2").innerHTML = cantidad_incorrecta;
}

/* La funcio corregir s'utilitza per saber si les opcions escollides per l'usuari es correcte. */
function corregir() {

    /* La variable resposta vale 0 */
    let resposta = 0;

    /* Si l'usuari ha triat la primera opció resposta és igual a 1 */
    if(document.getElementById("op1").checked){
        resposta=1;
    }

    /* Si l'usuari ha triat la segona opció resposta és igual a 2 */
    if(document.getElementById("op2").checked){
        resposta=2;
    }

    /* Si l'usuari ha triat la tercera opció resposta és igual a 3 */
    if(document.getElementById("op3").checked){
        resposta=3;
    }

    /* Si la resposta és correcta comptador suma 1 sinó serà les incorrectes */
    if(correcta[nPregunta] == resposta){
        cantidad_correctas++; 
    } else {
        cantidad_incorrecta++;
    }

    /* nPregunta suma 1 això significa que passés a la pregunta següent */
    nPregunta++;

    /* Mostrem la imatge depenent el número */
    document.getElementById("image").src=(nPregunta+1)+".png";

    /* Mostrem la imatge depenent el número */
    document.getElementById("preId").innerHTML = preguntasT[nPregunta][0];

     /* Mostrem les opcions */
    document.getElementById("label1").innerHTML = '<input type="radio" value="1" id="op1">'+ preguntasT[nPregunta][1];
    document.getElementById("label2").innerHTML = '<input type="radio" value="2" id="op2">'+ preguntasT[nPregunta][2];
    document.getElementById("label3").innerHTML = '<input type="radio" value="3" id="op3">'+preguntasT[nPregunta][3];

     /* Si és correcte es desa a la variable cantidad_correctas sinó cantidad_incorrecta */ 
    document.getElementById("resultado").innerHTML = cantidad_correctas;
    document.getElementById("resultado2").innerHTML = cantidad_incorrecta;

    /*Quan aquest l'ultima pregunta i quan a prete a corregir conteu el comptador a part que aparegués una imatge que diu the end (fi)*/ 
    if (nPregunta === preguntasT.length - 1){
        document.getElementById("image").src= "fin.gif";
    }

    /* Si la longitud és diferent dons no és veruran les preguntes */
    if (nPregunta === preguntasT.length){
        document.getElementById("label1").innerHTML = '';
        document.getElementById("label2").innerHTML = '';
        document.getElementById("label3").innerHTML = '';
        document.getElementById("iniciar").style.display = "block";
    }

}