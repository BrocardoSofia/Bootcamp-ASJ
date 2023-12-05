/*
Fibonacci

Según un número ingresado por el usuario, mostrar la secuencia de Fibonacci hasta esa cantidad de veces.
Ej: el usuario ingresa el 8, mostrar:
0 1 1 2 3 5 8 13 21 34
*/

function fibonacci(numero) {
  let arreglo = [0,1];

  if (numero > 0) {
    let anterior1 = 0;
    let anterior2 = 1;

    for (let i = 1; i < numero; i++) {
        agregar = anterior1 + anterior2;

        anterior1 = anterior2;

        anterior2 = agregar;

        arreglo.push(agregar);
    }

    arreglo.forEach((numero) => {
        console.log(numero);
      });
  }
  else
  {
    console.log("El la cantidad debe ser mayor a 0");
  }
  
}

fibonacci(8);
