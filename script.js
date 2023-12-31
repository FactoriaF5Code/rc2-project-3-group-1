function manejarClick(
  casilla,
  parrafo,
  opcion1,
  opcion2,
  opcion3,
  key,
  audio1,
  audio2
) {
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
      opcion3.style.display = "none";
      key.style.display = "none";
    } else {
      opcion1.style.display = "block";
      opcion2.style.display = "block";
      opcion3.style.display = "block";
      key.style.display = "block";
    }

    opcion1.onclick = function () {
      audio1.play();
    };

    opcion2.onclick = function () {
      audio2.play();
    };
    setTimeout(function () {
      audio1.pause();
      audio2.pause();
    }, 3000);
  });
}

const casilla1 = document.querySelector(".casilla1");
const numero1 = document.querySelector(".numero1");
const optionAcordeon = document.querySelector(".acordeon");
const optionAcordeon2 = document.querySelector(".acordeon2");
const infoAcordeon = document.querySelector(".infoAcordeon");
const keyAcordeon = document.querySelector(".keyAcordeon");
const audioAcordeon = document.getElementById("ACORDEON");
const audioAcordeon2 = document.getElementById("ACORDEON2");
manejarClick(
  casilla1,
  numero1,
  optionAcordeon,
  optionAcordeon2,
  infoAcordeon,
  keyAcordeon,
  audioAcordeon,
  audioAcordeon2
);

casilla1.addEventListener("click", () => {
  casilla1.classList.toggle("acordeon");
});

const casilla2 = document.querySelector(".casilla2");
const numero2 = document.querySelector(".numero2");
const optionArpa = document.querySelector(".arpa");
const optionArpa2 = document.querySelector(".arpa2");
const infoArpa = document.querySelector(".infoArpa");
const keyArpa = document.querySelector(".keyArpa");
const audioArpa = document.getElementById("ARPA");
const audioArpa2 = document.getElementById("ARPA2");
manejarClick(
  casilla2,
  numero2,
  optionArpa,
  optionArpa2,
  infoArpa,
  keyArpa,
  audioArpa,
  audioArpa2
);

casilla2.addEventListener("click", () => {
  casilla2.classList.toggle("arpa");
});

const casilla3 = document.querySelector(".casilla3");
const numero3 = document.querySelector(".numero3");
const optionBateria = document.querySelector(".bateria");
const optionBateria2 = document.querySelector(".bateria2");
const infoBateria = document.querySelector(".infoBateria");
const keyBateria = document.querySelector(".keyBateria");
const audioBateria = document.getElementById("BATERIA");
const audioBateria2 = document.getElementById("BATERIA2");
manejarClick(
  casilla3,
  numero3,
  optionBateria,
  optionBateria2,
  infoBateria,
  keyBateria,
  audioBateria,
  audioBateria2
);

casilla3.addEventListener("click", () => {
  casilla3.classList.toggle("bateria");
});

const casilla4 = document.querySelector(".casilla4");
const numero4 = document.querySelector(".numero4");
const optionGaita = document.querySelector(".gaita");
const optionGaita2 = document.querySelector(".gaita-asturiana");
const infoGaita = document.querySelector(".infoGaita");
const keyGaita = document.querySelector(".keyGaita");
const audioGaita = document.getElementById("GAITA");
const audioGaita2 = document.getElementById("GAITA2");
manejarClick(
  casilla4,
  numero4,
  optionGaita,
  optionGaita2,
  infoGaita,
  keyGaita,
  audioGaita,
  audioGaita2
);

casilla4.addEventListener("click", () => {
  casilla4.classList.toggle("gaita");
});

const casilla5 = document.querySelector(".casilla5");
const numero5 = document.querySelector(".numero5");
const optionPandereta = document.querySelector(".pandereta");
const optionPandereta2 = document.querySelector(".pandereta2");
const infoPandereta = document.querySelector(".infoPandereta");
const keyPandereta = document.querySelector(".keyPandereta");
const audioPandereta = document.getElementById("PANDERETA");
const audioPandereta2 = document.getElementById("PANDERETA2");
manejarClick(
  casilla5,
  numero5,
  optionPandereta,
  optionPandereta2,
  infoPandereta,
  keyPandereta,
  audioPandereta,
  audioPandereta2
);

casilla5.addEventListener("click", () => {
  casilla5.classList.toggle("pandereta");
});

const casilla6 = document.querySelector(".casilla6");
const numero6 = document.querySelector(".numero6");
const optionPiano = document.querySelector(".piano");
const optionPiano2 = document.querySelector(".piano2");
const infoPiano = document.querySelector(".infoPiano");
const keyPiano = document.querySelector(".keyPiano");
const audioPiano = document.getElementById("PIANO");
const audioPiano2 = document.getElementById("PIANO2");
manejarClick(
  casilla6,
  numero6,
  optionPiano,
  optionPiano2,
  infoPiano,
  keyPiano,
  audioPiano,
  audioPiano2
);

