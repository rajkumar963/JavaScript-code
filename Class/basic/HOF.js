//HOF:-
//1.Functional programme:-map,filter,reduce,forEach// find, sort,every,sum
//2.call back:-- setTimeout, setInterval

// const callback=(n)=>{
//    return n**2;
// }
// function cube(callback,n){
//    return callback(n)*n;
// }

// console.log(cube(callback,5));

//setinterval
// function gret(){
//     console.log("hello");
// }

// setInterval(gret,1000)  //HOF

// setInterval(()=>{
//     console.log("hello");
// },1000)

//setTimeout
// setTimeout(()=>{
//     console.log("hello");
// },5000)

//map :-where we can use map function in real life and give more example 

// const arr=[1,2,3,4,5,6,7,8,9,10]
// const total=arr.map((n)=>n*n)

// console.log(total)

//filter
// const country=["india","usa","uk","australia","japan"]

// const filter=country.filter((n)=>n.length>4)

// console.log(filter)


//reduce:--
// const arr=[1,2,3,4,5,6,7,8,9,10]
// const total=arr.reduce((acc,curr)=>{return acc+curr},10)
// console.log(total)

//sort
// const months = ['March', 'Jan', 'Feb', 'Dec', 'April'];
// months.sort();
// months.reverse();
// console.log(months);

//forEach
// const arr=[1,2,3,4,5,6,7,8,9,10]
// arr.forEach((n)=>{
//     if(n%2==0){
//         console.log(n)
//     }
// })

// const month = ['March', 'Jan', 'Feb', 'Dec', 'April'];

// month.forEach((m) => {  
//     console.log(m);
// });



//spread or Rest operator
// const arr=["raj","shayam","rahul","ravi","karan"]
//  let [nam1,nam2,...nam5]=arr;
// //let [nam1,nam2,nam3, ,nam5]=arr
// console.log(nam1,nam2,nam5)
const arr=[1,2,3,4,5,6,7,8,9,10]
const arr1=[11,12,13,14,15,16,17,18,19,20]

const arr2=[...arr,...arr1]

//console.log(arr2)




  //destructuring 
const rectangle1 = {
    length: 10,
    width: 5,
    area:59
  };
  
//   const area = (rectangle1) => rectangle1.length * rectangle1.width;
//console.log(area(rectangle1))
//let {length,width,area}=rectangle1;
//console.log(length,width,area)
  
 
const constants = [2.72, 3.14, 9.81, 37, 100]
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const users = [
{
  name:'Brook',
  scores:75,
  skills:['HTM', 'CSS', 'JS'],
  age:16
},
{
  name:'Alex',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'David',
  scores:75,
  skills:['HTM', 'CSS'],
  age:22
},
{
  name:'John',
  scores:85,
  skills:['HTML'],
  age:25
},
{
  name:'Sara',
  scores:95,
  skills:['HTM', 'CSS', 'JS'],
  age: 26
},
{
  name:'Martha',
  scores:80,
  skills:['HTM', 'CSS', 'JS'],
  age:18
},
{
  name:'Thomas',
  scores:90,
  skills:['HTM', 'CSS', 'JS'],
  age:20
}
]

//Destructure and assign the elements of the constants array to e, pi, gravity, humanBodyTemp, and waterBoilingTemp.
let [e,pi,gravity, humanBodyTemp, waterBoilingTemp]=constants
//console.log(e,pi,gravity, humanBodyTemp, waterBoilingTemp)

//Destructure and assign the elements of countries array to fin, est, sw, den, nor
let [fin,est,sw,den,nor]=countries
//console.log(fin,est,sw,den,nor)

//Destructure the rectangle object by its properties or keys.
let {width,height,area,perimeter}=rectangle
//console.log(width,height,area,perimeter)


//Iterate through the users array and get all the keys of the object using destructuring
let [{name,scores,skills,age},...rest]=users
//console.log(name,scores,skills,age,rest)

//Find the persons who have less than two skills
const skill=users.filter((user)=>user.skills.length<2)
console.log(skill)