class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`Username; ${this.username}`);
    }
    
   static createdId(){
        return `123`
    }
}

const khem = new User("Khem")
//console.log(khem.createId())


class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email

    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe();