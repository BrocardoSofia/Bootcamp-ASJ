
function mensajeAlert()
{
    let mensaje ="Hola mundo por variable";

    alert(mensaje);
}

function cantidadDeCaracteres()
{
    let userInput = prompt("Ingrese una palabra");

    return "La palabra: "+userInput+" tiene "+userInput.length+" caracteres";
}

function calculadoraDeEdad()
{
    let userEdad = prompt("Ingrese su edad");
    let dias = parseInt(userEdad) * 365;

    return "Tienes "+ dias + " en la tierra";
}

function sumaDeValores()
{
    let num1 = parseInt(prompt("Ingrese el primer numero: "));
    let num2 = parseInt(prompt("Ingrese el segundo numero: "));
    let resultado = num1 + num2;

    return resultado;
}

function calculadorAbastecimientoDePorVida()
{
    let userEdad = parseInt(prompt("Ingrese su edad"));
    let userEdadMax = parseInt(prompt("Ingrese su edad maxima"));
    let snacksPorDia = parseInt(prompt("Snacks que comes por dia: "));
    let snackPrecio = parseFloat(prompt("Ingrese el precio por unidad de snack: "));
    let diasRestantes = (userEdadMax-userEdad)*365;
    let snacksRestantes = diasRestantes * snacksPorDia;

    alert("Necesitarás "+snacksRestantes+" snacks para que te alcancen hasta los "+userEdadMax+" años.");
    return "Gastaras $"+snacksRestantes*snackPrecio+" en "+snacksRestantes+" snacks";
}

function dineroVacaciones()
{
    let diasViaje = parseInt(prompt("Ingrese los dias que va a estar de viaje: "));
    let presupuesto = parseFloat(prompt("Ingrese su presupuesto maximo para el viaje: "));
    let comidaCant = parseInt(prompt("Ingrese la cantidad de comidas que va a tener en todo su viaje "));
    let gastoMaxPorComida = presupuesto/comidaCant;

    alert("Podés gastar $"+gastoMaxPorComida.toFixed(2)+" en cada comida para que te alcance la plata durante los "+diasViaje+" días de viaje");
}

function ejercicio1ES6()
{
    let nombre = "Gabriela"
    let profesion = "programadora"

    return `${nombre} es ${profesion}`;
}

function ejercicio2ES6()
{
    let precioArticulo = parseFloat(prompt("Ingrese el precio del articulo: "));
    let cantidad = parseInt(prompt("Ingrese la cantidad: "));
    let precioFinal = precioArticulo*cantidad;

    return `El valor a pagar por ${cantidad} articulos de $${precioArticulo}c/u es: $${precioFinal.toFixed(2)}`
}

//mensajeAlert();
//console.log(cantidadDeCaracteres());
//console.log(calculadoraDeEdad());
//console.log(sumaDeValores());
//console.log(calculadorAbastecimientoDePorVida());
//dineroVacaciones();
//console.log(ejercicio1ES6());
console.log(ejercicio2ES6());