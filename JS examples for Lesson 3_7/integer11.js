// Integer11
// Ikki xonali butun son berilgan. Uning raqamlari yig'indisi va raqamlari
// ko'paytmasini toping.
// Input: a.
// Output: raqamlari yig’indisi va raqamlari ko’paytmasi.

// Input:   Output:
// 23       5  6
// 21       3  2
// 81       9  8
// 10       1  0

let a = 21;
let onlik = Math.floor(a / 10);
let birlik = a % 10;

let yigindisi = onlik + birlik;
let kopaytmasi = onlik * birlik;
console.log(`${yigindisi} va ${kopaytmasi}`);