// Integer8
// Uchburchakning uchta uchining koordinatalari berilgan: x1, y1, x2, y2, x3, y3.
// Tekislikda ikki nuqta orasidagi masofani hisoblash formulasidan foydalanib, uning
// perimetri ( P ) va yuzini ( S ), 2 xona birlikda hisoblang.
// a, b, c tomonlari bo'lgan uchburchakning yuzini topish uchun Geron formulasidan
// foydalaning: S = √p·(p − a)·(p − b)·(p − c), bu yerda
// p - yarim perimeter: p = (a + b + c)/2;
// Input: x1; y1; x2; y2; x3; y3. (Haqiqiy son).
// Output: P va S.

// Input:                                Output:
// -9.7  -9.9  0.0  2.9  -0.1  5.2       36.26   11.79

let x1 = -9.7;
let y1 = -9.9;
let x2 = 0.0;
let y2 = 2.9;
let x3 = -0.1;
let y3 = 5.2;

let a = Math.sqrt(((x2-x1)**2) + ((y2-y1)**2));
let b = Math.sqrt(((x3-x2)**2) + ((y3-y2)**2));
let c = Math.sqrt(((x3-x1)**2) + ((y3-y1)**2));

let P = a + b + c;
let p = (a + b + c) / 2;

let S = Math.sqrt(p*(p-a)*(p-b)*(p-c));

console.log(Number(P.toFixed(2)));
console.log(Number(S.toFixed(2)));