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
  const numero1 = document.querySelector(".numero1")
  const optionAcordeon= document.querySelector(".acordeon");
  const optionAcordeon2 = document.querySelector(".acordeon2");
  const audioAcordeon = document.getElementById("ACORDEON");
  const audioAcordeon2 = document.getElementById("ACORDEON2");
  
  manejarClick(casilla1, numero1, optionAcordeon, optionAcordeon2, audioAcordeon, audioAcordeon2);