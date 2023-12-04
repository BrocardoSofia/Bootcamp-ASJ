let num = 5;
let factorial = num;

for(let i=(num-1); i>0; i--)
{
    factorial*=i;
}

console.log(`Factorial de ${num} = ${factorial}`);