// If7
// x haqiqiy son berilgan. Quyidagi funksiyani hisoblang.

//       {-x, agar x <= 0;
//  f(x)={x**2, agar 0 < x < 2;
//       {4, agar 2 <= x

// Input: x. ( Haqiqiy son )
// Output: natijani chiqaring.

// Input:   Output:
// -9       9
//  1.5     2.25
// 12       4

let x = -9, fx;

if(x <= 0) {
  fx = -x;
} else if(2 <= x) {
  fx = 4;
} else {
  fx = Math.pow(x, 2);
}

console.log(fx);