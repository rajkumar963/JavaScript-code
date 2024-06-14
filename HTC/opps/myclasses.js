//ES6

class user{
    constructor(name,email,password){
        this.name=name; 
        this.email=email;
        this.password=password;
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
      return `${this.name.toUpperCase()}`
    }
}

const chai=new user("prince","prince@kumar","prince123")
console.log(chai.encryptPassword())
console.log(chai.changeUserName())

//behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@gmail.com", "123")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());