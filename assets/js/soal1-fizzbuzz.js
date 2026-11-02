function fizzBuzz(batas = 100) {
  for (let angka = 1; angka <= batas; angka++) {
    if (angka % 15 === 0) {
      console.log("FizzBuzz");
    } else if (angka % 3 === 0) {
      console.log("Fizz");
    } else if (angka % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(angka);
    }
  }
}

fizzBuzz();