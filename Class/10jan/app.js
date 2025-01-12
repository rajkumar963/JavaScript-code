const changeColor = document.querySelector(".grandpa");  // Selects the element with class 'grandPa'
const changeColor1 = document.querySelector(".parent");   // Selects the element with class 'parent'
const changeColor2 = document.querySelector(".child");    // Selects the element with class 'child'

// Event listener for 'grandPa' element
changeColor.addEventListener("click", () =>
    alert('Grandpa clicked'),
true

);

// Event listener for 'parent' element
changeColor1.addEventListener("click", () =>
    alert('parents clicked'),
true
   
);

// Event listener for 'child' element
changeColor2.addEventListener("click", () =>
    alert('child clicked'),
true
    
);