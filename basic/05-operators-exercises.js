/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operación aritmética

let suma = 1 + 1
let resta = 1 - 1
let multiplicacion = 1 * 1
let division = 1 / 1
let modulo = 1 % 1
let exponente = 1 ** 1
let incremento = suma++
let decremento = resta--

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas
let myVariable = 3

myVariable += 1
myVariable -= 1
myVariable *= 1
myVariable /= 1
myVariable &= 1
myVariable **= 1

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
let trueVariable = true

trueVariable = 1 < 2
trueVariable = 2 > 1
trueVariable = 1 <= 1
trueVariable = 2 >= 2
trueVariable = 2 == "2"
trueVariable = 2 === 2
trueVariable = !false
trueVariable = 2 !== 3

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(1 < 0)
console.log(0 > 1)
console.log(2 <= 1)
console.log(0 === "0")
console.log(!true)

// 5. Utiliza el operador lógico and
myVariable = 2 > 1 && 1 > 0

// 6. Utiliza el operador lógico or
myVariable = 2 < 1 || 1 > 0

// 7. Combina ambos operadores lógicos
myVariable = 2 > 1 && 1 > 0 || 2 < 1

// 8. Añade alguna negación
myVariable = !(2 > 1 && 1 > 0) || 2 < 1

// 9. Utiliza el operador ternario
myVariable = 2 > 1 ? "mayor" : "menor"

// 10. Combina operadores aritméticos, de comparación y lógicas
let one = 1

console.log((one += 1) >= 2 || one++ < 2)
