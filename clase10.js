//🅒🅛🅐🅢🅔 🅘🅘
//CONDICIONALES Y BULEANOS
var carlos = {
    nombre: 'Carlos',
    apellido: 'Diaz',
    edad: 34,
    ingeniero: true,
    cocinero: false,
    cantante: true,
    dj: true,
    guitarrista: false,
    drone: true
}

function imprimirProfesiones(persona) {
    console.log(`${persona.nombre} es :`)

    if (persona.ingeniero) {
        console.log('ingeniero')
    } else {
        console.log('No es ingeniero')
    }
    if (persona.cocinero) {
        console.log('cocinero')
    } else {
        console.log('No es cocinero')
    }
    if (persona.cantante) {
        console.log('cantante')
    } else {
        console.log('No es cantante')
    }
    if (persona.dj) {
        console.log('dj')
    } else {
        console.log('No es dj')
    }
    if (persona.guitarrista) {
        console.log('guitarrista')
    } else {
        console.log('No es guitarrista')
    }
    if (persona.drone) {
        console.log('Vuela drones')
    } else {
        console.log('No vuela drones')
    }
}

var carlos = {
    nombre: 'Carlos',
    apellido: 'Diaz',
    edad: 34,
    ingeniero: true,
    cocinero: false,
    cantante: true,
    dj: true,
    guitarrista: false,
    drone: true
}
var pedro = {
    nombre: 'Carlos',
    apellido: 'Diaz',
    edad: 16,
    ingeniero: true,
    cocinero: false,
    cantante: true,
    dj: true,
    guitarrista: false,
    drone: true
}

function esMayorDeEdad(persona) {

    if (persona.edad >= 18) {
        console.log('Si es mayor de edad')
    } else {
        console.log('No es mayor de edad')
    }
}

