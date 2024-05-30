const form=document.querySelector("form");

form.addEventListener("submit",function(event){
    event.preventDefault();


  const height=  parseInt(document.querySelector("#height").value);
  const weight=  parseInt(document.querySelector("#weight").value);

  const results=document.querySelector("#results");

  results.innerHTML = "";
  results.className = "";

  if(height===""||height<0||isNaN(height)){
   results.innerHTML=`Please Enter valid height ${height}`;
  }
  
  else if(weight===""||weight<0||isNaN(weight)){
    results.innerHTML=`Please Enter valid weight ${weight}`;
   }else{

    const bmi= (weight/(height*height)*10000).toFixed(2);
    results.innerHTML=`<h3>Your BMI is ${ bmi }</h3>`
   
   if(bmi<18.6){
    results.classList.add("under weight");
   }
   else if(bmi>=18.6 && bmi<=24.9){
    results.classList.add("normal weight");
   }
   else{
    results.classList.add("over weight");
   }
}


})