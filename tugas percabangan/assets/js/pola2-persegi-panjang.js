function tampilkanPersegiPanjang(jumlahBaris = 4, jumlahKolom = 8) {
  for (let baris = 0; baris < jumlahBaris; baris++) {
    console.log("* ".repeat(jumlahKolom).trimEnd());
  }
}

tampilkanPersegiPanjang();