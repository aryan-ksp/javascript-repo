// memory types:-  stack and heap
//datatypes are based on memory allocation
/*
Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory
*/

let name= " aryan"
let surname= "kashyap"
console.log(name)
console.log(surname)
name=surname // its in stack, so the copy of the name gets changed 
console.log(name)


// lets try for heap

let userOne = {
    email :" aryn.ksp@gmail.com", // STORED IN HEAP
    upiId : "aryan@ok" // STORED IN HEAP
}

let userTwo = userOne
// now i will make changes in usertwo, and userone will gets changed as well, as in heap we have reference 

userTwo.email= "aryan@gmail.com"

console.log(userTwo)
console.log(userOne)
console.log(userTwo.upiId)
