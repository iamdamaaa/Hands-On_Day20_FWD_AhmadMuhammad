abstract class Bayar{

abstract pembayaran(): void;

}

class Qris extends Bayar {
    pembayaran(){
        console.log('pesanan ini dibayarkan menggunakan QRIS');
    }
}

class Transfer extends Bayar {
    pembayaran(){
        console.log('pesanan ini dibayarkan menggunakan Transfer');
    }
}

const qris1 = new Qris();
qris1.pembayaran();
