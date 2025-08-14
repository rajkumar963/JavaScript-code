    // console.log("hello">9);// false
    // console.log("hello"<9);// false
    // console.log("hello"==9);// false
    // console.log("8">5);// true
    // console.log("8"<5);// false
    // console.log("8"==5);// false
    // console.log("8"===5);// false

// [y]=[1,2,3,4,5]
// console.log(y)

// let a=100;
// const b=++a + a++;
// console.log(a);
// console.log(b);

// let name="Rajkumar";
// name[1]="pammi"
// console.log(name);


// let sen=" my name is rajkumar";
// function print(sentance){
//     let words = sen.trim().split(" ");
//     for (let word of words) {
//         if (word.length > 0) {
//             // Capitalize first letter and print
//             let capitalized = word[0].toUpperCase() + word.slice(1);
//             console.log(capitalized);
//         }
//     }
// }
// print(sen);


// let arr=[,,,,];
// console.log(arr.length);


//let ar1=[1,12,4,8,15,2,5]

// ar1.sort((a,b)=>{
//     return a-b
// })
// console.log(ar1);

// ar1.sort((a,b)=>
//      a-b
// )
// console.log(ar1);


//Function Declaration
// function greet() {
//     console.log("Hello!");
// }
// greet();  // ✅ You can call it even before the definition

//Function Expression
// const hello = function () {
//     console.log("Hello!");
// };
// hello();

// Feature	           Function Declaration 	Function Expression
// Hoisted	             ✅ Yes	                   ❌ No
// Requires Name	    ✅ Yes	                   ❌ Optional
// Can Be Anonymous	    ❌ No	                    ✅ Yes
// Call Before Defined	✅ Yes	                   ❌ No



// const name="Rajkumar";
// console.log(name());

// console.log([]==[]);// false
// console.log([]===[]);// false    

// let ab='raj';
// function fun(){
//     console.log(ab);
//     let ab='kumar';
// }

// fun();

// function normal() {
//   console.log(arguments); // works
// }

// const arrow = () => {
//   console.log(arguments); // ReferenceError
// };

// ac()//hello world
// var ac=function(){
//     console.log("hello");
// }

// ac()//hello
// function ac(){
//     console.log("hello world");
// }
// ac()  //hello


//how to reverse a string
// let str="rajkumar is a good boy";
// let reversed = str.split("").reverse().join("");
// console.log(reversed);

// let str1="rajkumar is a good boy";
// let reverse1 = str1.split(" ").reverse().join(" ");
// console.log(reverse1);


// console.log(null==undefined); // true
// console.log(null===undefined); // false

// const arr = new Array(100);
// console.log(arr.length); // 100


// let arr1=[1,2,3,4,5,6]
// console.log(arr1.filter((ele)=>ele%2==0))
// console.log(arr1.find((ele)=>ele%2==0))

// let arr=[1,2,3,4,5]
// let arr1=[3,4,5,6,7]

// function intersection(arr,arr1){
//     let arr2=[];
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr1.length;j++){
//             if(arr[i]==arr1[j]){
//                 arr2.push(arr[i]);
//             }
//         }
//     }
//     return arr2;
// }
// console.log(intersection(arr,arr1));


// console.log("2"-"2");// 0
// console.log("2"-2);// 0
// console.log(2-"2");// 0


// str1="Raj"
// str2="Developer"
// str=""

// for(let i=0;i<str1.length;i++){
//     str=str+str1[i]+str2[i]
// }
// console.log(str);

// let n=str1.length,m=str2.length;
// let i=0,j=0;
// while(i<n && j<m){
//     str=str+str1[i];
//     str=str+str2[j];
//     i++;
//     j++;
// }
// if(i==n){
//     while(j<m){
//         str=str+str2[j];
//         j++;
//     }
// }
// if(j==m){
//     while(i<n){
//         str=str+str1[i];
//         i++;
//     }
// }
// console.log(str);

// const arr=[1,2,3,4,5,6].map((ele)=>ele=2);
// console.log(arr);

// const arr1=[1,2,3,4,5,6].map((ele)=>ele>8);
// console.log(arr1);

//impure function
// let n=0;
//     function a(){
//         n++;
//         return n;
//     }
//     console.log(a());
//     console.log(a());
    