let diasViaje = parseInt(prompt("Ingrese los dias que va a estar de viaje: "));
let presupuesto = parseFloat(
  prompt("Ingrese su presupuesto maximo para el viaje: ")
);
let comidaCant = parseInt(
  prompt("Ingrese la cantidad de comidas que va a tener en todo su viaje ")
);
let gastoMaxPorComida = presupuesto / comidaCant;

alert(
  "Podés gastar $" +
    gastoMaxPorComida.toFixed(2) +
    " en cada comida para que te alcance la plata durante los " +
    diasViaje +
    " días de viaje"
);
