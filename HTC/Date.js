let myDate=new Date();//Object
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toUTCString());
// console.log(myDate.toISOString());
// console.log(myDate.toDateString());
//console.log(myDate.getTime());
// console.log(myDate.toJSON());

// let myDate1=new Date(2024,9,24);
//let myDate1=new Date("2024-09-24");
// let myDate1=new Date("01-01-2024");
//  console.log(myDate1.toLocaleString());

let myTimeStamp=Date.now();
// console.log(myTimeStamp);
// console.log(myDate.getTime())
//console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
console.log(newDate.getMonth()+1)
console.log(newDate.getDay());

newDate.toLocaleString('default', { 
    month: 'long', day: 'numeric' 
});
