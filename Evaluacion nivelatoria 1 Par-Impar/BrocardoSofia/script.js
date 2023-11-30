function esPar()
{
    const numero = document.getElementById("numero").value;
    const resultado = document.getElementById("resultado");

    if(numero % 2 === 0)
    {
        resultado.innerHTML = numero + ' es par';
    }
    else
    {
        resultado.innerHTML = numero + ' es impar';
    }
}