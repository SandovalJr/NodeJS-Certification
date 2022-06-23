
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


const getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        const empleado = empleados.find(e => e.id === id)?.nombre;
        (empleado)
            ? resolve(empleado)
            : reject(`No existe empleado con id ${id}`)
    });
}

const getSalario = (id) => {
    const promesaS = new Promise((resolve, reject) => {
        const salario = salarios.find((s) => s.id === id)?.salario;
        (salario) ? resolve(salario) : reject(`No tiene salario`)
    });
    return promesaS
}

const getInfoUser = async (id) => {


    try {
        const empleado = await getEmpleado(id)
        const salario = await getSalario(id)
        return `Empleado: ${empleado}, salario: ${salario}`
    } catch (error) {
        throw error
    }


}


const id = 3;
getInfoUser(id).then(msg => {
    console.log('TODO BIEN');
    console.log(msg)
}).catch(err => {
    console.log('TODO MAL');
    console.log(err)
})

