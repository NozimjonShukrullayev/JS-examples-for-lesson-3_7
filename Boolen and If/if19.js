// If19
// Besh xonali n butun soni berilgan shu son raqamlarining eng kattasini
// qaytaradigan dastur tuzing.
// Input: n. ( Butun son ).
// Output: Natijani chiqaring.

// Input   Output
// 56987   9
// 36054   6
// 12345   5

let n = 56987, natija;
let onMinglik = Math.floor(n / 10000);
let minglik = Math.floor((n / 1000) % 10);
let yuzlik = Math.floor((n % 1000) / 100);
let onlik = Math.floor((n % 100) / 10);
let birlik = Math.floor(n % 10);

if (onMinglik <= birlik && minglik <= birlik && yuzlik <= birlik && onlik <= birlik) {
  natija = birlik;
} else if(onMinglik <= onlik && minglik <= onlik && yuzlik <= onlik) {
  natija = onlik;
} else if(onMinglik <= minglik && minglik <= yuzlik) {
  natija = yuzlik;
} else if(onMinglik <= minglik) {
  natija = minglik;
} else {
  natija = onMinglik;
}

// console.log(Math.max(onMinglik, minglik, yuzlik, onlik, birlik));
console.log(natija);