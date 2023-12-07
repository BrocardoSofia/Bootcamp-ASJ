function setItemsInit()
{
    if(window.localStorage.getItem("cantidadItems") === null)
    {
        window.localStorage.setItem("cantidadItems", 0);
        window.localStorage.setItem("items", "0");
    }
}

setItemsInit();
//window.localStorage.clear();

const botones = document.getElementsByClassName('boton-carrito'); //obtengo todos los botones

for (let i = 0; i < botones.length; i++) {
    crear_evento_carrito(botones[i]);
}
 
function crear_evento_carrito(btn) {    
    btn.addEventListener("click", function() {
        //agrego un item al localStorage
        let productos = window.localStorage.getItem("items");
    
        if(productos === "0")
        {
            productos = btn.value;
        }
        else
        {
            productos += ","+btn.value;
        }
    
        window.localStorage.setItem("items", productos);//guardo los items en el localStorage

        //informo al usuario que se agrego el item al carrito
        alert("Se agrego un " + btn.value.substring(0, btn.value.length - 2) + " al carrito!");
    });    
}