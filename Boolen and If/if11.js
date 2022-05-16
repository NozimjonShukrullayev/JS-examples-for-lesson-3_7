// If11
// a, butun son berilgan. Ushbu sonni quyidagi shartlarga tekshiring:
// “ Ikki xonali toq son ”
// “ Ikki honali juft son ”
// “ Uch xonali toq son ”
// “ Uch xonali juft son ”
// Kiritilgan sonning qanday sonligini yozuv bilan chiqaring.
// Input: a. ( Butun son ) a butun soni faqat shu oraliqda oling 1 < a < 999
// Output: natijani chiqaring.

// Input:   Output:
// 30       Ikki xonali juft son
// 101      Uch xonali toq son

let a = 30, natija;

if(a % 2 == 0 && a < 99) {
  natija = `Ikki xonali juft son`;
} else if(a % 2 != 0 && a < 99) {
  natija = `Ikki xonali toq son`;
} else if(a % 2 == 0) {
  natija = `Uch xonali juft son`;
} else {
  natija = `Uch xonali toq son`;
}

console.log(natija);