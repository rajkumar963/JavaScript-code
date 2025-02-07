const passwordbox=document.getElementById("password");
const length=8;

const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase="abcdefghijklmnopqrstuvwxyz";
const numbers="1234567890";
const symbols="!@#$%^&*";

const allChars=uppercase+lowercase+numbers+symbols;

function createPassword(){
    let password="";

    password+=uppercase[Math.floor(Math.random()*uppercase.length)];
    password+=lowercase[Math.floor(Math.random()*lowercase.length)];
    password+=numbers[Math.floor(Math.random()*numbers.length)];
    password+=symbols[Math.floor(Math.random()*symbols.length)];

    // for(let i=0;i<length;i++){
    //     password+=allChars[Math.floor(Math.random()*allChars.length)];
    // }
    while(length>password.length){
        password+=allChars[Math.floor(Math.random()*allChars.length)];
    }
    passwordbox.value=password;
    
}