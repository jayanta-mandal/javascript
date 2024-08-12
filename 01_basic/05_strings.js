const name = "Jayanta"
const repoCount = 50;

//console.log(name + repoCount + " value");

//console.log(`Hello my name is ${name} and ny repo count is ${repoCount}`)

const gameName = new String('jayanta-mandal')

//console.log(gameName[0])

//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf("a"));
console.log(gameName.lastIndexOf("a"));

const newString = gameName.substring(0, 4);

console.log(newString);

const newString1 = gameName.slice(-8, 4);

console.log(newString1);

const newString2 = "     Jayanta      "

console.log(newString2);
console.log(newString2.trim());