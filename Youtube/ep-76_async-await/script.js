async function makeAsyncRequest() {
    const url = 'https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=2000'
    const response = await fetch(url)
    const data = await response.json()
    return data
  }
  
  makeAsyncRequest().then((data) => {
      console.log(data);
  })


// async function makeRequest() {
//     const url = 'https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=2000'
//     const response = await fetch(url)
//     response.then((res)=>{
//         res.json().then((data)=>{
//             console.log(data);
//         })
//         // console.log(res);
//     })
//     //console.log(response);
// }

// makeRequest()