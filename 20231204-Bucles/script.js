//WHILE
function sumaPromedioUsuario()
{
    let num = prompt("Ingrese hasta que numero desea sumar: ");
    let numSuma = 0;
    let numActual = 1;
    let numIndex = 0;
    let numPromedio;

    if(!Number(num))
    {
        alert("Error: no se ingreso un numero");
    }
    else
    {
        while(numActual <= num)
        {
            numSuma += numActual;
            numActual++; //aumento el numero actual
            numIndex++; //aumento la cantidad de numeros sumados hasta el momento
        }

        numPromedio = numSuma/numIndex;

        alert(`La suma de numeros hasta el valor ${num} es: ${numSuma}\nY su promedio es: ${numPromedio}`);
    }
}

/*
En este ejercicio deberás crear un programa que le pida al usuario que ingrese un número entero. El programa terminará cuando se ingrese un número negativo.
Al terminar, mostrarle un mensaje con la cantidad de números positivos que ingresó.
*/
function numerosNegativosPositivos()
{
    let num = 0;
    let cantNumPositivos = 0;

    while(num >= 0)
    {
        num = parseInt(prompt("Ingrese un numero: "));
        
        if(num >= 0)
        {
            cantNumPositivos++;
        }
    }

    alert(`(⊃｡•́‿•̀｡)⊃ Cantidad de numeros positivos ingresados: ${cantNumPositivos}`);
}

numerosNegativosPositivos();
//sumaPromedioUsuario();