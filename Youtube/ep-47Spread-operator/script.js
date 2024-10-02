const num =[1,2,3,4,5]
const newNum = [ 5,6,7,8]
const numname="Rajkumar"
const newarr = [...num, ...newNum, ...numname]
console.log(newarr)

const user = {
    name:"Rajkumar",
    age:18,
    city:"Ranchi"
}

const updateUser={...user,state:"Jharkhand"}

console.log(updateUser)


function add(){
    let sum=undefined
    for(let i=0;i<arguments.length;i++){
        sum=sum+arguments[i]
}
    return sum
}
 