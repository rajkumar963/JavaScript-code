// const add1 = () => {
//   let sum = 0
//   for (let i = 0; i < arguments.length; i++) {
//     sum = sum + arguments[i]
//   }
//   return sum
// }

const add3 = function () {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
      sum = sum + arguments[i]
    }
    return sum
  }


  console.log(add3(1, 2, 3, 4, 5))


  const testArgs = () => {
    console.log(arguments); // Error: arguments is not defined
  };
  testArgs(1, 2, 3);
  
//Rest Parameters (...)
  function sum(...args) {
    return args.reduce((total, current) => total + current, 0);
  }
  
  console.log(sum(1, 2, 3)); // Output: 6
  console.log(sum(4, 5));    // Output: 9
  