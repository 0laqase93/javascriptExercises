/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let myName = "Vicente Casares"
let variable = 1

if (variable === 1) {
    console.log(myName)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña coincide con unos establecidos
let user = "Manolo123"
let password = "superPassword123"

if (user === "Manolo123" && password === "superPassword123") {
    console.log("El usuario y la contraseña son correctos")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let number = 1

if (number === 0) {
    console.log("El número es 0")
} else if (number < 0) {
    console.log("El número es negativo")
} else if (number > 0) {
    console.log("El número es positivo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age = 18

if (age >= 18) {
    console.log("Felicidades, puedes votar")
} else {
    let yearsUntil18 = 18 - age
    console.log(`No puedes votar, aún te quedan ${yearsUntil18} años.`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad
let personState = age >= 18 ? "adulto" : "menor"

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 1
let mesName

if (mes === 0) {
    mesName = "Enero"
} else if (mes === 1) {
    mesName = "Febrero"
} else if (mes === 2) {
    mesName = "Marzo"
} else if (mes === 3) {
    mesName = "Abril"
} else if (mes === 4) {
    mesName = "Mayo"
} else if (mes === 5) {
    mesName = "Junio"
} else if (mes === 6) {
    mesName = "Julio"
} else if (mes === 7) {
    mesName = "Agosto"
} else if (mes === 8) {
    mesName = "Septiembre"
} else if (mes === 9) {
    mesName = "Octubre"
} else if (mes === 10) {
    mesName = "Noviembre"
} else if (mes === 11) {
    mesName = "Diciembre"
} else {
    mesName = "Número de mes incorrecto"
}

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

let numberDaysOfMonth

if (mes === 0) {
    numberDaysOfMonth = 31
} else if (mes === 1) {
    numberDaysOfMonth = 29
} else if (mes === 2) {
    numberDaysOfMonth = 31
} else if (mes === 3) {
    numberDaysOfMonth = 30
} else if (mes === 4) {
    numberDaysOfMonth = 31
} else if (mes === 5) {
    numberDaysOfMonth = 30
} else if (mes === 6) {
    numberDaysOfMonth = 31
} else if (mes === 7) {
    numberDaysOfMonth = 30
} else if (mes === 8) {
    numberDaysOfMonth = 31
} else if (mes === 9) {
    numberDaysOfMonth = 30
} else if (mes === 10) {
    numberDaysOfMonth = 31
} else if (mes === 11) {
    numberDaysOfMonth = 30
} else {
    numberDaysOfMonth = "Número de mes incorrecto"
}

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let language = "es"
let message

switch (language) {
    case "es":
        message = "¡Bienvenido!"
        break
    case "en":
        message = "Welcome!"
        break
    case "fr":
        message = "Accueillir!"
        break
    case "por":
        message = "Bem-vindo!"
        break
    default:
        message = "Idioma no disponible"
}

console.log(message)

// 9. Usa un switch para hacer de nuevo el ejercicio 6
switch (mes) {
    case 0:
        mesName = "Enero"
        break
    case 1:
        mesName = "Febrero"
        break
    case 2:
        mesName = "Marzo"
        break
    case 3:
        mesName = "Abril"
        break
    case 4:
        mesName = "Mayo"
        break
    case 5:
        mesName = "Junio"
        break
    case 6:
        mesName = "Julio"
        break
    case 7:
        mesName = "Agosto"
        break
    case 8:
        mesName = "Septiembre"
        break
    case 9:
        mesName = "Octubre"
        break
    case 10:
        mesName = "Noviembre"
        break
    case 11:
        mesName = "Diciembre"
        break
    default:
        mesName = "Número de mes incorrecto"
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7

switch (mes) {
    case 0:
        numberDaysOfMonth = 31
        break
    case 1:
        numberDaysOfMonth = 29
        break
    case 2:
        numberDaysOfMonth = 31
        break
    case 3:
        numberDaysOfMonth = 30
        break
    case 4:
        numberDaysOfMonth = 31
        break
    case 5:
        numberDaysOfMonth = 30
        break
    case 6:
        numberDaysOfMonth = 31
        break
    case 7:
        numberDaysOfMonth = 30
        break
    case 8:
        numberDaysOfMonth = 31
        break
    case 9:
        numberDaysOfMonth = 30
        break
    case 10:
        numberDaysOfMonth = 31
        break
    case 11:
        numberDaysOfMonth = 30
        break
    default:
        mesName = "Número de mes incorrecto"
}