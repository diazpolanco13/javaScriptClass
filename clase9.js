//🅒🅛🅐🅢🅔 🅘🅘
//COMPRANDO VALORES PRIMITIVOS
var x = 4, y = '4'

// x == y es verdadero (el triple igual unificar los valores y compara)
// x === y es falso (compueba que los valores sean exactamente iguales)

// COMPARANDO OBJETOS

var carlos = {
    nombre: 'carlos'
}

var otraPersona = {
    nombre: 'carlos'
}

// carlos == otraPersona (FALSO) porque no ocupan el mismo espacio de memoria

var otraPersona = carlos

//El valor es (verdadero), ya que reapuntamos el valor de otraPersona, al espacio de memoria que tenia carlos

var otraPersona = {
    ...carlos
}