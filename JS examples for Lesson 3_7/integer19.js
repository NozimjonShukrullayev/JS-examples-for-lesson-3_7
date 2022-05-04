// Integer19
// Uch xonali a butun son berilgan. Uning raqamlari yig'indisi va raqamlari
// ko'paytmasini toping.
// Input: a.
// Output: raqamlari yig’indisi va raqamlari ko’paytmasi.

// Input:   Output:
// 230      5  0
// 241      7  8

let a = 241;

let yuzlik = Math.floor(a / 100);
let onlik = Math.floor((a % 100) / 10);
let birlik = Math.floor((a % 100) % 10);

let yigindisi = yuzlik + onlik + birlik;
let kopaytmasi = yuzlik * onlik * birlik;

console.log(`${yigindisi} va ${kopaytmasi}`);