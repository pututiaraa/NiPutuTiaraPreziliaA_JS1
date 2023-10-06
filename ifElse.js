//Contoh Program If Else
//Program Menentukan Status Nilai Kuis Mahasiswa

var nama = "Ni Putu Tiara";
var npm = "2115061006";
var nilai = 80;

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
