// Operadores

// Operadores aritméticos

let a = 5
let b = 10
console.log(a + b) // Suma
console.log(a - b) // Resta
console.log(a * b) // Multiplicación
console.log(a / b) // División

console.log(a % b) // Módulo
console.log(a ** b) // Exponente

a++ // Incremento
console.log(a)

b-- // Decremento
console.log(b)

// Operadores de asignación

let myVariable = 2 // Asignación
console.log(myVariable)
myVariable += 2 // myVariable = myVariable + 2
console.log(myVariable)

myVariable += 2
myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2

// Operadores de comparación

// a = 5 || b == 10
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)
console.log(a == b) // Igualdad por valor
console.log(a === b) // Igualdad por identidad (tipo y valor)
/*
 * console.log(a == 6) -> true
 * console.log(a == "6") -> true
 *
 * console.log(a === 6) -> true
 * console.log(a === "6") -> false
 */
console.log(a != b)
console.log(a !== b)

console.log(0 == false) // true
console.log(1 == true) // true

console.log(0 == "") // true
console.log(0 == " ") // true
console.log(0 == ' ') // true
console.log(0 === "") // false

console.log(undefined == null) // true
console.log(undefined === null) // false

// Truthy values (valores verdaderos)

// Todos los números positivos y negativos menos el cero
// Todas las cadenas de texto menos las vacías
// El booleano true

// Falsy values (valores falsos)

// 0
// 0n
// null
// undefined
// NaN
// El booleano false
// Cadenas de texto vacías

// Operadores lógicos

// and (&&)
console.log(5 > 10 && 15 > 20) // false && false -> false
console.log(5 < 10 && 15 < 20) // true && true -> true
console.log(5 > 10 && 15 < 20) // false && true -> false
console.log(5 > 10 && 15 > 20 && 30 > 40) // false && false && false -> false

// or (||)
console.log(5 > 10 || 15 > 20) // false && false -> false
console.log(5 < 10 || 15 < 20) // true && true -> true
console.log(5 > 10 || 15 < 20) // false && true -> true
console.log(5 > 10 || 15 > 20 || 30 > 40) // false && false && false -> false

console.log(5 > 10 || 15 > 20 && 30 > 40) // false && false && false -> false

// not (!)
console.log(!(5 > 10 && 15 > 20)) // not (false && false) -> true
console.log(!(5 < 10 && 15 < 20)) // not (true && true) -> false
console.log(!(5 > 10 && 15 < 20)) // not (false && true) -> true
console.log(!(5 > 10 && 15 > 20 && 30 > 40)) // not (false && false && false) -> true

// Operadores ternarios
const isRaining = true

isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo")


