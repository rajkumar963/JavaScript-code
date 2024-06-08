const promis1=new Promise(function(resolve,reject){
    setTimeout(() => {
       // console.log("task is comleted");
        resolve();
    }, 1000);
})

promis1.then(function(){
   // console.log("promis is resolved");
})


// new Promise(function(resolve,reject){
//     setTimeout(() => {
//         console.log("task2 is comleted");
//         resolve();
//     }, 1000);
// }).then(function(){
//     console.log("promis2 is resolved");
// })

// const promis3=new Promise(function(resolve,reject){
//     setTimeout(() => {
//        resolve({username:"prince",email:"scientistindia369@gmailcom"});
//     }, 1000);
// })
// promis3.then(function(user){
//    // console.log(user);
// })

const promis4=new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error=false;
        if(!error){
            resolve({username:"prince",email:"prince@gmailcom"});
        }else{
            reject("ERROR:something went wrong");
        }
     },1000)
})

promis4
  .then((user) => {
    // console.log(user);
    return user.username;
  })
  .then((username) => {
    // console.log(username);
  })
  .catch((error) => {
    // console.log(error);
  })
  .finally(() => {
    //console.log("the promise isresolve or rejected");
  })


  const promis5=new Promise(function(resolve,reject){
     setTimeout(()=>{
        let error=true;
        if(!error){
            resolve({username:"javascript",email:"javascript@gmailcom"});
        }else{
            reject("ERROR:JS went wrong");
        }
  },1000)
 })

 async function getuser(){
    try{
        const res=await promis5;
    //console.log(res);
    }catch(error){
        //console.log(error);
    }
 }
 getuser()


//  async function getAllUsers(){
//    try {
//     const response=await fetch('https://jsonplaceholder.typicode.com/users')
//     const data= await response.json()
//     console.log(data);
    
//    } catch (error) {
//     console.log(error);
//    }
//  }
//  getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response )=>{
    return response.json()
 })
  .then(data => {console.log(data)
  })
  .catch((error )=> {console.log(error)
  })