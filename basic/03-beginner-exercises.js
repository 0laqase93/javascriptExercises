/*
Clase 18 - Ejercicios: primeros pasos
Vídeo: https://youtu.be/1glVfFxj8a4?t=4733
*/

// 1. Escribe un comentario en una línea

// Hola, esto es un comentario en una línea

// 2. Escribe un comentario en varias líneas

/*
* Esto es un
* comentario
* en varias líneas
* */

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

let one = 1

let hello = 'Hello'

let isTrue = true

let undefinedValue

let nullValue = null

let symbol = Symbol('mySymbol')

let bigInt = BigInt(16198165187451489516485169845168947516984156948)

// 4. Imprime por consola el valor de todas las variables

console.log(one)
console.log(hello)
console.log(isTrue)
console.log(undefinedValue)
console.log(nullValue)
console.log(symbol)
console.log(bigInt)

// 5. Imprime por consola el tipo de todas las variables

console.log(typeof one)
console.log(typeof hello)
console.log(typeof isTrue)
console.log(typeof undefinedValue)
console.log(typeof nullValue)
console.log(typeof symbol)
console.log(typeof bigInt)

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo

one = 2

hello = 'Hola'

isTrue = false

symbol = Symbol('mySymbol2')

bigInt = BigInt(16198165187451489516485169845168947516984156948)

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo

one = 'one'

hello = true

isTrue = undefined

undefinedValue = null

nullValue = Symbol('mySymbol')

bigInt = 1

// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const ONE = 1

const HELLO = 'Hello'

const IS_TRUE = true

const UNDEFINED_VALUE = undefined

const NULL_VALUE = null

const SYMBOL = Symbol('mySymbol')

const BIG_INT = BigInt(16198165187451489516485169845168947516984156948)

// 9. A continuación, modifica los valores de las constantes

// ONE = 2

// HELLO = 'Hola'

// IS_TRUE = false

// SYMBOL = Symbol('mySymbol2')

// BIG_INT = BigInt(16198165187451489516485169845168947516984156948)

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse
