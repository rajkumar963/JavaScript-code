// const user={
//     name:"Rajkumar",
//     age:20,
//     //city:"Ranchi"
// }
// //console.log(user.address.city)

// try{
//     console.log(user.address)
// } catch (error) {
//     console.dir(error.message);
// } finally{
//     console.log("This is finally block")
// }
// //console.log(5+9)


async function makeAsyncRequest() {
    try {
      const url =
        'https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=2000'
      const response = await fetch(url)
      const data = await response.json()
      console.log(data)
      return data
    } catch (err) {
      console.log(err)
    }
  }
  
  makeAsyncRequest()