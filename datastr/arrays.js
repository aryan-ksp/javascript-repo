// JavaScript Repository By Aryan Kashyap

// array
const myArray = [0,1,2,3,4,5]
console.log(myArray) // whole array will get printed 
console.log(myArray[2])// particular index value will get printed 

// concept of deep copy and shallow copy
// deep copy = doesnt share same refrence
// shallow copy = share common refrence 

// another way of declaring array, string type
const myarr = ["aryan","is","the","best"]

// another way
const yourArr = new Array(1,2,3,4)
console.log(myarr);
console.log(yourArr);
console.log(yourArr.length);

// some methods that we use in array

yourArr.push(5)
yourArr.push(6)
console.log(yourArr);
yourArr.pop()
console.log(yourArr);
yourArr.unshift(100)// pushes in front, it is time consuming , as it changed every single value's position by one step
console.log(yourArr);