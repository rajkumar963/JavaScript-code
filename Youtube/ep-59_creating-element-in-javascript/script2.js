const container = document.querySelector('.container')

for(let i = 1; i <= 100; i++) {
    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')

    const newImage = document.createElement('img')
    newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`

    const paragraph = document.createElement('p')
    paragraph.innerText = i

    imgContainer.append(newImage, paragraph)
    container.append(imgContainer)
}

// let myHTML = ``

// for (let i = 1; i <= 100; i++) {
//   myHTML += `
//     <div class="img-container">
//         <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png">
//         <p>${i}</p>
//     </div>
//     `
// }

// container.innerHTML = myHTML

// for(let i=0;i<=100;i++){
//   const imge=document.createElement('img')
//   imge.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmbBf2__Up-seyHml5280LIVUjPbGJ-tYVvw&s'
//   container.append(imge,i)
// }