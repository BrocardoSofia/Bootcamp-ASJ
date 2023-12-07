let btnCarrito = document.getElementById("btnComprar");//obtengo el boton para comprar
let totalCompra = 0;

let btnItem = document.getElementById("addItemToCart");

btnCarrito.addEventListener("click", function() {
    //busco el total de la compra
    window.localStorage.clear();

    if(totalCompra === 0)
    {
        alert("Carrito vacio!");
    }
    else
    {
        //alerto que compro los items
        alert("Muchas gracias por su compra! \n\nTotal: ................... $"+totalCompra);
        totalCompra = 0;
    }

    //lo redirijo a la pagina para seguir comprando
    location.href = "index.html";
});

//cada vez que se abre se debe actualizar
function actualizarCarrito()
{
    //guardar los items del localStorage
    let items = window.localStorage.getItem("items");

    //si hay items para agregar
    if(items != "0")
    {
        //separar por ,
        let arregloItems = items.split(",");
        console.log(arregloItems);

        for(let i=0; i<arregloItems.length; i++)
        {
            //a cada elemento lo agrego a la tabla
            cargarItem(arregloItems[i]);
        }

        agregarPrecioTotal();
    }
    else
    {
        //si no hay items deshabilito el boton para comprar
        let boton = document.getElementById("btnComprar");
        boton.disabled = true; 
    }
    
}

function agregarPrecioTotal()
{
    let tabla = document.getElementById("tablaCarrito");
    let total = 0;

    for(let i=0; i<tabla.rows.length; i++)
    {
        let precio = tabla.rows[i].cells[4].innerHTML;
        precio = parseFloat(precio.slice(1));
        total+=precio;
    }
    totalCompra = total;

    cargarFootCarrito(total);
    
}

function cargarFootCarrito(total)
{
    let foot = document.getElementById("footTablaCarrito");
    let row = document.createElement("tr");
    let tdText = document.createElement("td");
    let tdTotal = document.createElement("td");
    let textTotal = document.createTextNode("Total");
    let textPrecio = document.createTextNode("$"+total);
    
    row.className = "table-info";

    tdText.colSpan = "4";
    tdTotal.colSpan = "2";

    tdText.appendChild(textTotal);
    tdTotal.appendChild(textPrecio);

    row.appendChild(tdText);
    row.appendChild(tdTotal);

    foot.appendChild(row);
}

function cargarItem(item)
{
    //obtengo el nombre y la cantidad
    let itemNombCant = item.split("/");
    let itemNombre = itemNombCant[0];
    let cantidad = itemNombCant[1];

    //veo si ya existe el item en la tabla
    let existe = existeItemTabla(itemNombre.replaceAll('-', ' '));

    //si existe modifico la cantidad de ese item
    if(!existe)
    {
        agregarItemAtabla(item);
    }
    else
    {
        //si no existe lo cargo
        console.log("existe");
        modificarItemCant(itemNombre.replaceAll('-', ' '), cantidad);
    }    

}

function modificarItemCant(nombreItem, cantItem)
{
    let tabla = document.getElementById("tablaCarrito");
    let modificado = false;
    let i=0;
    
    while( i<tabla.rows.length && modificado===false)
    {
        let item = tabla.rows[i].cells[1].innerHTML;
        let cant = parseInt(tabla.rows[i].cells[2].innerHTML);

        if(item === nombreItem)
        {
            //modifico la cantidad
            cant+=parseInt(cantItem);
            tabla.rows[i].cells[2].innerHTML = cant;

            //modifico el total
            let precioTxt = tabla.rows[i].cells[4].innerHTML;
            let precio = parseFloat(precioTxt.slice(1));
            let precioTotal = precio * cant;

            tabla.rows[i].cells[4].innerHTML = "$"+precioTotal;

            modificado = true;
        }
        i++
    }
}

function existeItemTabla(itemNombre)
{
    let tabla = document.getElementById("tablaCarrito");
    let existe = false;
    let i=0;
    

    while( i<tabla.rows.length && existe===false)
    {
        let item = tabla.rows[i].cells[1].innerHTML;
        if(item === itemNombre)
        {
            existe = true;
        }
        i++
    }

    return existe;
}

