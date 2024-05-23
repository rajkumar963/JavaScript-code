const user = {
    username: "Tom",
    price: 999,

    welcomeMessage: function() {
        //console.log(`${this.username} , welcome to website`); //This means:-- current context ko refer karega
       // console.log(this);
    }

}

//  user.welcomeMessage()
//  user.username = "sam"
//  user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

 //chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


 //chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

 //const addTwo = (num1, num2) =>  num1 + num2

 //const addTwo = (num1, num2) => ( num1 + num2 ) //most uses in react

const addTwo = (num1, num2) => ({username: "hitesh"})


//console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

//####################################################################################################

// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);//those function execution immediately and  globe scope ke pollution se bachne ke liye or uske variable ko hatane ke liye
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')
 
