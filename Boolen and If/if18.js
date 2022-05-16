// If18
// a, b, c butun sonlarning orasidan eng kattasini toping.
// Input: a,b,c. ( Butun son. 0 < n < 10000 ).
// Output: Maximum.

// Input           Output
//  5   6   9       9
// 54  87  32      87
// 12   5   7      12

let a = 12, b = 5, c = 7, natija;

if(0 < a && a < 10000 && 0 < b && b < 10000 && 0 < c && c < 10000) {
  if(a <= c && b <= c) {
    natija = c;
  } else if(a <= b && c <= b) {
    natija = b;
  } else {
    natija = a;
  }
} else {
  natija = `Son qiymati chegarada emas`;
}

console.log(natija);