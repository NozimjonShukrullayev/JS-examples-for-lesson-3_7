// If6
// x haqiqiy son berilgan. Quyidagi funksiyani hisoblang.

// f(x)= { 2*x, agar x < -2 yoki 2 < x;
//       { -3*x, aks holda;

// Input: x. ( Haqiqiy son )
// Output: natijani chiqaring.

// Input:   Output:
//   6      12
//   1      -3
// -12     -24
//   0       0

let x = 6;

if(x < -2 || 2 < x) {
  console.log(2*x);
} else {
  console.log(-3*x);
}