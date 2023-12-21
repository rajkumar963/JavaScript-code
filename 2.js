// let student ={
//     name:"Rajkumar",
//     age:20,
//     mark:90.4
// };
// // let std =["Raj",20,90];



// let max=prompt("Enter the max number");
// const random= Math.floor(Math.random()*max)+1;

// let guess=prompt("guess the no.");
// while(true){
//     if(guess=="quit"){
//         console.log("user quit");
//         break;
//     }
//     if(guess==random){
//         console.log("you are right!  random no.was",random);
        
//         break;
//     }else
//     {
//      guess=   prompt("your guess is wrong.please try again!");
//     }
// }
// //console.log(random);10

// function hello(){
//     console.log("hello");
// }
// hello();hello();hello();hello();



// function adult(){
//     let age=18;
//     if(age>=18){
//         console.log("adult");
//     }else{
//         console.log("not adult");
//     }
// }
// adult();

// function diseroll(){
//     let rand=Math.floor(Math.random()*6)+1;
//     console.log(rand);
// }
// diseroll();



//  function hello(int){
//        console.log(int);}
//        hello("rajkumar");


//  function getsum(n){
//     let sum=0;
//       for(let i=1;i<=n;i++){
//         sum+=i;
//         console.log(sum);
//       }
//         return sum;
//   }

// getsum(10);


//  {
//      var a=25;
//     } 
//     console.log(a);



// let str =["hii","Raj","welcome","to the ","PWIOI"];
// function concat(str){
//     let result="";
//     for(let i=0;i<str.length;i++){
//         result+=str[i];
//concat(str);
//     }
//     return result;
    
// }
// concat(str);



// function outerfunc(){
//     let x=5;
//     let y=7;
//     function innerfunc(){
//         console.log(x);
//     }
//     innerfunc();
// }


// let name="Rajkumar";
// let x=5;
// let sum=function(a,b){
//     return a+b;
// }
// let hello= function(){
//     console.log("log");
//}


// let greet= function(){
//     console.log("hello");
// }

// greet();



// function multipleGreet(func,count){
// for(let i=1;i<=count;i++){
//     func();
// }
// }

    
// let greet= function(){
//     console.log("hello");
// }

// multipleGreet(greet,6);



// let odd=function(n){
// console.log(!(n%2==0));    
// }

// let even=function(n){
//     console.log((n%2==0));    
//     }

//     function oddOrEvenFactory(request){
//   if (request=="odd"){
//     let odd=function(n){
//         console.log(!(n%2==0));

//   }
//   return odd;
//     }else if(request=="even"){
//         let even=function(n){
//             console.log((n%2==0));    
//             }
//             return even;
//     }
//     else{
//         console.log("wrong request");
//     }
// }


//      let request="odd";




// const student={
//     name:"rajkumar",
//     age:20,
//     math:50,
//     eng:30,
//     phy:56,
//     getAvg(){
//          console.log(this);
//         let avg=(this.math+this.phy+this.eng)/3;
//         console.log(avg);
//     }
//     }


// console.log("hello;");
// console.log("hello;");
// //let a=5;
// try{console.log(a);
// }catch(err){
//     console.log("caught an error. a is  not defined ");
//      console.log(err);
// }

// console.log("hello 2;");
// console.log("hello2;");



// const sum=(a,b)=>{
//     console.log(a+b);
// };

// const cube=(n)=>{
//     return n*n*n;
// };

// const mul=(c,b)=>(c*b);


// console.log("hi hello");
// setTimeout(()=>{
//     console.log("Apna pwioi");},10000);
//     console.log("Welcome");


    // setInterval(()=>{
    //     console.log("Apna pwioi");},2000);
    //     console.log("Welcome");

    // for stop :-id bana ke clear(id) likhana hai...


    // const student={
    //          name:"rajkumar",
    //        age:20,
    //          math:50,
    //         eng:30,
    //          phy:56,
    //          prop:this,
    //         getname: function(){
    //             return this.name;
    //         },};



    // let arr=[1,2,3,4,5];
    // let print=function(el){
    //     console.log(el);
    // }
    // arr.forEach(print);


  //   let arr=[{
  //     name:"raj",
  //     mark:82
  //   },
  //   {
  //     name:"prince",
  //     mark:85},
  //     {
  //       name:"raaj",
  //       mark:98}

  // ];
  // arr.forEach((student) =>{
  //   console.log(student.mark);

  // });


  // let num=[1,2,3,4,4];
  // let double=num.map((el)=>{
  //   return el*2;
  // });


  // let students=[{
  //       name:"raj",
  //       mark:82
  //     },
  //     {
  //       name:"prince",
  //       mark:85},
  //       {
  //         name:"raaj",
  //         mark:98}
  
  //   ];
  //   let gpa=students.map((el)=>
  //   {
  //     return el.mark/10;
  //   }
  //   ); 



  // let num=[1,2,3,4,5,5,6,7,8];
  // let even =num.filter((el)=>{
  //   return el%2==0});


  // let num=[2,3,4,5];
  // finalval=num.reduce((res,el)=>res+el);
  // console.log(finalval);


  // let arr=[1,2,34,4,,5,6,7,8];
  // let max=-1;
  // for(let i=0;i<arr.length;i++){
  //   if(max<arr[i]){
  //     max=arr[i];
  //   }
  // }
  // console.log(max);

  // let arr=[1,20,30,40,];
  // let ans=arr.every((el)=>el%10==0);
  // console.log(ans);


  // function sum(a=3,b){
  //   return a+b;
  // }


  // let arr=[1,2,3,4,5,6];
  // let obj1={...arr};
  // let str=['r','g','f','g','h','y'];
  // let obj2={...str};


  // function sum(...args){
  //   for(i=0;i<args.length;i++){
  //     console.log("you gave us",args[i]);
  //   }
  // }

  // function sum(...args){
  //   return args.reduce((sum,el)=>sum+el);
  // }


 // let name=["Raj","man","raju","stave","xyz","rty","hhf","wdef"];
  // let winner=name[0];
  // let runnerup=name[1];
  // let sdrunnerup=name[2];

//let [winner,runnerup,sdrunnerup,...others]=name;



