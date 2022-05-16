// If1
// a,b,c butun sonlar berilgan, shu sonlarning qaysi biri kichikligini aniqlang.
// Input: a, b, c. ( Butun son )
// Output: natijani chiqaring.

// Input:      Output:
// 5  8  1      1
// 4 -9  23    -9  

let a = 4, b = -9, c = 23;

if (a < b && a < c) {
  console.log(a);
} else if (b < c) {
  console.log(b);
} else {
  console.log(c);
}