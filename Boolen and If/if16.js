// If16
// n butun sonining raqamlari yig`indisini toping.
// Input: n. ( Butun son. 0 < n < 10000 ).
// Output: Natijani chiqaring.

// Input    Output
// 45        9
// 345      12
// 8481     21

let n = 45, natija;
let minglik = Math.floor(n / 1000);
let yuzlik = Math.floor((n % 1000) / 100);
let onlik = Math.floor((n % 100) / 10);
let birlik = Math.floor(n % 10);

if(0 < n && n <= 9) {
  natija = n;
} else if(10 <= n && n <= 99) {
  natija = birlik + onlik;
} else if(100 <= n && n <= 999) {
  natija = birlik + onlik + yuzlik;
} else if(1000 <= n && n <= 9999) {
  natija = birlik + onlik + yuzlik + minglik;
} else {
  natija = `Son qiymati belgilangan chegarada emas`;
}

console.log(natija);