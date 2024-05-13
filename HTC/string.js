const name="rajkumar";
const repoCount=10;

//console.log(name+repoCount+" "+typeof(name+repoCount))

//console.log(`my name is ${name} and i have ${repoCount} repositories`)

const gameName=new String("cricket-kabaddi");

// console.log(gameName.length)
// console.log(gameName.__proto__)
// console.log(gameName.toLocaleUpperCase())
// console.log(gameName.charAt(5))
// console.log(gameName.indexOf("k"))

// console.log( gameName.substring(2,8));
// console.log( gameName.slice(-8,4))

// const newstr="     rajkumar   ";
// console.log(newstr)
// console.log(newstr.trim())

const url="https://google.com/search?q%20=hello";
console.log(url.replace('%20','-'))
console.log(url.includes('google'))
console.log(gameName.split("-"))