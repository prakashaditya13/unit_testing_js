function sum(a,b){
    return a+b
}

function helper(){
    console.log("Helper")
}

function createUser(){
    var user = {
        firstName: "aditya",
        lastName: "Prakash"
    }
    return user
}
module.exports = {sum,createUser}
