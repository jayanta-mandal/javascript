function addTwoNum(number1, number2){
    console.log(number1 + number2);

    let result = number1 + number2;
    return result
}

function addTwoNum(number1, number2){
    console.log(number1 + number2);
    return number1 + number2;
}


addTwoNum(3, 5);

addTwoNum(3, "5");

const result = addTwoNum(3, 5);

console.log("Result:", result)

function loginUserMessage(username){
    if(username === undefined){
        console.log("Enter user name")
        return
    }
    return `${username} just logged in`
}

function loginUserMessage(username){
    if(!username){
        console.log("Enter user name")
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Jaynta"))

console.log(loginUserMessage())