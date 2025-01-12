const myDate = new Date()

//console.log(myDate)

// myDate.setYear(1) Deprecated




// function getFullDayName(date) {
//     return date.toLocaleDateString('en-GB', { weekday: 'long' })
//   }
  
//   function getFullMonthName(date) {
//     return date.toLocaleDateString('en-GB', { month: 'long' })
//   }

  myDate.setFullYear(2014)
  myDate.setMinutes(12)
 myDate.setSeconds(10)
 myDate.setMilliseconds(60)
myDate.setTime(1734498696479)
// myDate.setYear(2024)

console.log(myDate)