// If8
// a, b, c kesmalar berilgan. Uchburchak yasash mumkinligiga tekshiring.
// Agar mumkin bolsa “Yes” aks holda “No” javob qaytarsin.
// Uchburchak yasash sharti: Ixtiyoriy 2 ta tomonning yig`indisi qolgan 3-tomondan
// katta bo`lishi kerak.
// Input: a, b, c. ( Butun son )
// Output: Yes yoki No ( string ).

// Input        output
// 3  4  5      Yes
// 7  4  2      No

let a = 3, b = 4, c = 5;

if(c < a+b && b < a+c && a < b+c) {
  console.log(`Yes`);
} else {
  console.log(`No`);
}