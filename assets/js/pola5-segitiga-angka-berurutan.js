function tampilkanSegitigaAngkaBerurutan(tinggi = 4) {
  let angkaBerikutnya = 1;

  for (let baris = 1; baris <= tinggi; baris++) {
    const angkaBaris = [];

    for (let kolom = 0; kolom < baris; kolom++) {
      angkaBaris.push(angkaBerikutnya);
      angkaBerikutnya++;
    }

    const teksBaris = angkaBaris.join("");
    const lebarMaksimum = String((tinggi * (tinggi + 1)) / 2).length;
    const spasiAwal = Math.max(0, Math.floor((lebarMaksimum - teksBaris.length) / 2));
    console.log(" ".repeat(spasiAwal) + teksBaris);
  }
}

tampilkanSegitigaAngkaBerurutan();