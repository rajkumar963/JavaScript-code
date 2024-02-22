let x=10;// js can hold any type of data

                    //primitive data type:--
                    let y="raj";//string
                    let z=10;//number
                    let a=true;//boolean
                    let b=undefined;//undefined
                    let c=null;//null
                            //symbols

                    //non-primitive data type:--
                    //array
                    //object
// let ioi=[1,2,"raj","kumar"," ","hello" ]
// let obj={
//     name:"raj",
//     age:20,
//     mark:90,
//     city:"delhi",
//     country:""
// }
// console.log(obj,ioi,x)

                    //If ,else if , switch , for , while , do while
                    // ternary operator use for login  and logout then show login or logout

// let age=18
// if(age>=18){
//     console.log("eligible for voting");
// }else{
//     console.log("not eligible for voting");
// }

// let age=18
// switch(age){
//     case 18:console.log("eligible for voting");
//     break;
//     default:console.log("not eligible for voting");
// }

// let rain=true;
// rain ? console.log("take an umbrella") : console.log("dont take an umbrella")

//js is a call by value or call by reference

//function
    // function accountDetails(){
        
    // let name="raj";
    // let age=20;
    // let email="raj@kumar";
    // let city="delhi";
    // console.log(name,age,email,city);  
    // }
    // accountDetails();


    let totalBalance=10000;
    let user="UPI";
    let Withdraw=2000;

    function Account(user){
       if(Withdraw<=totalBalance){
        totalBalance=totalBalance-Withdraw
        console.log("withdraw successfully",totalBalance);
       }else{
        console.log("insufficient balance");
       }
        
    }

    if(user=="UPI"){
       Account()
    }
    if(user=="Bank"){
        Account()
    }
    if(user=="Netbanking"){
        Account()
    }
    if(user=="ATM"){
        Account()
    }