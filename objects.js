// //number one
// var person = {
//     firstName: "Alex ",
//     lastName: "Keaton",
//     homePlanet:"Earth",
// getData: function() {
//   return this.firstName+ "is from planet" + this.homePlanet;
//     }
// }
// // person.getData()
// console.log(person.getData())
//
// //number two
// var product = {
//   name: "chair",
//   price: 14.99,
// // describeProduct takes product as an argument and logs "The product is a chair. It costs $14.99".
// getData: function describeProduct() {
//     return "this product is a " + this.name + " it costs " + this.price
//     }
// }
//  console.log(product.getData()

// //Write the code that accesses the ingredients property.
// Write the code that access the 3rd ingredient of the lunch object.
// Write a function that takes the lunch object as an argument and returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."
// Update the lunch object with method that returns "The ingredients for a PB and Banana sandwich are bread, peanut butter, and banana."

// var lunch = {
//   name: "PB and Banana",
//   type: "sandwich",
//   ingredients: ["bread", "peanut butter", "banana"],
//
//   // var {name, type, ingredients} = lunch
//
//   getData: function lunchObject() {
//       return "the ingredients for a " + this.name + " " + this.type +  " are " + this.ingredients
//       }
// }
//
//
//   console.log(lunch.getData())

// console.log(ingredients)

// var animals = [
//   { name: "Waffles", type: "dog", age: 12 },
//   { name: "Fluffy", type: "cat", age: 14 },
//   { name: "Spelunky", type: "dog", age: 4 },
//   { name: "Hank", type: "cat", age: 11 },
// ]
// var {name, type, age} = animals
//  var justCats = animals.filter(value=> value.type==="cat")
// var justNames = animals.map(value=>value.name)
//
//
// console.log(justNames)

//number 5
// let author = {
//     name: "H. G. Wells",
//     genre: "science fiction",
// }
//     var {name, genre} = author
// console.log(`${name} is a ${genre} author`)

//Write the code that destructures the author object and makes the following work:

// console.log(`${name} is a ${genre} author`)
// //-->> "H. G. Wells is a science fiction author"

//number 6
var pokeOne = {
    species: "Charmandar",
    pokemon_type: "Fire"
}

var {species, pokemon_type} = pokeOne
var pokeTwo = {
    species: "Magikarp",
    pokemon_type: "Water"
}
var {species, pokemon_type} = pokeOne
var {species, pokemon_type} = pokeTwo
 getData: function describePokemon() {
      return  this.species + " is a " + this.pokemon_type }

// Write a function called describePokemon() that take an object like the ones above and uses destructuring to return a description of the pokemon such that:
console.log(describePokemon(pokeTwo))
// //-->> 'Charmandar is a Fire pokemon'
// console.log(describePokemon(pokeTwo))
// //-->> 'Magikarp is a Water pokemon'
