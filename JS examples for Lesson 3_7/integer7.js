// Integer7
// x1, y1 va x2, y2 ikki nuqtaning koordinatalari berilgan, ular orasidagi masofani
// ikki xona birlikda hisoblang.
// Masofa ushbu formula bo'yicha hisoblanadi: √(x2 − x1)2 + (y2 − y1)2
// Input: x1; y1; x2; y2; (Haqiqiy son)
// Output: natijani chiqaring.

// Input:                         Output:
// -1.4  7.9   6.1   9.9          7.76
// -3.9  -8.2  -1.3  -2.9         5.90

let x1 = -3.9;
let y1 = -8.2;
let x2 = -1.3;
let y2 = -2.9;

let masofa = Math.sqrt(((x2-x1)**2) + ((y2-y1)**2));

console.log(Number(masofa.toFixed(2)));