let num = 5;
let estrella = "*";

for(let i=0; i<num-1; i++)
{
    let mensaje = "";
    for(let j=0; j<i+1; j++)
    {
        mensaje += estrella;
    }
    console.log(mensaje);
}

console.log(estrella.repeat(num));

for(let i=(num-1); i>0; i--)
{
    let mensaje = "";
    for(let j=0; j<i; j++)
    {
        mensaje += estrella;
    }
    console.log(mensaje);
}