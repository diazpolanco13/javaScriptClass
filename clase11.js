//🅒🅛🅐🅢🅔 🅘🅘
//Funciones que retornan valores


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
    nombre: 'Pedro',
    apellido: 'Diaz',
    edad: 16,
    ingeniero: true,
    cocinero: false,
    cantante: true,
    dj: true,
    guitarrista: false,
    drone: true
}

// var mayorDeEdad = 18
const MAYORIA_DE_EDAD = 18

function esMayorDeEdad(persona) {
    return persona.edad >= MAYORIA_DE_EDAD
}

function SiesMayorDeEdad(persona) {

    if (esMayorDeEdad(persona)) {
        console.log(`${persona.nombre} Es mayor de edad`)
    } else {
        console.log(`${persona.nombre} No es mayor de edad`)
    }
}