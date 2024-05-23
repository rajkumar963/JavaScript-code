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
const arr=[1,2,3,4,5,6,7,8,9,10]
arr.forEach((n)=>{
    if(n%2==0){
        console.log(n)
    }
})

const month = ['March', 'Jan', 'Feb', 'Dec', 'April'];

month.forEach((m) => {  
    console.log(m);
});

   