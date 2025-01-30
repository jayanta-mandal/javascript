// object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "Jayanta",
    age : 18,
    "full name": "Jayanta Mandal",
    [mySym]: "mykey1",
    location:"Kolkata",
    email:"jayanta@gmail.com",
    isLoggedIn : false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "jayanta@google.com";

//Object.freeze(JsUser);

JsUser.email = "jayanta@hotmail.com";

// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo())