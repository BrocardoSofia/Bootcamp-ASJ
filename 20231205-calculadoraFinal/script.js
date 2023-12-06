let pantalla = "0";
let pantallaDefault = true;
let operacion = "";
let num1;
let num2;

function agregar(tecla){
    let pantalla = document.getElementById("calculadoraPantalla");
    let insertarValor;

    if(pantallaDefault)
    {
        pantallaDefault = false;
        //borro el contenido de la pantalla
        pantalla.innerHTML = "";
    }
    
    agregarNum(tecla);
    insertarValor = document.createTextNode(tecla);    

    pantalla.appendChild(insertarValor);
}

function agregarNum(num){
    if(num1 === undefined)
    {
        num1 = num;
    }
    else if(operacion === "")
    {
        num1 += num;
    }
    else
    {
        if(num2 === undefined)
        {
            num2 = num;
        }
        else
        {
            num2+=num;
        }
    }
}

function agregarOperador(tecla)
{
    if(!pantallaDefault)
    {
        let pantalla = document.getElementById("calculadoraPantalla");
        let insertarTecla;
     
        if((operacion != "") || (tecla === "="))
        {
            //primero tengo que calcular la suma que ya existia
            let calculo = calcular();
            pantalla.innerHTML = "";
            if(tecla === "=")
            {
                insertarTecla = document.createTextNode(calculo);
                operacion = "";
            }
            else
            {
                insertarTecla = document.createTextNode(calculo+" "+tecla+" ");
            }
        }       
        else{
            insertarTecla = document.createTextNode(" "+tecla+" ");
        }
        
        
        pantalla.appendChild(insertarTecla);
        if(tecla != "=")
        {
            operacion = tecla;
        }
    } 
}

function calcular()
{
    let calculo;
    switch(operacion)
    {
        case '+':
            calculo = parseFloat(num1) + parseFloat(num2);
            console.log(num1);
            console.log(num2);
            break;

        case '-':
            calculo = parseFloat(num1) - parseFloat(num2);
            console.log(num1);
            console.log(num2);
            break;

        case '*':
            calculo = parseFloat(num1) * parseFloat(num2);
            console.log(num1);
            console.log(num2);
            break;

        case '%':
            calculo = parseFloat(num1) % parseFloat(num2);
            console.log(num1);
            console.log(num2);
            break;

        case '/':
            if(parseFloat(num2) === 0)
            {
                errorZero();
            }
            else{
                calculo = parseFloat(num1) / parseFloat(num2);
                calculo = calculo.toFixed(2);
                console.log(num1);
                console.log(num2);
            }
            break;

    }

    num1 = calculo;
    num2 = undefined;

    return calculo;
}

function errorZero()
{
    num1 = undefined;
    num2 = undefined;
    operacion = "";
    pantallaDefault = true;
    let pantalla = document.getElementById("calculadoraPantalla");
    pantalla.innerHTML = "ERROR: no se puede dividir por 0";
}

function borrarTodo()
{
    num1 = undefined;
    num2 = undefined;
    operacion = "";
    pantallaDefault = true;
    let pantalla = document.getElementById("calculadoraPantalla");
    pantalla.innerHTML = "0";
}

function borrarUno()
{
    let pantalla = document.getElementById("calculadoraPantalla");
    let valor = document.getElementById("calculadoraPantalla").textContent;
    
    if(valor.charAt(valor.length - 1) != " ")
    {
        valor = valor.substring(0, valor.length - 1);
        pantalla.innerHTML = valor;
    }
}