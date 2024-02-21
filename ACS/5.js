// function one(){
//     return 1;
// }
// function two(){
//     return one()+one();
// }
// function three(){
//     let ans=two()+one();
//     console.log(ans);
// }
// three();

//  h1=document.querySelector("h1");
//  function changecolor(color,delay,nextColorChange){
//  setTimeout(()=>{
//     h1.style.color=color;
//  },delay);}
//  changecolor("red",1000);
//  changecolor("green",2000);
//  changecolor("purple",3000);


// function savetoDb(data,success,failure){
// let internetSpeed=Math.floor(Math.random()*10)+1;
// if(internetSpeed>4){
//     success();
// }else{
//     failure();
// }
// }
// savetoDb("apna college",()=>{
//     console.log("success: your data was saved");
// },
// ()=>{
//     console.log("failure: week connection. your data not saved");
// });
    
    // let request=savetoDBPromise("Anpa college");
    // request
    // .then(()=>{
    //     console.log("promise1 was resolved");
    //     request
    //     savetoDBPromise("hello world");
    // })
    // .catch(()=>{
    //     console.log("promise was rejected");
    // });

    //  async function greet(){
    //     throw new Error("error");
    //     return "hello";
    // }

    // let demo=async ()=>{
    //     return 5;
    // }

    // let jsonRes='{"fact":"The life expectancy of cats has nearly doubled over the last fifty years.","length":73}';
    // let validRes=JSON.parse(jsonRes);
    // console.log(validRes.fact);

    // let student={
    //     name:"Raj",
    //     marks:90,
    //     age:20,
    // };


//     let btn=document.querySelector("button");
//     btn.addEventListener("click",async()=>{
//        let fact=  await getFacts();
//     //    console.log(fact);
//        let p=document.querySelector("#result");
//        p.innerText=fact;
//     }
//     );

//     let url="https://catfact.ninja/fact";
    
// async function getFacts(){
//         try{
//             let res=await axios.get(url);
//            return res.data.fact;
//         }
//         catch(e){
//             console.log(e);
//             console.log("error -",e);
//             return "something went wrong";
//         }
        
  //  }

    let url2="https://dog.ceo/api/breeds/image/random";
    let btn=document.querySelector("button");
    btn.addEventListener("click",async()=>{
    //    let fact=  await getFacts();
    // //    console.log(fact);
    //    let p=document.querySelector("#result");
    //    p.innerText=fact;
    
    });
    
async function getImage(){
        try{
            let res=await axios.get(url2);
            console.log(res.data.message);
        //    return res.data.fact;
        }
        catch(e){
            console.log(e);
            console.log("error -",e);
            return "no image found";
        }
    }