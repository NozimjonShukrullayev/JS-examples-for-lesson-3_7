// If20
// Besh xonali n butun soni berilgan shu son raqamlaring eng kattasini va
// turgan indexini(o`rnini) qaytaradigan dastur tuzing.
// Input: n . ( Butun son ).
// Output: Natijani chiqaring.

// Input   Output
// 56987   9  3
// 36054   6  4
// 12345   5  1

let n = 56987, natija;
let onMinglik = Math.floor(n / 10000);
let minglik = Math.floor((n / 1000) % 10);
let yuzlik = Math.floor((n % 1000) / 100);
let onlik = Math.floor((n % 100) / 10);
let birlik = Math.floor(n % 10);

if (onMinglik <= birlik && minglik <= birlik && yuzlik <= birlik && onlik <= birlik) {
  natija = (`${birlik} 1`);
} else if(onMinglik <= onlik && minglik <= onlik && yuzlik <= onlik) {
  natija = (`${onlik} 2`);
} else if(onMinglik <= yuzlik && minglik <= yuzlik) {
  natija = (`${yuzlik} 3`);
} else if(onMinglik <= minglik) {
  natija = (`${minglik} 4`);
} else {
  natija = (`${onMinglik} 5`);
}

console.log(natija);