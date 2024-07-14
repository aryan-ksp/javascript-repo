// strings can be written as double quote and single quote both

const name = "aryan"
const repoCount = 50
console.log(name + repoCount);
console.log(name +  repoCount + "hahaha")
console.log(name + repoCount + " hahaha");

//another syntax to write 

console.log(`Hello, My name is ${name} and my RepoCount is ${repoCount}`); // use this ` not ' this '

const gameName = new String('powerRangerS')
console.log(gameName);

console.log(gameName.length);
console.log(gameName.toLowerCase('S'));
console.log(gameName.lastIndexOf('r'));
console.log(gameName.charAt('R'));

console.log(gameName.slice(-11,0));