// If10
// a, butun son berilgan. Ushbu sonni quyidagi shartlarga tekshiring:
// “ musbat toq son ”
// “ musbat juft son ”
// “ manfiy toq son ”
// “ manfiy juft son ”,
// “ son 0 ga teng ”.
// Kiritilgan sonning qanday sonligini yozuv bilan chiqaring.
// Input: a. ( Butun son )
// Output: natijani chiqaring.

// Input:   Output:
// 10       musbat juft son
// -7       manfiy toq son
// 0        son 0 ga teng

let a = 10, natija;

if(0 < a && a % 2 == 1) {
  natija = `musbat toq son`;
} else if(0 < a && a % 2 == 0) {
  natija = `musbat juft son`;
} else if(a < 0 && a % 2 == -1) {
  natija = `manfiy toq son`;
} else if(a < 0 && a % 2 == 0) {
  natija = `manfiy juft son`;
} else {
  natija = `son 0 ga teng`;
}

console.log(natija);