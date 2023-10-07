//Contoh Program If Else
//Program Menentukan Status Nilai Kuis Mahasiswa

var nama = "Ni Putu Tiara";
var npm = "2115061006";
var nilai = 80;

console.log("Hasil Program If Else:");
console.log("Nama   = " + nama);
console.log("NPM    = " + npm);
console.log("Nilai  = " + nilai);


if (nilai < 70 && nilai > 0) {
    console.log("Status = Tidak Lulus");
}
else if (nilai >= 70 && nilai <=100) {
    console.log("Status = Lulus");
 }
else {
    console.log("Status = Maaf, nilai tidak valid!")
}


//Contoh Program Nested If
//Perbandingan angka1 dan angka2

var angka1 = 5;
var angka2 = 3;

console.log(" ");
console.log("Hasil Program Nested If:");
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


//Contoh Program Switch Case

let month;
switch(new Date().getMonth()) {
    case 0:
        month = "January";
        break;
    case 1:
        month = "February";
        break;
    case 2:
        month = "March";
        break;
    case 3:
        month = "April";
        break;
    case 4:
        month = "May";
        break;
    case 5:
        month = "June";
        break;
    case 6:
        month = "July";
        break;
    case 7:
        month = "August";
        break;
    case 8:
        month = "September";
        break;
    case 9:
        month = "October";
        break;
    case 10:
        month = "November";
        break;
    case 11:
        month = "December";
        break;
}

console.log(" ");
console.log("Hasil Program Switch Case:");
console.log("This is " + month);


//Contoh Program While

var b = 0;

console.log(" ");
console.log("Hasil Program While:");
while (b < 10) {
    console.log("Ini perulangan ke-" + b);
    b++;
}


//Contoh Program do..while

let angka = 0;
const a = 5;

console.log(" ");
console.log("Hasil Program Do...While:");
console.log("Hasil perulangan: ")

do {
    console.log(angka);
    angka++;
} while(angka <= a);


//Contoh Program For Statement
console.log(" ");
console.log("Hasil Program For:");
console.log("Hasil perulangan dengan for : ");

for (let x = 0; x < 8; x++) {
    console.log("Ini perulangan ke-" + x);
}


//Contoh Program Function

let r = 2;

console.log(" ");
console.log("Hasil Program Function:");
function luasLingkaran() {
    luas = 3.14 * r * r;
    console.log("Luas Lingkaran = " + luas + " cm2");
}

luasLingkaran(r);




