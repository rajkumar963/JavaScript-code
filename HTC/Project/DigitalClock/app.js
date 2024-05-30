const clock= document.getElementById('clock')
//const clock=document.querySelector('#clock')
const day= document.getElementById('day')
const date= document.getElementById('date')
const month= document.getElementById('month')



setInterval(() => {
    let date = new Date();
   // console.log(date.toLocaleTimeString());

     
     month.innerHTML = date.toLocaleDateString();   
     date.innerHTML = date.toLocaleDateString();
     clock.innerHTML = date.toLocaleTimeString();

}, 1000);
