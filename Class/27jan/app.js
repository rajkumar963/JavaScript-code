// const resolveBtn = document.querySelector('#Resolve');
// const rejectBtn = document.querySelector('#Reject');

// const p = new Promise((resolve, reject) => {
//     resolveBtn.addEventListener('click', () => {
//         resolve('Your order is placed');
//     });

//     rejectBtn.addEventListener('click', () => {
//         reject('Your order is not placed');
//     });
// });

// p.then((data) => {
//     console.log(data);
// }).catch(err => {
//     console.log(err);
// });


// const jsonString=`{
//     "name":"Raj",
//     "age":23,
//     "city":"Delhi"
//     }`

// const obj=JSON.parse(jsonString);
// console.log(obj);
// console.log(obj.name);
// const striRep=JSON.stringify(obj);
// console.log(striRep);

// function jsonParse(str) {
//     try {
//         const plantObject=JSON.parse(str);
//         console.log(plantObject);
//     }catch(err){
//         console.log("Invalid JSON");
//     }
// }

// jsonParse(jsonString);

function devide(a,b){
    console.log(a/b);
}
 function devideNum(a,b){
    try{
        if(b==0)
            throw new Error("Divide by zero");
        console.log(a/b);
    }catch(err){
        console.log(err);
    }
 }

 //devideNum(5,0);
 devideNum(5,8);