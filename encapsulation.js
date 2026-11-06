class CustomerMember {
    #id;
    name;
    tier;
    #nik;
    #balance;

    constructor ({
       id, name,tier, nik, balance 
    }) {
        this.#id = id;
        this.name = name
        this.#nik = nik;
        this.#balance = balance;
        this.tier = tier;
    }

    getMaskedNik(){
        const nikStr = String(this.#nik);
        return this.#nik ? `****-****-****-${nikStr.slice(-4)}` : null;
    }

    topup(amount){
        if (amount <= 0){
            throw new Error ("top up harus lebih dari 0") 
        }
        this.#balance += amount;

        if (this.#balance >= 100000 && this.tier === "Silver") {
            this.tier = "Gold";
        }
    }

    withDraw(amount){
        if (this.#balance < amount) {
            throw new Error ("saldo anda tidak mencukupi");
        }
        this.#balance -= amount;
    }

    getTier() {
        return this.tier;
    }

    getNama() {
        return this.nama;
    }

    getBalance(){
        return this.#balance;
    }
}

const customerDama = new CustomerMember({
    id: 1,
    name: "dama",
    tier: "Silver", 
    nik: 1234567891067825,
    balance: 100000000,
});
console.log(customerDama.getBalance());
console.log(customerDama.getMaskedNik());
console.log(customerDama.topup(1000));
console.log(customerDama.getBalance());