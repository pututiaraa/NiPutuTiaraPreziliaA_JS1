//Contoh Program Nested If
//Perbandingan angka1 dan angka2

var angka1 = 5;
var angka2 = 3;

console.log("Angka 1 bernilai " + angka1);
console.log("Angka 2 bernilai " + angka2);
console.log("Kesimpulan:");

if (angka1 > angka2) {
    if (angka1%0 && angka2%0) {
        console.log("Angka ke-1 dan Angka ke-2 merupakan bilangan genap dimana Angka ke-1 lebih besar dari Angka ke-2");
    }
    else if (angka1%0 && angka2%1) {
        console.log("Angka ke- 1 adalah angka genap, Angka ke-2 adalah angka ganjil dimana Angka ke-1 lebih besar dari Angka ke-2");
    }
    else if (angka1%1 && angka2%0) {
        console.log("Angka ke- 1 adalah angka ganjil, Angka ke-2 adalah angka genap dimana Angka ke-1 lebih besar dari Angka ke-2");
    }
    else {
        console.log("Angka ke- 1 adalah angka ganjil, Angka ke-2 adalah angka ganjil dimana Angka ke-1 lebih besar dari Angka ke-2");
    }
} else if (angka1 < angka2) {
    if (angka1%0 && angka2%0) {
        console.log("Angka ke-1 dan Angka ke-2 merupakan bilangan genap dimana Angka ke-1 lebih kecil dari Angka ke-2");
    }
    else if (angka1%0 && angka2%1) {
        console.log("Angka ke- 1 adalah angka genap, Angka ke-2 adalah angka ganjil dimana Angka ke-1 lebih kecil dari Angka ke-2");
    }
    else if (angka1%1 && angka2%0) {
        console.log("Angka ke- 1 adalah angka ganjil, Angka ke-2 adalah angka genap dimana Angka ke-1 lebih kecil dari Angka ke-2");
    }
    else {
        console.log("Angka ke- 1 adalah angka ganjil, Angka ke-2 adalah angka ganjil dimana Angka ke-1 lebih kecil dari Angka ke-2");
    }
} else if (angka1 == angka2) {
    if (angka1%0 && angka2%0) {
        console.log("Angka ke-1 dan Angka ke-2 merupakan bilangan genap dimana Angka ke-1 sama dengan Angka ke-2");
    }
    else if (angka1%0 && angka2%1) {
        console.log("Angka ke- 1 adalah angka genap, Angka ke-2 adalah angka ganjil dimana Angka ke-1 sama dengan Angka ke-2");
    }
    else if (angka1%1 && angka2%0) {
        console.log("Angka ke- 1 adalah angka ganjil, Angka ke-2 adalah angka genap dimana Angka ke-1 sama dengan Angka ke-2");
    }
    else {
        console.log("Angka ke- 1 adalah angka ganjil, Angka ke-2 adalah angka ganjil dimana Angka ke-1 sama dengan Angka ke-2");
    }
}