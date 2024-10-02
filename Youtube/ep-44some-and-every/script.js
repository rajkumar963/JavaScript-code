const evenNumbers = [0, 2, 10, 4, 61, 8]


// const result = evenNumbers.some((num, i) => {
//     if(num % 2 === 1) {
//         console.log(i);
//     }
//     return num % 2 === 1
// })



const result = evenNumbers.every((num) => {
    //debugger
    return num % 2 === 0;
})


//Example of some
const num1 = [1, 2, 3, 4, 5];
const hasEvenNumber = num1.some(function(number) {
  return number % 2 === 0;
});

console.log(hasEvenNumber); // Output: true (because 2 and 4 are even)


//Example of every
const num = [2, 4, 6, 8];
const allEven = num.every(function(number) {
  return number % 2 === 0;
});

console.log(allEven); // Output: true (because all numbers are even)


