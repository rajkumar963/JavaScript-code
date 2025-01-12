const form=document.querySelector('form')
const input=document.querySelector('input')
const p=document.querySelector('p')

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const num=Number(input.value);
    const date=new Date(num);
   //console.log(date.toUTCString());

    local.innerHTML=date.toLocaleString('en-GB',{dateStyle:'full',timeStyle:'full'});
    utc.innerHTML=date.toUTCString();
    iso.innerHTML=date.toISOString();
})
