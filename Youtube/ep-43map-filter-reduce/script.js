// const months = ['January', 'February', 'March', 'April', 'May', 'December']

// // const capitalMonths = months.forEach((month, index) => {
// //     console.log(index + 1, month)
// //     return month.toUpperCase()
// //   })

// // const capitalMonths = months.map((month, index, array) => {
// //     //console.log(index + 1, month)
// //     //console.log(array);
// //     return month.toUpperCase()
//  // })

// // const filteredMonths = months.filter((month, index, array) => {
// //     console.log(month.toLocaleLowerCase())
// //     // console.log(array);
// //     return month.toLocaleLowerCase()
// //   })

// // const filteredMonths1 = months.filter((month, index, array) => {
// //     console.log(month.toLocaleLowerCase().includes('m'))
// //      //console.log(array);
// //     return false
// //   })

// const students = [
//     {
//         name: 'Akash',
//         age: 21,
//     },
//     {
//         name: 'Adarsh',
//         age: 17,
//     },
//     {
//         name: 'Amir',
//         age: 18,
//     },
//     {
//         name: 'Raman',
//         age: 23,
//     },
//     {
//         name: 'Nidhi',
//         age: 16,
//     },
// ]

// const adultStudents = students.filter((student) => {
//     return student.age >= 18
// }).map((student) => {
//     return student.name
// }).filter((student) => {
//     return student.includes('A')
// })


// const filteredMonths = months.filter((month, index, array) => {
//      //return month.length ===5;
//      return month.toLowerCase().includes('a')
//   })

//   const adult=students.filter((student)=>{
//     return student.age>=18;
//   }).map((student)=>{
//     return student.name
//   })


//Map()
// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map(num => num * 3);
// console.log(doubled);                        // Output: [2, 4, 6, 8, 10]

//filter()
const num=[1,2,3,4,5,6,7,8,9,10]
const even=num.filter(num=>num%2===0);
console.log(even);


const n=[1,2,3,4,5,6,7,8,9,10]
const sum1=n.reduce((total,curr)=>{
    return total+curr;
},10)
console.log(sum1);