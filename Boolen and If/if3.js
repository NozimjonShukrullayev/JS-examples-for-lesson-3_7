// If3
// a va b butun sonlari berilgan, agar ular o’zaro teng bo’lmasa, a va b sonlarining
// kattasi natijaga o’zlashtiring, agar ular o’zaro teng bo'lsa 0 sonini natijaga
// o’zlashtiring.
// Input: a, b. ( Butun son )
// Output: natijani chiqaring.

// Input:    Output:
// 10  -4    10
// 70  70    0   

let a = 10, b = 10;

if(a !== b) {
  if(a < b) {
    console.log(b);
  } else {
    console.log(a);
  }
} else {
  console.log(0);
}