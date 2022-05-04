// Integer17
// Berilgan ifodaning natijasini chiqaring. x**4 + 5x**2 +x**3*y
// pow() funksiyasidan foydalaning
// Input: x, y.
// Output: natija

// Input:    Output:
// 2  3      60

let x = 2;
let y = 3;

let natija = Math.pow(x, 4) + 5*(Math.pow(x, 2)) + (Math.pow(x, 3))*y;
console.log(natija);