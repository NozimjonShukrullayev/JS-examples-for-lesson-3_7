// Integer6
// Berilgan ifodani hisoblang: ((1+(r/100))**n) / ((a**2)+(b**2))**(1/2)
// Input: r; n; a; b. ( r sonni 0 < r < 1000, n sonni 0 < n < 1000, a sonni 0 < a < 1000 va
// b sonni 0 < b < 1000 faqat shu oraliqda oling. )
// Output: natijani chiqaring.

// Input:           Output:
// 3  2  4  5       0.1656847439876

let r = 3;
let n = 2;
let a = 4;
let b = 5;

let natija = (((1+(r/100))**n) / ((a**2)+(b**2))**(1/2));

console.log(natija);