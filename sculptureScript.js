
const fs = require("fs") 

const sculptureList = require('./data.js'); // import data.js

//const element = sculptureList[1] // <---- comment out this line in your solution!


// this following snippet is just to show how to iterate an object's keys
// comment this out in your solution!
// for (const key in element){
//     console.log(`${key}: ${element[key].length}`)
// }

// while within the sculpture list  
    // assign an object to sculpture list [i]
    // then for each key in the element 
        

let sculptureListLengths={} 

let counter = 0

while (counter < sculptureList.length) {
    const element = sculptureList[counter]
    let lengthObject = {}

    for (const key in element) {
        //let cleanedValue = element[key].split(" ").join("")
        //lengthObject[key] = cleanedValue.length
        lengthObject[key] = element[key].length
    }
    
    sculptureListLengths[counter] = Object.assign(lengthObject)
    counter += 1
}

console.log(sculptureListLengths)

