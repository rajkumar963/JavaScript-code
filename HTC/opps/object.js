function multipleBy5(num){
  return num*5;
}
multipleBy5.power=2;
console.log(multipleBy5(5))
console.log(multipleBy5.power)
console.log(multipleBy5.prototype)

function createUser(name,age){
    this.name=name;
    this.age=age;
}

createUser.prototype.increament=function(){
    this.age++;
}
createUser.prototype.printme=function(){
    console.log(this.name,this.age)
}
let user=new createUser("raj",20)
const user1=new createUser("kumar",21)
user.printme()
user1.printme()


