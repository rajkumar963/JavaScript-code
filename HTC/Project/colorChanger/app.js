const btn=document.querySelectorAll(".button");
const body=document.querySelector("body");

btn.forEach((button)=>{
    console.log(button);

    button.addEventListener("click",(e)=>{
        console.log(e);
        console.log(e.target);
        if(e.target.id=="grey"){
            body.style.backgroundColor="grey";//e.target.id;
        }
        if(e.target.id=="white"){
            body.style.backgroundColor="white";//e.target.id;
        }
        if(e.target.id=="blue"){
            body.style.backgroundColor="blue";//e.target.id;
        }
        if(e.target.id=="yellow"){
            body.style.backgroundColor="yellow";//e.target.id;
        }
        if(e.target.id=="red"){
            body.style.backgroundColor="red";//e.target.id;
        }
        if(e.target.id=="green"){
            body.style.backgroundColor="green";//e.target.id;
        }
        if(e.target.id=="pink"){
            body.style.backgroundColor="pink";//e.target.id;
        }
    })
})