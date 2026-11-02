function konversiRole(kode) {
  switch (kode) {
    case "A":
      console.log("Admin");
      break;
    case "U":
      console.log("User");
      break;
    default:
      console.log("Guest");
  }
}

konversiRole("A"); // Admin
konversiRole("U"); // User
konversiRole("X"); // Guest