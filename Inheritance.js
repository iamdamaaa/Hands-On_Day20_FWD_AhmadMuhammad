class Hewan {
    constructor(id, name, age){
        this.id = id; 
        this.name = name;
        this.age = age;
    }

    suara(){
        console.log('suara umum');
    }

    bergerak(){
        console.log('saya sedang bergerak')
    }
}

class Kucing extends Hewan{
    suara(){
        console.log('meong');
    }
}

class Anjing extends Hewan{
    suara(){
        console.log('guk-guk');
    }
}

const kucing1 = new Kucing(1, 'caty', 1);
kucing1.suara();
kucing1.bergerak();
console.log(kucing1.name);