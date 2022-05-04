// Integer2
// Berilgan ifodani hisoblang: ((1/6)*√a + (1/3)*√b)**2
// Input: a; b. (a sonni 0 < a < 1000 va b sonni 0 < b < 1000 faqat shu oraliqda oling.)
// Output: natijani chiqaring.

// Input:      Output:
// 4 va 9      1.7777777777777

let a = 4;
let b = 9;

let s = Math.pow( ( (1/6)*Math.sqrt(a) + (1/3)*Math.sqrt(b) ), 2 );

console.log(s);