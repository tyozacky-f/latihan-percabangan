function tampilkanBelahKetupat(tinggiBagian = 4) {
  for (let baris = 1; baris <= tinggiBagian; baris++) {
    const spasi = " ".repeat(tinggiBagian - baris);
    const bintang = "* ".repeat(baris * 2 - 1).trimEnd();
    console.log(spasi + bintang);
  }

  for (let baris = tinggiBagian - 1; baris >= 1; baris--) {
    const spasi = " ".repeat(tinggiBagian - baris);
    const bintang = "* ".repeat(baris * 2 - 1).trimEnd();
    console.log(spasi + bintang);
  }
}

tampilkanBelahKetupat();