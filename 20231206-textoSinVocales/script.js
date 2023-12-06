const text = document.querySelector("input");

text.addEventListener("keydown", (event) => {
  if ((event.which >= 48) && (event.which <= 90)  || event.which === 32) {
    let parrafo = document.getElementById("texto-sin-vocales");
    let letra = event.key; //guardo la letra

    //veo si la tecla es una vocal
    if (event.which === 65 || event.which === 69 || event.which === 73 || event.which === 79 || event.which === 85) {
      letra = "_"; //si es una vocal lo reemplazo
    }

    let letraAgregar = document.createTextNode(letra);
    parrafo.appendChild(letraAgregar);
  }
});
