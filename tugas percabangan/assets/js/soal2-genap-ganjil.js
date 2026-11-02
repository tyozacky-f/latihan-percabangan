function cekGenapGanjil(angka) {
  return angka % 2 === 0 ? "Genap" : "Ganjil";
}

console.log(`8 adalah ${cekGenapGanjil(8)}`);
console.log(`7 adalah ${cekGenapGanjil(7)}`);