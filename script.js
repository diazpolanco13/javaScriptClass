//🅒🅛🅐🅢🅔 🅘
//CONSOLE.LOG


// Mostrar datos en la consola
console.log("Hola Mundo js")

//Variables
var nombre = "Carlos"
var apellido = 'Diaz'

// Otra forma de anadir variables de forma mas rapida
var nombre2 = 'eduardo', apellido2 = 'polanco'

//🅴🅹🅴🆁🅲🅸🅲🅸🅾🆂
console.log('Hola' + ' ' + nombre + ' ' + nombre2 + ' ' + apellido + ' ' + apellido2)


// ---------- CLASE II -------------//
//VARIABLES DE TIPO STRING - FUNCIONES

//Funcion string Mayuscula
var nombreEnMayusculas = nombre.toUpperCase()

//Funcion string en Minuscula
var nombreEnMinuscula = nombre.toLowerCase()

//Funcion primer valor de un string
var primerLetraDelNombre = nombre.charAt(0)

//Funcion cantidad de letras del nombre
var cantidadDeLetrasDelNombre = nombre.length

//Concatenar dos string
var nombreCompleto = nombre + ' ' + apellido

//Concatenar dos string con interpolacion de variables (Se opuede incluir codigo JS dentro de las variable)
var nombreCompleto = `${nombre} ${apellido}`

var nombreCompleto = `${nombre} ${apellido.toUpperCase()}`

//Acceder a un SubString dentro de un String
var str = nombre.charAt() + nombre.charAt(2) //forma no cool

var str = nombre.substr(1, 3) //mostrara los caracteres seleccionados, entendiendo el valor de los numeros como la posicion de los mismos (Desde-hasta)


//🅴🅹🅴🆁🅲🅸🅲🅸🅾🆂
var ultimaletraDelNombre = nombre.substr(-1)
// alert('La ultima letra de tu nombre es ' + ultimaletraDelNombre.toUpperCase())




//🅒🅛🅐🅢🅔 🅘🅘🅘
//VARIABLES DE TIPO NUMERO - FUNCIONES

//Incremento de variables numericas
var edad = 27 //valor fijo
var edad = edad + 1 //Se sumera y se rescribira el valor de edad
edad += 1 // Forma abreviada del incremento

var peso = 79
var peso = peso - 2

//Suma de variables 
pesoEdad = peso + edad

//Resta de variables 
peso -= pesoEdad //Forma abreviada de la resta

//Decimales 
var precioDeVino = 200.3
var total = precioDeVino * 3 //R= 600.9000000000001    ❌
var total = precioDeVino * 100 * 3 / 100 // R= 600.9   ✅ //Solo un decimal

// Redondeo de decimales
var total = Math.round(precioDeVino * 100 * 3) / 100;  //Muchos decimales
var totalStr = total.toFixed(2) //Anadiendo cantidad de decimales al resultado Final
var totalConDecimal = parseFloat(totalStr) //Tranforma un string en decimal

//Divisiones
var pizza = 8, personas = 2;
var cantidadDePorcionesPorPersona = pizza / personas

//🅒🅛🅐🅢🅔 🅘🅥
//FUNCIONES en JS, serian las clases en CSS

var nombre = 'Carlos', edad = '34'

function imprimirEdad() {
    console.log(`${nombre} tiene ${edad} anos`)
}
imprimirEdad() //Llamar la funcion 

//Otra forma de hacerlo para que podamos remplazar valores de forma dinamica
//Reutilizando funciones
function imprimirEdad(n, e) {
    console.log(`${n} tiene ${e} anos`)
}
imprimirEdad(nombre, edad) //Llamar la funcion 

imprimirEdad('Pedro', 32) // Resultado mostrado
imprimirEdad('Manuel', 34) // Resultado mostrado
imprimirEdad('Yherami', 40) // Resultado mostrado

//🅒🅛🅐🅢🅔 🅥
//ALCANCE DE LAS FUNCIONES

var nombre = 'Carlos'
function ImprmirNombreEnMayuscula() {
    nombre = nombre.toUpperCase()
    console.log(nombre)
    // alert('Tu nombre en mayuscula es ' + nombre)
}
ImprmirNombreEnMayuscula()

//Variables de alcance local 
//(Esta forma de expresar la funcion permite 
// que la ejecucion de la funcion afecte lo que esta incluido en la misma, pero no el 
//valor global)
var nombre = 'Pedro'
function ImprmirNombreEnMayuscula2(n) {
    n = n.toUpperCase()
    console.log(n)
}
ImprmirNombreEnMayuscula2(nombre)


//Variables de alcance local y global
var nombre = 'Juan'
function ImprmirNombreEnMayuscula3(nombre) {
    nombre = nombre.toUpperCase()
    console.log(nombre)
}
ImprmirNombreEnMayuscula3(nombre)

//Resultado automatico = JUAN (local)
//Resultado al consultar la var nombre = Juan (Global)

//🅒🅛🅐🅢🅔 🅥🅘
//OBJETOS

var carlos = {
    nombre: 'Carlos',
    apellido: 'Diaz',
    edad: 28
}
var hermito = {
    nombre: 'Hermes',
    apellido: 'Diaz',
    edad: 29
}

function ImprmirNombreEnMayuscula3(nombre) {
    nombre = nombre.toUpperCase()
    console.log(nombre)
}
ImprmirNombreEnMayuscula3(carlos.nombre)
ImprmirNombreEnMayuscula3(hermito.nombre)

//Version mejorada del ejercicio 2

function ImprmirNombreEnMayuscula4(persona) {
    var nombre = persona.nombre.toUpperCase()
    console.log(nombre)
}
ImprmirNombreEnMayuscula4(carlos)
ImprmirNombreEnMayuscula4(hermito)

//Version mejorada del ejercicio 3
function ImprmirNombreEnMayuscula5(persona) {
    console.log(persona.nombre.toUpperCase())
}
ImprmirNombreEnMayuscula5(carlos)
ImprmirNombreEnMayuscula5(hermito)

//Version mejorada del ejercicio 4 💖💖💖
function ImprmirNombreEnMayuscula5({ nombre }) {
    console.log(nombre.toUpperCase())
}
ImprmirNombreEnMayuscula5(carlos)
ImprmirNombreEnMayuscula5(hermito)
ImprmirNombreEnMayuscula5({ nombre: 'Pepito' }) //Asignar valores nuevos

//🅒🅛🅐🅢🅔 🅥🅘🅘
//DESESTRUCTURACION DE LOS OBJETOS

function ImprmirNombreEnMayuscula5(persona) {
    // var nombre = persona.nombre
    var { nombre } = persona
}

//🅴🅹🅴🆁🅲🅸🅲🅸🅾🆂

function ImprimirNombreYEdad({ nombre, edad }) {
    console.log('Mi nombre es ' + nombre + ' tengo ' + edad + ' anos')
}
ImprimirNombreYEdad(carlos)

//🅒🅛🅐🅢🅔 🅥🅘🅘🅘
//PARAMETROS POR VALOR O POR REFERENCIA

var carlos = {
    nombre: 'Carlos',
    apellido: 'Diaz',
    edad: 28
}
var hermito = {
    nombre: 'Hermes',
    apellido: 'Diaz',
    edad: 29
}

function cumpleanos(persona) {

    // persona.edad = persona.edad + 1
    persona.edad += 1
}
//cumpleanos(Carlos) // Al ejecutarse la funcion, le sumara un digito a el parametro edad

function cumpleanos(persona) {
    return {
        ...persona,
        edad: persona.edad + 1
    }
}
