// If2
// a,b,c butun sonlar berilgan, shu sonlarning o’rtachasi (ya’ni katta va kichik son
// o’rtasidagi ) sonni aniqlang.
// Input: a, b, c. ( Butun son )
// Output: natijani chiqaring.

// Input:          Output:
// 50  89  1       50
// 40 -20  23      23

let a = 40, b = -20, c = 23;

if((b < a && a < c) || (c < a && a < b)) {
  console.log(a);
} else if((a < b && b < c) || (c < b && b < a)) {
  console.log(b);
} else {
  console.log(c);
}