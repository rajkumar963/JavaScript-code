const image = document.querySelector('img')
const button = document.querySelector('button')

button.addEventListener('click', () => {
  const xhr = new XMLHttpRequest()

  xhr.responseType = 'json'

  xhr.addEventListener('load', () => {
    image.src = xhr.response.message
    console.log(xhr);
  })

  // xhr.onload = () => {
  //   image.src = xhr.response.message
  //   console.log(xhr)
  // }

  xhr.open('GET', 'https://dog.ceo/api/breeds/image/random')
  xhr.send()
})

const blockingBtn=document.querySelector(".BlockingBtn");
blockingBtn.addEventListener("click",()=>{
    const startTime=Date.now();
    let currentTime=startTime;
    while(startTime+4000>currentTime){
        currentTime=Date.now();
        //console.log(currentTime);
        
    }
})
