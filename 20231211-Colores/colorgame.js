function generateRandomCode() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return "rgb(" + r + " " + g + " " + b + ")";
}

function mostrarModoEasy(){
    let botonEasy = document.getElementById("easy");
    let botonHard = document.getElementById("hard");
    let cuadrados = document.getElementsByClassName("squareHard"); console.log(cuadrados);

    botonEasy.className = "selected";
    botonHard.className = "";

    for(let i=0; i<cuadrados.length; i++){
        cuadrados[i].style = "display: none";
    }
    pintarCuadradosRandom("squareEasy");
}

function mostrarModoHard(){
    let botonEasy = document.getElementById("easy");
    let botonHard = document.getElementById("hard");
    let cuadrados = document.getElementsByClassName("squareHard");

    botonEasy.className = "";
    botonHard.className = "selected";

    for(let i=0; i<cuadrados.length; i++){
        cuadrados[i].style = "display: block";
    }
    pintarCuadradosRandom("square");
}

function pintarCuadradosRandom(nombreClase){
    let cuadrados = document.getElementsByClassName(nombreClase);
    let posColorClave = parseInt(Math.random() * (cuadrados.length - 0) + 0);

    for(let i=0; i<cuadrados.length; i++){
        let color = generateRandomCode();
        cuadrados[i].style = "background-color:"+color;
    }
    console.log(posColorClave);
}

function nuevosColores(){
    let botonEasy = document.getElementById("easy");
    let nombreClase = "square";

    if(botonEasy.className === "selected"){
        nombreClase = "squareEasy";
    }

    pintarCuadradosRandom(nombreClase);
}

pintarCuadradosRandom("square");