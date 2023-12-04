/*
FizzBuzz

En este ejercicio deberás escribir un programa que imprima en la consola los números del 1 al 100, 
teniendo en cuenta estos criterios:

Si el número es múltiplo de 3, deberá imprimir "Fizz" en vez del número.
Si es múltiplo de 5, deberá imprimir "Buzz".
Si es múltiplo de 3 y de 5 (a la misma vez), deberá imprimir "FizzBuzz".
*/

function fizzBuzz(){

    for(let i=0; i<100; i++)
    {
        let mensaje = "";
        let flag = 0;

        if((i+1)%3 === 0) //veo si es multiplo de 3
        {
            mensaje="Fizz";
            flag = 1;
        }

        if((i+1)%5 === 0)
        {
            mensaje+="Buzz";
            flag = 1;
        } 
        
        if (flag === 0)
        {
            mensaje = i+1;
        }

        alert(mensaje);
    }
}

fizzBuzz();