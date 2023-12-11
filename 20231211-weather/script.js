function cargarCiudad(ciudad) {
  fetch("https://api.openweathermap.org/data/2.5/weather?q="+ciudad+"&appid=dcec7df661b1e6b0edab51d796b7339c&units=metric&lang=es")
    .then((response) => response.json()) 
    .then((json) => {
        document.querySelector(".container").style.visibility = "visible";
        document.querySelector("#ciudad").textContent = json.name;
        document.querySelector("#temperatura").innerHTML = (json.main.temp).toFixed(1) + "<sup>°C</sup>";
        document.querySelector("#descripcion").textContent = json.weather[0].description;
        document.querySelector("#wicon").src = "https://openweathermap.org/img/wn/"+json.weather[0].icon+"@2x.png";
        console.log(json);
    })
    .catch((error) => console.log("Ocurrió un error: " + error));
}

function enviarCiudad(){
    const ciudad = document.getElementsByTagName("input")[0].value;
    cargarCiudad(ciudad);
}