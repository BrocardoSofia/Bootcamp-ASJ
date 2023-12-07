function setItemsInit() {
  if (window.localStorage.getItem("cantidadItems") === null) {
    window.localStorage.setItem("cantidadItems", 0);
    window.localStorage.setItem("items", "0");
  }
}

setItemsInit();
//window.localStorage.clear();

const botones = document.getElementsByClassName("boton-carrito"); //obtengo todos los botones

for (let i = 0; i < botones.length; i++) {
  crear_evento_carrito(botones[i]);
}

function crear_evento_carrito(btn) {
  btn.addEventListener("click", function () {
    agregarItemALocalStorage(btn.value);
    //informo al usuario que se agrego el item al carrito
    //btn.value.split("/")[0]
    //nombre/cantidad
    alert(
      "Se agrego un " +
        btn.value.substring(0, btn.value.length - 2) +
        " al carrito!"
    );
  });
}

function agregarItemALocalStorage(item) {
  //agrego un item al localStorage
  let productos = window.localStorage.getItem("items");

  // nombre/cantidad,
  if (productos === "0") {
    productos = item;
  } else {
    productos += "," + item;
  }

  window.localStorage.setItem("items", productos); //guardo los items en el localStorage
}

//agregar item con cantidad
function agregarItemCarrito() {
  let cantidad = document.getElementById("addCantItem").value;
  let item = document.getElementById("addItemToCart").value;

  //junto los datos para guardarlo en el localStorage
  let itemLS = item + "/" + cantidad;

  agregarItemALocalStorage(itemLS);

  //informo al usuario que se agrego el item al carrito
  alert(
    "Se agrego " +
      cantidad +
      " " +
      item.substring(0, item.length - 2) +
      " al carrito!"
  );

  //lo redirijo a la pagina para seguir comprando
  location.href = "index.html";
}

function habilitarBoton() {
  let boton = document.getElementById("addItemToCart");
  boton.disabled = false;
}
