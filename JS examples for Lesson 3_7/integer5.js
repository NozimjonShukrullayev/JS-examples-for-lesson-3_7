// Integer5
// Berilgan ifodani hisoblang: 9*(a**2)*b − 27*(a**2)(b**2) + 15*(b**2)
// Natijani 2 xona birlikda yaxlitlang. (round( ) funksiyasidan foydalaning)
// Input: a; b. (a sonni 0 < a < 1000 va b sonni 0 < b < 1000 faqat shu oraliqda oling.)
// Output: natijani chiqaring.

// Input:       Output:
// 6.3  8.6     -75076.35
// 4.5  9.6     -47256.48

let a = 4.5;
let b = 9.6;

let natija = ((9*(a**2)*b) - (27*(a**2)*(b**2)) + (15*(b**2)));

console.log(Number(natija.toFixed(2)));