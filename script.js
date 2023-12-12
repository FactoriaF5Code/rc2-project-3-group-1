function manejarClick(casilla, parrafo, opcion1, opcion2, audio1, audio2) {
  casilla.addEventListener("click", () => {
    let currentDisplay = parrafo.style.display;

    if (currentDisplay === "none") {
      parrafo.style.display = "block";
    } else {
      parrafo.style.display = "none";
    }

    if (currentDisplay === "none") {
      opcion1.style.display = "none";
      opcion2.style.display = "none";
    } else {
      opcion1.style.display = "block";
      opcion2.style.display = "block";
    }

    opcion1.onclick = function () {
      audio1.play();
    };

    opcion2.onclick = function () {
      audio2.play();
    };
  });
}

const casilla1 = document.querySelector(".casilla1");
const numero1 = document.querySelector(".numero1");
const optionAcordeon = document.querySelector(".acordeon");
const optionAcordeon2 = document.querySelector(".acordeon2");
const audioAcordeon = document.getElementById("ACORDEON");
const audioAcordeon2 = document.getElementById("ACORDEON2");
manejarClick(
  casilla1,
  numero1,
  optionAcordeon,
  optionAcordeon2,
  audioAcordeon,
  audioAcordeon2
);

const casilla2 = document.querySelector(".casilla2");
const numero2 = document.querySelector(".numero2");
const optionArpa = document.querySelector(".arpa");
const optionArpa2 = document.querySelector(".arpa2");
const audioArpa = document.getElementById("ARPA");
const audioArpa2 = document.getElementById("ARPA2");
manejarClick(casilla2, numero2, optionArpa, optionArpa2, audioArpa, audioArpa2);

const casilla3 = document.querySelector(".casilla3");
const numero3 = document.querySelector(".numero3");
const optionBateria = document.querySelector(".bateria");
const optionBateria2 = document.querySelector(".bateria2");
const audioBateria = document.getElementById("BATERIA");
const audioBateria2 = document.getElementById("BATERIA2");
manejarClick(
  casilla3,
  numero3,
  optionBateria,
  optionBateria2,
  audioBateria,
  audioBateria2
);

const casilla4 = document.querySelector(".casilla4");
const numero4 = document.querySelector(".numero4");
const optionGaita = document.querySelector(".gaita");
const optionGaita2 = document.querySelector(".gaita-asturiana");
const audioGaita = document.getElementById("GAITA");
const audioGaita2 = document.getElementById("GAITA2");
manejarClick(
  casilla4,
  numero4,
  optionGaita,
  optionGaita2,
  audioGaita,
  audioGaita2
);

const casilla5 = document.querySelector(".casilla5");
const numero5 = document.querySelector(".numero5");
const optionPandereta = document.querySelector(".pandereta");
const optionPandereta2 = document.querySelector(".pandereta2");
const audioPandereta = document.getElementById("PANDERETA");
const audioPandereta2 = document.getElementById("PANDERETA2");
manejarClick(
  casilla5,
  numero5,
  optionPandereta,
  optionPandereta2,
  audioPandereta,
  audioPandereta2
);

const casilla6 = document.querySelector(".casilla6");
const numero6 = document.querySelector(".numero6");
const optionPiano = document.querySelector(".piano");
const optionPiano2 = document.querySelector(".piano2");
const audioPiano = document.getElementById("PIANO");
const audioPiano2 = document.getElementById("PIANO2");
manejarClick(
  casilla6,
  numero6,
  optionPiano,
  optionPiano2,
  audioPiano,
  audioPiano2
);

const casilla7 = document.querySelector(".casilla7");
const numero7 = document.querySelector(".numero7");
const optionTimbales = document.querySelector(".timbales");
const optionTimbales2 = document.querySelector(".timbales2");
const audioTimbales = document.getElementById("TIMBALES");
const audioTimbales2 = document.getElementById("TIMBALES2");
manejarClick(
  casilla7,
  numero7,
  optionTimbales,
  optionTimbales2,
  audioTimbales,
  audioTimbales2
);

const casilla8 = document.querySelector(".casilla8");
const numero8 = document.querySelector(".numero8");
const optionTriangulo = document.querySelector(".triangulo");
const optionTriangulo2 = document.querySelector(".triangulo2");
const audioTriangulo = document.getElementById("TRIANGULO");
const audioTriangulo2 = document.getElementById("TRIANGULO2");
manejarClick(
  casilla8,
  numero8,
  optionTriangulo,
  optionTriangulo2,
  audioTriangulo,
  audioTriangulo2
);

const casilla9 = document.querySelector(".casilla9");
const numero9 = document.querySelector(".numero9");
const optiontrompeta = document.querySelector(".trompeta");
const optionTrompeta2 = document.querySelector(".trompeta2");
const audioTrompeta = document.getElementById("TROMPETA");
const audioTrompeta2 = document.getElementById("TROMPETA2");
manejarClick(
  casilla9,
  numero9,
  optiontrompeta,
  optionTrompeta2,
  audioTrompeta,
  audioTrompeta2
);

const casilla10 = document.querySelector(".casilla10");
const numero10 = document.querySelector(".numero10");
const optionFlauta = document.querySelector(".flauta");
const optionFlauta2 = document.querySelector(".flauta2");
const audioFlautaTravesera = document.getElementById("FLAUTA");
const audioFlauta2 = document.getElementById("FLAUTA2");
manejarClick(
  casilla10,
  numero10,
  optionFlauta,
  optionFlauta2,
  audioFlautaTravesera,
  audioFlauta2
);

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    audioAcordeon.play();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    audioArpa.play();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "b") {
    audioBateria.play();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "c") {
    audioGaita.play();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "d") {
    audioPandereta.play();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "e") {
    audioPiano.play();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "f") {
    audioTimbales.play();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "g") {
    audioTriangulo.play();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "h") {
    audioTrompeta.play();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key === "i") {
    audioFlautaTravesera.play();
  }
});