
const empleados = [
    {
        id: 1,
        nombre: 'Elias'
    },
    {
        id: 2,
        nombre: 'Dylan'
    },
    {
        id: 3,
        nombre: 'Eduardo'
    }
];


const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2500
    },
];


const getEmpleado = (id, callback1) => {

    const empleado = empleados.find((e) => {
        return e.id === id;
    })?.nombre

    if (empleado) {
        callback1(null, empleado)
    } else {
        callback1(`Empleado con id ${id}, no existe`)
    }

}


const getSalario = (id, callback2) => {

    const salario = salarios.find((salario) => {
        return salario.id === id;
    })?.salario

    if (salario) {
        callback2(null, salario)
    }
    else {
        callback2(`El salario con id ${id}, no existe`)
    }
}


const id = 3;
getEmpleado(id, (err, empleado) => {

    if (err) {
        console.log('ERROR');
        return console.log(err);
    }

    getSalario(id, (err, salario) => {
        if (err) {
            return console.log(err);
        }
        console.log(`El empleado ${empleado}, tiene un salario de ${salario}`);
    })

})





