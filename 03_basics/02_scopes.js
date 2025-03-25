function one(){
    const username = "Jayanta"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);
    two()
}

one();
console.log(addone(5))
function addone(num){
    return num + 1;
}

addone(5)
console.log(addTwo(5))
const addTwo = function(num){
    return num + 2
}

addTwo(5)