casilla6.addEventListener("click", () => {
  casilla6.classList.toggle("piano");
});

const casilla7 = document.querySelector(".casilla7");
const numero7 = document.querySelector(".numero7");
const optionTimbales = document.querySelector(".timbales");
const optionTimbales2 = document.querySelector(".timbales2");
const infoTimbales = document.querySelector(".infoTimbales");
const keyTimbales = document.querySelector(".keyTimbales");
const audioTimbales = document.getElementById("TIMBALES");
const audioTimbales2 = document.getElementById("TIMBALES2");
manejarClick(
  casilla7,
  numero7,
  optionTimbales,
  optionTimbales2,
  infoTimbales,
  keyTimbales,
  audioTimbales,
  audioTimbales2
);

casilla7.addEventListener("click", () => {
  casilla7.classList.toggle("timbales");
});

const casilla8 = document.querySelector(".casilla8");
const numero8 = document.querySelector(".numero8");
const optionTriangulo = document.querySelector(".triangulo");
const optionTriangulo2 = document.querySelector(".triangulo2");
const infoTriangulo = document.querySelector(".infoTriangulo");
const keyTriangulo = document.querySelector(".keyTriangulo");
const audioTriangulo = document.getElementById("TRIANGULO");
const audioTriangulo2 = document.getElementById("TRIANGULO2");
manejarClick(
  casilla8,
  numero8,
  optionTriangulo,
  optionTriangulo2,
  infoTriangulo,
  keyTriangulo,
  audioTriangulo,
  audioTriangulo2
);

casilla8.addEventListener("click", () => {
  casilla8.classList.toggle("triangulo");
});

const casilla9 = document.querySelector(".casilla9");
const numero9 = document.querySelector(".numero9");
const optiontrompeta = document.querySelector(".trompeta");
const optionTrompeta2 = document.querySelector(".trompeta2");
const infoTrompeta = document.querySelector(".infoTrompeta");
const keyTrompeta = document.querySelector(".keyTrompeta");
const audioTrompeta = document.getElementById("TROMPETA");
const audioTrompeta2 = document.getElementById("TROMPETA2");
manejarClick(
  casilla9,
  numero9,
  optiontrompeta,
  optionTrompeta2,
  infoTrompeta,
  keyTrompeta,
  audioTrompeta,
  audioTrompeta2
);

casilla9.addEventListener("click", () => {
  casilla9.classList.toggle("trompeta");
});

const casilla10 = document.querySelector(".casilla10");
const numero10 = document.querySelector(".numero10");
const optionFlauta = document.querySelector(".flauta");
const optionFlauta2 = document.querySelector(".flauta2");
const infoFlauta = document.querySelector(".infoFlauta");
const keyFlauta = document.querySelector(".keyFlauta");
const audioFlautaTravesera = document.getElementById("FLAUTA");
const audioFlauta2 = document.getElementById("FLAUTA2");
manejarClick(
  casilla10,
  numero10,
  optionFlauta,
  optionFlauta2,
  infoFlauta,
  keyFlauta,
  audioFlautaTravesera,
  audioFlauta2
);

casilla10.addEventListener("click", () => {
  casilla10.classList.toggle("flauta");
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    audioAcordeon.play();
  }
  setTimeout(function () {
    audioAcordeon.pause();
  }, 3000);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    audioArpa.play();
  }
  setTimeout(function () {
    audioArpa.pause();
  }, 3000);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "b") {
    audioBateria.play();
  }
  setTimeout(function () {
    audioBateria.pause();
  }, 3000);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "c") {
    audioGaita.play();
  }
  setTimeout(function () {
    audioGaita.pause();
  }, 3000);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "d") {
    audioPandereta.play();
  }
  setTimeout(function () {
    audioPandereta.pause();
  }, 3000);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "e") {
    audioPiano.play();
  }
  setTimeout(function () {
    audioPiano.pause();
  }, 3000);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "f") {
    audioTimbales.play();
  }
  setTimeout(function () {
    audioTimbales.pause();
  }, 3000);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "g") {
    audioTriangulo.play();
  }
  setTimeout(function () {
    audioTriangulo.pause();
  }, 3000);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "h") {
    audioTrompeta.play();
  }
  setTimeout(function () {
    audioTrompeta.pause();
  }, 3000);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "i") {
    audioFlautaTravesera.play();
  }
  setTimeout(function () {
    audioFlautaTravesera.pause();
  }, 3000);
});
