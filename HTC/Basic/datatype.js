"use strict";//treat all js code as newer version

//alert("hello");//pop up message but in browser not node js
//code readability shuld be higher
//original documentation of js:- ecma script 2015,


let name="raj";
let age=20;
let isLoggedIn=true;

//Primitive data type:-- call by value
//number =>2 to power 53(bigint)
//BigInt=> big value
//string=>""
//boolean=>true or false  //came from jorge boolea
//null=>standalone value
//undefined=>no value
//symbol=>unique value

const id=Symbol('123')
const anotherId=Symbol('123')
//console.log(id===anotherId)

const bigNumber=124567876543766543n

//Non-primitive data type:--Reference type(call by reference) no direct access or call
//array
//objects        //Functions

const friends=["ram","shyam","mohan"]
let myobj={
    name:"raj",
    age:20  
}

const myfunction=function(){
    //console.log("hello")
}

// console.log(typeof myfunction)
// console.log(typeof bigNumber)
// console.log(typeof friends)
// console.log(typeof id)

// console.log(typeof undefined)// undefined
// console.log(typeof null)     // object



// ***********************Data type conversion and coercion*****************

let score= "10ab"    //undefined(NaN)  //null(0)

//console.log(typeof (score))

let ValueInNumber=Number(score)
//console.log(typeof (ValueInNumber))
//console.log(ValueInNumber)

////33=>33
//"33abs"=>NaN
//true=>1 false=>0
//null=>0
//undefined=>NaN

let IsLoggedIn=" sadsf"
let booleanIsLoggedIn=Boolean(IsLoggedIn)
//console.log(booleanIsLoggedIn)

//1=>true
//0=>false
//""=>false
//"asd"=>true
//null=>`false` //NaN
//undefined=>`false`


// *********************** Operations ****************************

let value=10
let negetive=-value
//console.log(negetive)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2/2)
// console.log(2**3)
// console.log(2%5)

let str1="Raj"
let str2="kumar"
//console.log(str1+str2)


// console.log("1"+2)//"12"
// console.log("1"+2+3)//"123"
// console.log("1"+(2+3))//"15"
// console.log(1+2+"3")//"33"

// console.log("10"-"5")//5
// console.log("10"-5)//5  

// let num1,num2,num3
// num1=num2=num3=10
// console.log(num1,num2,num3)

let count=100
count++;
console.log(count)   //go to mdn and read about prefix and postfix



//************************* Comparision *******************************/

//  console.log(1<2)
//  console.log(1>2)
//  console.log(1<=2)
//  console.log(1>=2)
//  console.log(1==2)  
//  console.log(1!=2)

// console.log("2">1)
// console.log("02">1)

// console.log(0===false)

// console.log(null>0)
// console.log(null==0)
// console.log(null>=0)

// console.log(undefined>0)
// console.log(undefined==0)
// console.log(undefined>=0)

//=== check value and data type


//************************* Memory***************************** */

//stack(primitive), Heap(non-primitive)

let name1="raj"
let anothername=name1;
anothername="kumar"
console.log(anothername)
console.log(name1)

let user={
    name:"raj",
    age:20,
    email:"raj@kumar",
    upi:"user@upi"
}

let user2=user
user2.name="kumar"

console.log(user)
console.log(user2)