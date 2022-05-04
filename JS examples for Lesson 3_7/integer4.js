// Uch xonali a butun son berilgan, undan o’nlik xona birligidagi raqam bilan yuzlik
// xona birligida turgan raqamlarni joyini o’zgartirib, hosil bo’lgan sonni chiqaring.
// Input: a.
// Output: o’nlik va yuzlik xona birligida turgan raqamlarni joyini almashtirish.

// Input:     Output:
// 345        435
// 123        213
// 555        555

let a = 345;

let yuzlik = Math.floor(a / 100);
let onlik = Math.floor((a % 100) / 10);
let birlik = Math.floor((a % 100) % 10);

let natija = Number(`${onlik}${yuzlik}${birlik}`);

console.log(natija);