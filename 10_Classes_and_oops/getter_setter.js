//In getter or setter if we don't use _ than it 
//will lead to race condition which will create 
//exceeds call stack value condition error

class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email= value
    }

    get password(){
        return `${this._password}khem`
    }
    
    set password(value){
        this._password = value
    }
}

const khem = new User("khem@gmail.com","ABcdT")
console.log(khem.password);
console.log(khem.email);

