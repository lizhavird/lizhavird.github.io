// jest test
// 
// 
// //number one
// describe("coffeeOrwork", ()=> {
// test ("create a function called coffeeOrwork that returns drink coffee if you are tired, and keep working if you are not tired",() => {
// expect(coffeeOrwork("tired?")).toEqual("drink coffee")
// expect(coffeeOrwork("not tired?")).toEqual("keep working")
// })
// })
// 
// const coffeeOrwork = (string) => {
//   if(string==="tired"){
//       return "drink coffee"
//     } else if (string==="not tired")
//         return "keep working"
//   } else {
//     return "please declare if you are either tired or not tired"
//   }
// }
// 
// //number two
// describe("stressedOrnot, ()=> {
// test ("create a function called stressedOrnot that returns relax, if stressed, and keep going, if not",() => {
// expect(stressedOrnot("stressed")).toEqual("relax")
// expect(coffeeOrwork("not stressed")).toEqual("keep going")
// })
// })
// 
// //number three
// describe("inbudgetOrnot, ()=> {
// test ("create a function called inbudgetOrnot that returns in budget, if price is lower than $300, and out of budget if price is higher than $300",() => {
// expect(inbudgetOrnot(300)>=("in budget")
// expect(inbudgetOrnot(>400)<=("out of budget")
// })
// })
// 
// const inbudgetOrnot = (number) => {
//   if(number<=300){
//       return "in budget"
//     } else if (number>300)
//         return "out of budget :`( )"
//   } else {
//     return "please express a number"
//   }
// }
// 
// //number four
// describe("returnSmallernumber, ()=> {
// test ("create a function called returnSmallernumber that returns the smaller number in a set of numbers",() => {
// expect(returnSmallernumber(smallernumber)===("smaller number is defined")
// 
// })
// })
// 
// const returnSmallernumber = (number) => {
//   if(number<=number){
//       return `smaller number is ${returnSmallernumber}``
//   } else {
//     return "please express a number"
//   }
// }
// 
// //number five
// describe("isNumberodd, ()=> {
// test ("create a function called isNumberodd that returns if the numebr is odd or not",() => {
// expect(isNumberoddr(number % 2 = 1)===("odd"")
// expect(isNumberoddr(number % 2 = 0)===("even"")
// 
// })
// })
// 
// const isNumberoddr = (number) => {
//   if(number % 2 = 1){
//       return "this number is odd"
//   }
//   if else (number % 2 = 0){
//       return "this number is even"
//   }
//   } else {
//     return "please express a number"
//   }
// }
// 
// //number six
// describe("whatColorisfruit, ()=> {
// test ("create a function called whatColorisfruit that returns yellow, if fruit is bannana, red if apple, and purple if grape. ",() => {
// expect(whatColorisfruit(yellow).toEqual("banana"")
// expect(whatColorisfruit(red).toEqual("apple"")
// expect(whatColorisfruit(purple).toEqual("grape")
// 
// const whatColorisfruit = (color) => {
//   if(color===yellow){
//       return "banana"
//   }
//   if else (color===red){
//       return "apple"
//   }
//   if else (color===purple){
//       return "grape"
//   }
//   } else {
//     return "please express a color"
//   }
// }
// 
// //number seven
// describe("Rick, ()=> {
// test ("create a function called Rick that returns Morty ",() => {
// expect(Rick().toEqual("Morty"")
// 
// const whatColorisfruit = (string) => {
//   if(string===Rick){
//       return "Morty"
// 
//   } else {
//     return "please write Rick"
//   }
// }
// 
// //number eight
// describe("greeter, (string)=> {
// test ("create a function called greeter that takes a name as an argument and returns hello name ! ",() => {
// expect(greeter(string).toEqual(`hello ${greeter}``)
// 
// const greeter = (string) => {
//       return `hello ${greeter}`
//   }
// }
// 
// //number ten
// 
// describe("doubler, ()=> {
// var num1 = [1,2,3]
// test ("create a function called doubler that takes a number and returns the result of the number multiplied by two ",() => {
// 
// expect(doubler(num1)).toEqual(num1*2)
// })
// })

var num1 = [1,2,3]
const doubler = (array) => {
  let newArr=[]
  for (let i=0;i<array.length;i++) {
   newArr.push(array[i])
  }
} return newArr
}
console.log(doubler(num1))
