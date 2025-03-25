const marvel = ["thor", "ironman", "spiderman"]
const dc = ["superman", "flash", "batman"]

// marvel.push(dc);

// console.log(marvel);

// console.log(marvel[3])

// console.log(marvel[3][1])

// const allhero = marvel.concat(dc)

//console.log(allhero);
//spread operator
const allnewhero = [...marvel, ...dc]

//console.log(allnewhero)

const another = [1, 2, 3, [4,5,6], 7, [6, 7, [4, 5]]];

const myRealarray = another.flat(Infinity)

console.log(myRealarray);


console.log(Array.isArray("Jayanta"));

console.log(Array.from("Jayanta"));

console.log(Array.from({name:"Jayanta"})); //


let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));