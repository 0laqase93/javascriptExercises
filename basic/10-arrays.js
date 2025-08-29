// Array

// Declaración

let myArray = []
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización

myArray = [3]
myArray2 = new Array(3)

console.log(myArray)
console.log(myArray2)

myArray = [1, 2, 3, 4]
myArray2 = new Array(1, 2, 3, 4)

console.log(myArray)
console.log(myArray2)

myArray = ["Casares", "Lujan", "Vicente", 37, true]
myArray2 = new Array("Casares", "Lujan", "Vicente", 37, true)

console.log(myArray)
console.log(myArray2)

myArray2 = new Array(3)
//myArray2[0] = "Casares"
myArray2[1] = "Lujan"
myArray2[2] = "Vicente"
myArray2[3] = "Vicente"

console.log(myArray2)

myArray = []
//myArray[0] = "Casares"
myArray[1] = "Lujan"
myArray[2] = "Vicente"

console.log(myArray)

// Métodos comunes

myArray = []

// push y pop

myArray.push("Casares")
myArray.push("Lujan")
myArray.push("Vicente")
myArray.push(37)

console.log(myArray)

console.log(myArray.pop()) // Elimina el último y lo devuelve
myArray.pop()

console.log(myArray)

// shift y unshift

console.log(myArray.shift())
console.log(myArray)

myArray.unshift("Casares", "Lujan")
console.log(myArray)

// length

console.log(myArray.length)

// clear

myArray = []
myArray.length = 0 // Alternativa
console.log(myArray)

// slice

myArray = ["Casares", "Lujan", "Vicente", 37, true]
let myNewArray = myArray.slice(1, 3)

console.log(myArray)
console.log(myNewArray)

// splice

myArray.splice(1, 3)
console.log(myArray)

myArray.splice(1, 2, "Nueva entrada")
console.log(myArray)
