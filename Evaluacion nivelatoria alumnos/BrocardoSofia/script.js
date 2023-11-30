let alumnos = [
    {
        nombre: "Mariano Damian",
        apellido: "Hernandez",
        notas: [8, 7, 9, 10, 6],
    },
    {
        nombre: "Ramiro",
        apellido: "Diaz",
        notas: [1, 3, 8, 2, 1],
    },
    {
        nombre: "Ana",
        apellido: "Armella",
        notas: [5, 7, 9, 4, 2],
    },
    {
        nombre: "Romina",
        apellido: "Almeda",
        notas: [10, 6, 7, 5, 9],
    },
    {
        nombre: "Denis",
        apellido: "Tolaba",
        notas: [10, 10, 9, 9, 10],
    },
    {
        nombre: "Hugo",
        apellido: "Castellano",
        notas: [2, 3, 3, 6, 1],
    },
    {
        nombre: "Analia Daiana",
        apellido: "Fonseca",
        notas: [4, 3, 4, 5, 2],
    },
    {
        nombre: "Francisco Daniel",
        apellido: "Samir",
        notas: [5, 5, 6, 4, 2],
    },
];

promedio(alumnos, "aprobado");

function promedio(alumnos, estado) {
    const alumnosEstado = [];

    for(let alumno of alumnos)
    {
        let promedio = promedioAlumno(alumno.notas);

        let cumpleEstado = esEstado(promedio, estado);

        if(cumpleEstado)
        {
            alumnosEstado.push({"nombre completo": alumno.nombre + ' ' + alumno.apellido, "promedio": promedio, "estado": estado});
        }
    }

    console.log(alumnosEstado);

    return alumnosEstado;
}

function esEstado(promedio, estado)
{
    let rta;

    if(estado == "aprobado")
    {
        if(promedio >=6)
        {
            rta = true;
        }
        else
        {
            rta = false;
        }
    }
    else
    {
        if(promedio < 6)
        {
            rta = true;
        }
        else
        {
            rta = false;
        }
    }

    return rta;
}

function promedioAlumno(notas)
{
    let suma = 0;
    let cantidad = 0;
    let promedio;

    for(let nota of notas)
    {
        suma += nota;
        cantidad++;
    }

    promedio = suma/cantidad;

    return promedio;
}