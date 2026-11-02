function tampilkanSegitiga(tinggi = 4) {
  for (let baris = 1; baris <= tinggi; baris++) {
    console.log("* ".repeat(baris).trimEnd());
  }
}

tampilkanSegitiga();