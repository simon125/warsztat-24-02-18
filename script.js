console.log('Hello Szymon!')
//string
var textVariable = "Szymon"
//number
var numberVariable = 43
console.log(textVariable)
console.log(numberVariable)

var boolVariable = true

console.log(boolVariable)

//null
var nullVariable = null
console.log(nullVariable)

//undefined
var undefinedVariable = undefined
console.log(undefinedVariable)

//objects

var simplestObj = {
    name: "Szymon",
    lastname: "Oleszek"


}

var nastedObj = {

    name: "Szymon",

    car: {

        brand: "fiat",
        model: "panda"

    }

}

console.log(nastedObj.car.model)