function agregarItemAtabla(item)
{
    //obtengo la tabla
    let tabla = document.getElementById("tablaCarrito");

    //creo el row y los td que necesito
    let row = document.createElement("tr");
    let imagenData = document.createElement("td");
    let itemData = document.createElement("td");
    let itemCantidad = document.createElement("td");
    let itemPrecioU = document.createElement("td");
    let itemPrecioT = document.createElement("td");
    let itemBotonEliminar = document.createElement("td");

    //creo el boton para eliminar item
    let botonEliminar = document.createElement("button");
    botonEliminar.className = "btn btn-danger btn-sm";
    botonEliminar.innerHTML = "Eliminar";
    itemBotonEliminar.appendChild(botonEliminar);

    //obtengo el nombre del item y los guardo en sus td
    let itemNombCant = item.split("/");
    let itemNombre = itemNombCant[0];
    let cantidad = itemNombCant[1];
    let itemDataContent = document.createTextNode(itemNombre.replaceAll('-', ' '));
    let itemCantidadContent = document.createTextNode(cantidad);
    itemData.appendChild(itemDataContent);
    itemCantidad.appendChild(itemCantidadContent);

    //creo la imagen y la guardo en su td
    let itemImagenContent = document.createElement("img");
    itemImagenContent.src = obtenerDirImagen(itemNombCant[0]);
    itemImagenContent.width = "100";
    imagenData.appendChild(itemImagenContent);

    //creo el precio unitario y lo guardo en su td
    let precioU = obtenerPrecio(itemNombCant[0]);
    let itemPrecioUContent = document.createTextNode("$"+precioU);
    itemPrecioU.appendChild(itemPrecioUContent);

    //calculo el precio total
    let precioT = precioU * cantidad;
    let itemPrecioTContent = document.createTextNode("$"+precioT);
    itemPrecioT.appendChild(itemPrecioTContent);

    //cargo todo al row
    row.appendChild(imagenData);
    row.appendChild(itemData);
    row.appendChild(itemCantidad);
    row.appendChild(itemPrecioU);
    row.appendChild(itemPrecioT);
    row.appendChild(itemBotonEliminar);
    
    tabla.appendChild(row);
}

function eliminarItem()
{
    //eliminar fila

    //leer todos los items de la tabla y guardarlos en un string
    //como "nombreItem/cantidad, nombreItem/cantidad, ..."

    //clear() LocalStorage

    //insertar nuevos items en LocalStorage

    //volver a cargar la pagina carrito
}

function obtenerDirImagen(nombreItem)
{
    let dir = "";
    switch(nombreItem)
    {
        case "Giant-Chunky-Knit-Scarf":
            dir = "./assets/items-tienda/yellow-scarf.jpg";
            break;

        case "Kurthy-cat-eye-sunglasses":
            dir = "./assets/items-tienda/white-sunglasses.jpg";
            break;

        case "Wooden-Airplane":
            dir = "./assets/items-tienda/wooden-airplane.jpg";
            break;

        case "Mirabelle-handbag":
            dir = "./assets/items-tienda/handbag.png";
            break;

        case "Remera-Stitch":
            dir = "./assets/items-tienda/remera-stich.jpg";
            break;

        case "Campera-De-Algodon":
            dir = "./assets/items-tienda/campera-celeste.jpg";
            break;

        case "Esmalte-Orange":
            dir = "./assets/items-tienda/Esmalte-orange.jpg";
            break;

        case "Zapatillas-White-and-Red":
            dir = "./assets/items-tienda/zapatillas-rojas.png";
            break;

        default:
            dir = "";
            break;
    }

    return dir;
}

function obtenerPrecio(nombreItem)
{
    let precio = 0;
    switch(nombreItem)
    {
        case "Giant-Chunky-Knit-Scarf":
            precio = 120.00;
            break;

        case "Kurthy-cat-eye-sunglasses":
            precio = 49.00;
            break;

        case "Wooden-Airplane":
            precio = 49.00;
            break;

        case "Mirabelle-handbag":
            precio = 90.00;
            break;

        case "Remera-Stitch":
            precio = 95.00;
            break;

        case "Campera-De-Algodon":
            precio = 45.00;
            break;

        case "Esmalte-Orange":
            precio = 10.00;
            break;

        case "Zapatillas-White-and-Red":
            precio = 130.00;
            break;

        default:
            precio = 0.00;
            break;
    }

    return precio;
}



actualizarCarrito();