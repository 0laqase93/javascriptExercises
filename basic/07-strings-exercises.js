/*
Clase 22 - Ejercicios: Strings
Vídeo: https://youtu.be/1glVfFxj8a4?t=7226
*/

// 1. Concatena dos cadenas de texto
let firstName = "Vicente"
let lastName = "Casares"
let myName = firstName + " " + lastName

// 2. Muestra la longitud de una cadena de texto
console.log(myName.length)

// 3. Muestra el primer y último carácter de un string
console.log(`Primer carácter: ${myName[0]}, segundo carácter: ${myName[myName.length - 1]}`)

// 4. Convierte a mayúsculas y minúsculas un string
myName.toUpperCase()
myName.toLowerCase()

// 5. Crea una cadena de texto en varias líneas
let message = `Buenas,
Esto es una variable
multilínea`

// 6. Interpola el valor de una variable en un string
let greeting = `Hola, ${firstName}`

// 7. Reemplaza todos los espacios en blanco de un string por guiones
greeting.replace(" ", "-")

// 8. Comprueba si una cadena de texto contiene una palabra concreta
greeting.includes(firstName)

// 9. Comprueba si dos strings son iguales
console.log(greeting === "Hola, Vicente")

// 10. Comprueba si dos strings tienen la misma longitud
console.log(greeting.length === "Hola, Vicente".length)
