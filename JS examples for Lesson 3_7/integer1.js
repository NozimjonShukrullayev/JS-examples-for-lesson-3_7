// Integer1
// Berilgan ifodani hisoblang: √√(a**3 − b**3) + (a**3 + b**3)
// Input: a; b. (a sonni 0 < a < 1000 va b sonni 0 < b < 1000 faqat shu oraliqda oling.)
// Output: natijani chiqaring.

// Input:        Output:
// 2 va 3        2.0
// 8 va 5        5.656854249492381

let a = 2;
let b = 3;
let s = Math.sqrt(Math.sqrt((a**3 - b**3) + (a**3 + b**3)));
console.log(s);

// Bu natijani yaxlitlash uchun:
console.log("Yaxlitlangan ko\'rinishi: " + Math.round(s));