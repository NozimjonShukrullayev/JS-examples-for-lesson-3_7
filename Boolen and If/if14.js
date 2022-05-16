// If14
// n ikki xonali son berilgan uning raqamlar joyini almashtirganda hosil
// bo`lgan son n sonidan kichik yoki teng bo`lsa True aks holda False
// qaytaradigan dastur tuzing.
// Intput: n. ( Buntun son).
// Output: Natijani chiqaring.

// Input   Output
// 27      False
// 99      True
// 43      True

let n = 27, natija;
let onlik = Math.floor(n / 10);
let birlik = n % 10;
let yangiSon = Number(`${birlik}${onlik}`);

if(yangiSon <= n) {
  natija = true;
} else {
  natija = false;
}

console.log(natija);