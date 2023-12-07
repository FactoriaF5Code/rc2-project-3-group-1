let casilla1 = document.querySelector(".casilla1");
let acordeon = document.querySelector("#ACORDEON");

casilla1.onclick = function (){
    acordeon.play();
    }
    let casilla2 = document.querySelector(".casilla2");
let arpa = document.querySelector("#ARPA");

casilla2.onclick = function (){
    arpa.play();
}
let casilla3 = document.querySelector(".casilla3");
let bateria = document.querySelector("#BATERIA");

casilla3.onclick = function (){
    bateria.play();
}
let casilla4 = document.querySelector(".casilla4");
let gaita = document.querySelector("#GAITA");

casilla4.onclick = function (){
    gaita.play();
}
let casilla5 = document.querySelector(".casilla5");
let pandereta = document.querySelector("#PANDERETA");

casilla5.onclick = function (){
    pandereta.play();
}
let casilla6 = document.querySelector(".casilla6");
let piano = document.querySelector("#PIANO");

casilla6.onclick = function (){
    piano.play();
}
let casilla7 = document.querySelector(".casilla7");
let timbales = document.querySelector("#TIMBALES");

casilla7.onclick = function (){
    timbales.play();
}
let casilla8 = document.querySelector(".casilla8");
let triangulo = document.querySelector("#TRIANGULO");

casilla8.onclick = function (){
    triangulo.play();
}
let casilla9 = document.querySelector(".casilla9");
let trompeta = document.querySelector("#TROMPETA");

casilla9.onclick = function (){
    trompeta.play();
}
let casilla10 = document.querySelector(".casilla10");
let flauta = document.querySelector("#FLATUTA");

casilla10.onclick = function (){
    flauta.play();
}

document.addEventListener('keydown', function(event) {

    if (event.key === 'Enter') {

        flauta.play();

    }

});
document.addEventListener('keydown', function(event) {

    if (event.key === 'a') {

        acordeon.play();

    }

});
document.addEventListener('keydown', function(event) {

    if (event.key === 'b') {

        arpa.play();

    }

});
document.addEventListener('keydown', function(event) {

    if (event.key === 'c') {

        bateria.play();

    }

});
document.addEventListener('keydown', function(event) {

    if (event.key === 'd') {

        gaita.play();

    }

});
document.addEventListener('keydown', function(event) {

    if (event.key === 'e') {

        guitarra.play();

    }

});
document.addEventListener('keydown', function(event) {

    if (event.key === 'f') {

        pandereta.play();

    }

});
document.addEventListener('keydown', function(event) {

    if (event.key === 'g') {

        piano.play();

    }

});
document.addEventListener('keydown', function(event) {

    if (event.key === 'h') {

        timbales.play();

    }

});
document.addEventListener('keydown', function(event) {

    if (event.key === 'i') {

        triangulo.play();

    }

});
document.addEventListener('keydown', function(event) {

    if (event.key === 'j') {

        trompeta.play();

    }

});
