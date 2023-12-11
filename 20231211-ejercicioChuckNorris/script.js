const joke = document.getElementsByTagName("h2");

function loadJoke(){
    fetch(`https://api.chucknorris.io/jokes/random`)
  .then((response) => response.json())
  .then((json) => {
    joke[0].innerHTML = json.value;
    
  })
  .catch((error) => console.log("Ocurrió un error: " + error));

}