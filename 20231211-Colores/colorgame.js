let vcolorDisplay = document.getElementById("colorDisplay");

function generateRandomCode() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return "rgb(" + r + " " + g + " " + b + ")";
}

function mostrarModoEasy() {
  let botonEasy = document.getElementById("easy");
  let botonHard = document.getElementById("hard");
  let cuadrados = document.getElementsByClassName("squareHard");
  console.log(cuadrados);

  botonEasy.className = "selected";
  botonHard.className = "";

  for (let i = 0; i < cuadrados.length; i++) {
    cuadrados[i].style = "display: none";
  }
  pintarCuadradosRandom("squareEasy");
}

function mostrarModoHard() {
  let botonEasy = document.getElementById("easy");
  let botonHard = document.getElementById("hard");
  let cuadrados = document.getElementsByClassName("squareHard");

  botonEasy.className = "";
  botonHard.className = "selected";

  for (let i = 0; i < cuadrados.length; i++) {
    cuadrados[i].style = "display: block";
  }
  pintarCuadradosRandom("square");
}

function pintarCuadradosRandom(nombreClase) {
  let cuadrados = document.getElementsByClassName(nombreClase);
  let posColorClave = parseInt(Math.random() * (cuadrados.length - 0) + 0);

  for (let i = 0; i < cuadrados.length; i++) {
    let color = generateRandomCode();
    cuadrados[i].style = "background-color:" + color;
  }
  console.log(posColorClave);
  console.log();
  vcolorDisplay.innerHTML =
    cuadrados[posColorClave].style.backgroundColor.toUpperCase();
}

function nuevosColores() {
  let botonEasy = document.getElementById("easy");
  let nombreClase = "square";
  let mensajeCorrect = document.getElementById("message");
  mensajeCorrect.innerHTML = "";

  if (botonEasy.className === "selected") {
    nombreClase = "squareEasy";
  }

  let botonNewColors = document.getElementById("reset");
    botonNewColors.innerHTML = "NEW COLORS";

  pintarCuadradosRandom(nombreClase);
}

function obtenerBotonesColores() {
  let botonesColores = document.getElementsByClassName("square");
  for (let boton of botonesColores) {
    boton.addEventListener("click", () => {
      verificarSquare(boton);
    });
  }
}

function verificarSquare(boton) {
  console.log(boton.style.backgroundColor);
  if(boton.style.backgroundColor.toUpperCase()===vcolorDisplay.innerText){
    gameOver(boton.style.backgroundColor)
  }
  else{
    //eliminar boton
    boton.style.backgroundColor = "#232323";
  }

}

function gameOver(color){
    //CAMBIAR TODOS LOS BOTONES AL COLOR GANADOR
    let botonEasy = document.getElementById("easy");
    let nombreClase = "square";

    if (botonEasy.className === "selected") {
        nombreClase = "squareEasy";
    }

    pintarCuadradosGanador(nombreClase, color);

    //MENSAJE DE "Correct!" en el span de id "message"
    let mensajeCorrect = document.getElementById("message");
    mensajeCorrect.innerHTML = "Correct!";

    //CAMBIAR NOMBRE DE "NEW COLORS" A "PLAY AGAIN"
    let botonNewColors = document.getElementById("reset");
    botonNewColors.innerHTML = "PLAY AGAIN";
}

function pintarCuadradosGanador(nombreClase, color){
    let botonesColores = document.getElementsByClassName(nombreClase);

    for(let boton of botonesColores){
        boton.style.backgroundColor = color;
    }
}

pintarCuadradosRandom("square");
obtenerBotonesColores();
