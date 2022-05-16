// If13
// Do`konchi biron kishiga daftar berish yoki bermaslik kerakligini aniqlash
// uchun dastur yozmoqchi. Do`konchi daftarga yetarli puli borlarga va
// tanaffusda bo`lganlarga Daftar beradi.
// Shaxsning pulini va tanaffus vaqtini hisobga olgan holda unga daftar berish
// kerakmi yo`qmi aniqlaydigan dastur tuzing.
// Tanaffusda bo`lgandagi qiymati Ture ga teng.
// Daftarning narxi: 20 (USZ).
// Input: price, on_break. (butun, Bool).
// Output: Bool.

// Input         Output
// 17  True      False
// 20  False     False
// 30  True      True

let n = 17, on_break = true, natija;

if(n < 20 && on_break == true) {
  natija = false;
} else if(n < 20 && on_break == false) {
  natija = false;
} else if(20 <= n && on_break == false) {
  natija = false;
} else {
  natija = true;
}

console.log(natija);