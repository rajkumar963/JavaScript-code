console.log("Rajkumar"+" "+ "is a good boy");
console.log(45*2-10);
let date = new Date();
console.log(date.getFullYear());

let a="hello";
let b="world";
console.log(a+" "+b);
console.error("this is an error");

var a1=true;
console.log(typeof a1);

let age=20;
if(age>=18)
    console.log("yes,greater then 18");
else
    console.log("no,less then 18");

let a2=10;
console.log(a2);

const pi=Math.PI;
console.log(pi);

console.log(typeof NaN);
console.log(typeof null);
console.log(typeof undefined);

let x='hello',y=25,c=true;
console.log(x,y,c);

// const arr=[1,2,3,4];
// arr++;
//console.log(arr);//error
let r=1
for(let i=0;i<3;i++){
    var str=''
    for(let j=0;j<3;j++){
        str+=` ${r}`;
        r++
     }
    console.log(str);
}

let arr=[1,2,3,4,5,6,7,8,9,10];
// let reverseArr=[]
// for(let i=0;i<arr.length;i++){
//   arr[i]=(arr[i],arr[arr.length-1-i]);
// }
// console.log(arr)

arr.push(11);
arr.unshift(0);
arr.pop()
console.log(arr);

console.log(arr.slice(0,3));
console.log(arr.indexOf(5));
console.log(arr.includes(7));

let arr1=[11,23,45,67,89];
let arr2=[1,2,3,4,5,8];
console.log(arr1.concat(arr2));

let arr3=[3,7, 1,4,0,]
//console.log(arr3.sort());
for(let i=0;i<arr3.length-1;i++){
    for(let i=0;i<arr3.length-1;i++){
      if(arr3[i]>arr3[i+1]){
        let temp=arr3[i];
        arr3[i]=arr3[i+1];
        arr3[i+1]=temp;
     }
}}
console.log(arr3);


let arr4=arr2
let temp=[...arr2];
console.log(arr4);
console.log(temp);


function evenOdd(num){
    if(num%2==0){
        console.log("even");
    }else{  
        console.log("odd");
    }
}
evenOdd(5)

function areacircle(r){
    return Math.PI*r*r;
}
console.log(areacircle(5).toFixed(2))


function checker(str){
 if(str[0]=='_'||str[0]=='$')
    return true;
else
    return false}
console.log(checker("hello"));