class customer {
    constructor(name, address, hobby){
        this.name = name;
        this.address = address;
        this.hobby = hobby;
    }

    sayHallo(){
        console.log(`halo ${this.name}`)
    }
}

const user1 = new customer("dama", "semarang");
user1.sayHallo();