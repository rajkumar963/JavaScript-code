//const h1 = document.querySelector('h1')
//const container = document.querySelector('.container')
// const firstImage = document.querySelector("img")

//const paragraph = document.createElement('p')
// paragraph.innerText = 'Hello'
// paragraph.classList.add('my-para')

// container.append(paragraph)

// container.appendChild(h1)
// container.appendChild(h1.cloneNode(true))

// for (let i = 1; i <= 100; i++) {
//   const newImg = document.createElement('img')
//   newImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`
//   container.append(newImg)
// }

// const newImage = document.createElement('img')

// newImage.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png`

// container.append(newImage)


const ele=document.querySelector('.container')
const image=document.createElement('img')
 image.src="https://img.freepik.com/free-photo/brazilian-man-having-guarana-drink-outdoors_23-2150765647.jpg?ga=GA1.1.856026252.1735303750"
 ele.appendChild(image)

 const text=document.createElement('p')
 text.innerText="hello world"
 ele.appendChild(text)


const btn=document.createElement('button')
btn.innerText="Submit"
btn.id="submit";
btn.classList.add('btn')
ele.appendChild(btn)
