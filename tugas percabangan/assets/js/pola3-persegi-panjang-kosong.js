function tampilkanPersegiPanjangKosong(jumlahBaris = 5, jumlahKolom = 8) {
  for (let baris = 0; baris < jumlahBaris; baris++) {
    const isiBaris = Array.from({ length: jumlahKolom }, (_, kolom) => {
      return baris === 0 || baris === jumlahBaris - 1 || kolom === 0 || kolom === jumlahKolom - 1
        ? "*"
        : " ";
    });

    console.log(isiBaris.join(" "));
  }
}

tampilkanPersegiPanjangKosong();