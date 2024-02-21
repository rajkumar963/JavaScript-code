// let para1=document.createElement("p");
// para1.innerText="Hey I'm red!!";
// document.querySelector("body").append(para1);

// para1.classList.add("red");

// let h3=document.createElement("h3");
// h3.innerText="Hey I'm blue h3!!";
// document.querySelector("body").append(h3);

// h3.classList.add("blue");

let btns=document.querySelectorAll("button");
//console.dir(btns);
// btn.onclick=function(){
//     console.log("button was clicked");
//     alert("button was clicked");
// };

// for( btn of btns){
//     btn.onclick=sayHello;
//     btn.onmouseenter=function(){
//         console.log("You Enter button");
//     };
//     console.dir(btn);

// }
// function sayHello() {
// alert("Hello!");
// }


// let btn=document.querySelector("button");

//  btn.addEventListener("click",function(){
// //     // console.log("generate random color");

//     let h3=document.querySelector("h3");
//     let randomColor=getRandomColor();
//     h3.innerText=randomColor;

//     let div= document.querySelector("div");
//     div.style.backgroundColor= randomColor;

//     console.log("color update");
// });
// function getRandomColor(){
//     let red=Math.floor(Math.random()*255);
//     let green=Math.floor(Math.random()*255);
//     let blue=Math.floor(Math.random()*255);
    
//     let color=`rgb(${red},${green},${blue})`;
//     return color;
// }


// let inp=document.querySelector("input");
// inp.addEventListener("keydown",function(event){
//     console.log("key=",event.key);
//     console.log("code=",event.code);
//     console.log("key was pressed");
// });



// let inp=document.querySelector("input");
//  inp.addEventListener("keydown",function(event){
//     console.log("code=",event.code);
//     if(event.code=="ArrowUp"){
//         console.log("charactor move forward");
//     }else if(event.code=="Arrowdown"){
//         console.log("charactor move backward");
//     }else if(event.code=="Arrowleft"){
//         console.log("charactor move left");
//     }else if(event.code=="Arrowright"){
//         console.log("charactor move right");
//     }
// });




let form=document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    
    let user=document.querySelector("#user");
    let password=document.querySelector("#password");
    //console.dir(inp);
    console.log(user.value);
    console.log(password.value);
});