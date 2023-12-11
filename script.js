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
  const p1 = document.querySelector("p");
  const opcion1 = document.querySelector(".opciones");
  const opcion2 = document.querySelector(".opcion2");
  const guitar = document.getElementById("guitar");
  const tambor = document.getElementById("tambor");
  
  manejarClick(casilla1, p1, opcion1, opcion2, guitar, tambor);