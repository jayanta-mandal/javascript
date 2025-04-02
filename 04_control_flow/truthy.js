const userEmail = [];

if (userEmail) {
    console.log("Got user email")
} else{
    console.log("dont have user email")
}

//falsy value

// false, 0, -0, BigInt 0n,  "", null, undefined, NaN

// truthy value

// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0){
//     console.log("array empty")
// }

const emptyObj = {}

if(Object.keys(emptyObj).length === 0){
console.log("object empty")
}

// nullish coalescing operator (??) : null undefined

let val1;

//val1 = 5 ?? 10

// val1 = null ?? 10

// val1 = undefined ?? 15

console.log(val1)


// ternary operator

// conditions ? true : false

const iceTeaPrice = 100

iceTeaPrice >= 80 ? console.log("less 80") : console.log("more 80")