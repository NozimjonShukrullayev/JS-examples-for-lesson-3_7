// Integer3
// Uch xonali a butun son berilgan, undan boshida turgan raqam bilan oxirida turgan
// raqamni joyini o’zgartirib, hosil bo’lgan sonni chiqaring.
// Input : a.
// Output : o’ng va chap tomon oxirida turgan sonlarni joyini almashtirish.

// Input:    Output:
// 231       132
// 765       567

let a = 328;

let onliklar = a % 100;
let urtadagiRaqam = Math.floor(onliklar / 10);
let birlik = onliklar % 10;
let yuzlik = (a - onliklar) / 100;

let natija = Number(`${birlik}${urtadagiRaqam}${yuzlik}`);

console.log(natija);