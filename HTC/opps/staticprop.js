class User{
    constructor(name){
        this.name=name
    }
    logme(){
        console.log(`username is ${this.name}`);
    }
     createId(){
        return Math.floor(Math.random()*1000)
    }
}
const user=new User("raj")
user.logme()
//console.log(user.createId())

class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
console.log(iphone.createId());
