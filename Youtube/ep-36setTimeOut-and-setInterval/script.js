// setTimeout(() => {
//     console.log("This message will appear after 2 seconds");
// }, 2000);  // 2000 milliseconds = 2 seconds




// let timerId = setTimeout(() => {
//     console.log("This will not run");
// }, 5000);

// clearTimeout(timerId);  // Cancels the timeout



//####################################################################################
// setInterval(() => {
//     console.log("This message appears every 1 second");
// }, 1000);  // 1000 milliseconds = 1 second




let intervalId = setInterval(() => {
    console.log("This will stop after 3 seconds");
}, 3000);

setTimeout(() => {
    clearInterval(intervalId);  // Stops the interval after 3 seconds
}, 9000);




//setTimeout('htt')//shows error
// setTimeout('console.log("hello")',2000)
// setTimeout(`console.log("hello") 
//     console.log("Raj")`,1000)


// setTimeout(`console.log("hello")`,1000)
// setTimeout(`console.log("ello")`,2000)
// setTimeout(raj(),3000)


// function raj(){
//     console.log("raj")
// }
  

// setTimeout(function() {
//     console.log('Hello, world!');
// }, 2000);

// setTimeout(function() {
//     console.log('namaste duniya!');
// }, 3000);

// clearTimeout(setTimeout(function() {
//     console.log('Hello, world!');
//     console.log('Hello, world!');   
// }),1000);

// function delayedFunction() {
//     console.log("This won't be executed due to clearTimeout");
// }

// let timeoutId = setTimeout(delayedFunction, 2000);

// // Cancel the setTimeout before it executes
// clearTimeout(timeoutId);

// console.log("Timeout canceled");

// function myFunction() {
//     console.log("Executing at regular intervals!");
// }

// let time = setInterval(myFunction,1000);

// // Stop the interval after 5 seconds    
// setTimeout(() => {
//     clearInterval(time);
// }, 5000);

