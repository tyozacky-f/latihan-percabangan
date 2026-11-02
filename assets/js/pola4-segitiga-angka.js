function tampilkanSegitigaAngka(tinggi = 4) {
  for (let baris = 1; baris <= tinggi; baris++) {
    const angka = Array(baris).fill(String(baris)).join(" ");
    console.log(" ".repeat(tinggi - baris) + angka);
  }
}

tampilkanSegitigaAngka();