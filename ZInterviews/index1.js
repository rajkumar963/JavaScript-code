// console.log("hello">9);
// console.log("hello"<9);
// console.log("8">5);

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
function greet() {
    console.log("Hello!");
}
greet();  // ✅ You can call it even before the definition

//Function Expression
const hello = function () {
    console.log("Hello!");
};
hello();

// Feature	           Function Declaration 	Function Expression
// Hoisted	             ✅ Yes	                   ❌ No
// Requires Name	    ✅ Yes	                   ❌ Optional
// Can Be Anonymous	    ❌ No	                    ✅ Yes
// Call Before Defined	✅ Yes	                   ❌ No

