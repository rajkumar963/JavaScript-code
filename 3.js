 
//  let smallImage=document.getElementsByClassName("oldImg");


// for(let i=0;i<smallImage.length;i++);
// {
//     console.dir(smallImage[i]);
// }


// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));
//console.dir(document.querySelector("div a"));


let links=document.querySelectorAll(".box a");
//   for(link of links){
//     link.style.color="green";
//   }
for(let i=0;i<links.length;i++){
    links[i].style.color="purple";
}