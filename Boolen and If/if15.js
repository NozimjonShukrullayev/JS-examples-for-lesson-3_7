// If15
// n butun son nechchi xonali son ekanligini topadigan dastur tuzing.
// Input: n. ( Butun son. 0 < n < 100000).
// Output: Natijani chiqaring.

// Input   Output
// 45      2
// 345     3
// 8481    4

let n = 3345, xonaSoni;

if(0 < n && n <= 9) {
  xonaSoni = 1;
} else if(10 <= n && n <= 99) {
  xonaSoni = 2;
} else if(100 <= n && n <= 999) {
  xonaSoni = 3;
} else if (1000 <= n && n <= 9999) {
  xonaSoni = 4;
} else {
  xonaSoni = 5;
}

console.log(xonaSoni);