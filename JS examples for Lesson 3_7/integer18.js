// Integer18
// Berilgan ifodaning natijasini chiqaring. 6 * x**3 * y**5 + 4 * x**4 * y**3 - 24*x*y
// pow() funksiyasidan foydalaning
// Input: x, y.
// Output: natija

// Input:    Output:
// 2  3      13248

let x = 2;
let y = 3;

let natija = 6*(Math.pow(x, 3) * Math.pow(y, 5)) + 4*(Math.pow(x, 4) * Math.pow(y, 3)) - 24*x*y;
console.log(natija); 