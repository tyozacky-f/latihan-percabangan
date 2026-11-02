function tampilkanSegitigaKosong(tinggi = 5) {
  for (let baris = 1; baris <= tinggi; baris++) {
    const spasiAwal = " ".repeat(tinggi - baris);

    if (baris === 1) {
      console.log(spasiAwal + "*");
    } else if (baris === tinggi) {
      console.log("* ".repeat(tinggi * 2 - 1).trimEnd());
    } else {
      const spasiTengah = " ".repeat(baris * 2 - 3);
      console.log(spasiAwal + "*" + spasiTengah + "*");
    }
  }
}

tampilkanSegitigaKosong();