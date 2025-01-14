function showAlert(event) {
    alert("You clicked: " + this.tagName);
    event.stopPropagation();
}


const changeColor = document.querySelector(".grandpa");  // Selects the element with class 'grandPa'
const changeColor1 = document.querySelector(".parent");   // Selects the element with class 'parent'
const changeColor2 = document.querySelector(".child");    // Selects the element with class 'child'


changeColor.addEventListener("click", () =>
    alert('Grandpa clicked'),
true
);


changeColor1.addEventListener("click", () =>
    alert('parents clicked'),
true  
);

changeColor2.addEventListener("click", () =>
    alert('child clicked'),
true
    
);