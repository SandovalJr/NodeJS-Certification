
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
    })

    if (empleado) {
        callback1(null, empleado)
        // return empleado;
    } else {
        callback1(`Empleado con id ${id}, no existe`)
    }

}


getEmpleado(1, (err, empleado) => {

    if (err) {
        console.log('ERROR');
        return console.log(err);
    }

    console.log(empleado);

})



