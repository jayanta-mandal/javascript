// const tinderUser = new Object()

const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false;

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "Jayanta",
            lastname: "Mandal"
        }
    }
}

//console.log(regularUser.fullname);
//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}

//const obj3 = {obj1, obj2}

//const obj3 = Object.assign({}, obj1, obj2)
//spread operator
const obj3 = {...obj1, ...obj2}

//console.log(obj3)

const users = [
    {
        id : 1,
        email: "test@gmail.com", 
    },
    {
        id : 2,
        email: "test2@gmail.com", 
    },
    {
        id : 3,
        email: "test3@gmail.com", 
    },
    {
        id : 4,
        email: "test4@gmail.com", 
    }
]

users[1].email;

console.log(tinderUser)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));