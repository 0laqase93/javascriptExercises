// Strings

// Concatenación

let myName = "Vicente"
let greeting = "Hola, " + myName + "!"
console.log(greeting)

// Longitud

console.log(greeting.length)

// Acceso a carácteres

console.log(greeting[0])
console.log(greeting[11])

// Métodos comunes

console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf(myName))
console.log(greeting.indexOf("Hola"))
console.log(greeting.indexOf("123"))
console.log(greeting.includes(myName))
console.log(greeting.includes("Hola"))
console.log(greeting.includes("123"))

// Template literals (platillas literales)

let message = `Hola, este
es mi
curso de 
JavaScript`

console.log(message)

let myEmail = "mi-correo@gmail.com"

console.log(`Hola, ${myName}! Tu email es ${myEmail}`)
