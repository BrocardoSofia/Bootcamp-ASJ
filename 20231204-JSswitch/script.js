function switchParImpar()
{
    let num = parseInt(prompt("Ingrese un numero"));
    let par = num%2;

    switch (par)
    {
        case 0:
            alert("El numero "+ num +" es par");
            break;
        case 1:
            alert("El numero "+ num +" es impar");
            break;
        default:
            alert("Error: ingrese un numero");
            break;
    }
}

function palabraEnIngles()
{
    let palabra = prompt("Ingrese la palabra a traducir (palabras disponibles: casa, perro, pelota, árbol, genio)").toLowerCase();

    switch(palabra)
    {
        case "casa":
            alert("home");
            break;

        case "perro":
            alert("dog");
            break;

        case "pelota":
            alert("ball");
            break;

        case "árbol":
            alert("tree");
            break;

        case "genio":
            alert("genius");
            break;
        
        default:
            alert("Palabra ingresada incorrecta");
            break;
    }
}

function calificarPelicula()
{
    let valor = parseInt(prompt("Califique la pelicula: \n\n1. Muy mala\n2. Mala \n3. Mediocre \n4. Buena \n5. Muy buena\n"));
    let mensajeCalificacion = "Calificaste la pelicula como ";
    let flag = 0;


    switch(valor)
    {
        case 1:
            alert(mensajeCalificacion+"'Muy mala'. Lo lamentamos mucho (╥﹏╥)");
            flag = 1;
            break;

        case 2:
            alert(mensajeCalificacion+"'Mala'. Lo lamentamos (︶︹︶)");
            flag = 1;
            break;

        case 3:
            alert(mensajeCalificacion+"'Mediocre'. Lo lamentamos (ㆆ _ ㆆ)");
            flag = 1;
            break;

        case 4:
            alert(mensajeCalificacion+"'Buena'. Nos alegra (｡◕‿‿◕｡)");
            flag = 1;
            break;

        case 5:
            alert(mensajeCalificacion+"'Muy Buena'. Nos alegra mucho ※\(^o^)/※");
            flag = 1;
            break;

        default:
            alert("Error: valor invalido ¯\\(°_o)/¯");
            break;

    }

    if(flag === 1)
    {
        alert("Gracias por su visita!!! (ﾉ◕ヮ◕)ﾉ*:・ﾟ✧");
    }

}

calificarPelicula();
//palabraEnIngles();
//switchParImpar();