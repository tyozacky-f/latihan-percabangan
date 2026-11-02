function tampilkanSegitigaJamPasir(tinggiBagian = 4) {
  for (let baris = tinggiBagian; baris >= 1; baris--) {
    const spasi = " ".repeat(tinggiBagian - baris);
    const bintang = "* ".repeat(baris * 2 - 1).trimEnd();
    console.log(spasi + bintang);
  }

  for (let baris = 2; baris <= tinggiBagian; baris++) {
    const spasi = " ".repeat(tinggiBagian - baris);
    const bintang = "* ".repeat(baris * 2 - 1).trimEnd();
    console.log(spasi + bintang);
  }
}

tampilkanSegitigaJamPasir();