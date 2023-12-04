/*
Simular un bar con una sola mesa
cuando viene un cliente se simula el elegir productos (cuantos quiera)
pedir la cuenta (mostrar total a pagar)
que pregunte si deja propina (sumar al total a pagar)
en algun momento puede contar chistes (pedir contar chistes en cualquier momento)
saludar a ingresar y al salir
*/

let opcion = 0;
let saludo = 0;
let mesero = "Mesero";
let comida;
let factura = "FACTURA\n";
let cuenta = 0;
let mensajePedirComida = "Que lo disfrute!!";
let propina = 0;
let propinaPagar = 0.0;
let contadorChiste = 0;

//entra el cliente al bar
alert("Bienvenido al bar!! (｡◕‿◕｡)"); //bienvenida al bar
do {
  opcion = parseInt(
    prompt(
      "¿Que desea hacer?\n\n1. Saludar\n2. Ver la carta\n3. Pedir comida\n4. Pedir un chiste\n5. Pedir la cuenta"
    )
  );

  switch (opcion) {
    case 1:
      alert("Buen dia! (ʘ‿ʘ)╯");
      if (saludo === 0) {
        alert(mesero + ": 'Buen dia!' ⊂(◉‿◉)つ");
        saludo = 1;
      } else {
        alert(mesero + ": 'usted ya me saludo' (ㆆ _ ㆆ)");
      }
      break;

    case 2:
      //muestro el menu
      alert(
        "MENU: \n\n1. Cerveza ....... $1500 \n2. Papas ........... $5000\n3. Pizza ............. $3400 \n4. Rabas ........... $4000"
      );
      break;

    case 3:
      //muestro las opciones
      do {
        comida = parseInt(
            prompt(
              "Selecciones una de las comidas del menu: \n\n1. Cerveza  \n2. Papas \n3. Pizza  \n4. Rabas \n5. Salir"
            )
          );
        switch (comida) {
          case 1:
            factura += "\nCerveza ....... $1500"; //agrego la comida a la factura
            cuenta += 1500; //sumo a la cuenta final
            break;

          case 2:
            factura += "\nPapas ........... $5000"; //agrego la comida a la factura
            cuenta += 5000; //sumo a la cuenta final
            break;

          case 3:
            factura += "\nPizza ............. $3400"; //agrego la comida a la factura
            cuenta += 3400; //sumo a la cuenta final
            break;

          case 4:
            factura += "\nRabas ........... $4000"; //agrego la comida a la factura
            cuenta += 4000; //sumo a la cuenta final
            break;

          case 5:
            break;

          default:
            alert("Opcion no valida!");
            break;
        }
      } while (comida != 5);
      if (comida === 1 || comida === 2 || comida === 3 || comida === 4) {
        alert(mensajePedirComida);
      }

      break;

    case 4:
      //pedir chiste
      switch (contadorChiste) {
        case 0:
          alert(
            "¿Qué le dice una barra de pan a otra? Te presento a una miga.?\n\n※\\(^o^)/※"
          );
          contadorChiste++;
          break;
        case 1:
          alert(
            "¿Sabes que el aguacate es 50% agua? \nSí, lo sé. Y el otro 50% cate.\n\n※\\(^o^)/※"
          );
          contadorChiste++;
          break;
        case 2:
          alert(
            "¿Qué le dice un limón policía a un limón sospechoso de un crimen?\n¿Ácido tú?\n\n※\\(^o^)/※"
          );
          contadorChiste++;
          break;
        case 3:
          alert(
            "¿Cuál es la fruta más explosiva y peligrosa? ¡La granada!\n\n※\\(^o^)/※"
          );
          contadorChiste++;
          break;
        case 4:
          alert(
            "¿Qué le dice un pollito a otro pollo al que odia?\n¡Caldito seas!\n\n※\\(^o^)/※"
          );
          contadorChiste++;
          break;
        case 5:
          alert("Me quede sin chistes ( ͡° ʖ̯ ͡°)");
          break;
      }
      break;

    case 5:
      //pide la cuenta
      break;

    default:
      alert("Opcion no valida!");
      break;
  }
} while (opcion != 5);

//cuenta
do {
  alert("Cuenta!");
  //muestro la factura y pregunto si quiere agregar propina
  factura += "\n" + "Total: ............ $" + cuenta;
  propina = prompt(factura + "\n\nDesea agregar propina? (s/n)").toLowerCase();

  console.log(propina != "s");
} while (propina != "s" && propina != "n");

if (propina == "s") {
  do{
    propinaPagar = parseFloat(prompt("Ingrese el monto para la propina:"));

    if(propinaPagar<=0)
    {
        alert("La propina no puede ser negativa!!");
    }
  }while(propinaPagar<=0);
}

//muestro la factura final:
cuenta += propinaPagar;
alert(
  factura +
    "\n" +
    "Propina: ...... $" +
    propinaPagar +
    "\n\nFinal: ............ $" +
    cuenta
);

alert("Adios!!, muchas gracias por venir (｡◕‿◕｡)");
