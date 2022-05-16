// If5
// x haqiqiy son berilgan. Quyidagi funksiyani hisoblang.

// f(x)={ 2*sin(x), agar 0 < x;  
//      { x-6, agar x <= 0;

// Input: x. ( Haqiqiy son )
// Output: natijani chiqaring.

// Input:   Output:
// 0.5;     0.958851077208406
// -5;      -11.0

let x = -5, fx = 0; 

if(0 < x) {
  fx = 2*Math.sin(x);
} else {
  fx = x-6;
}
console.log(fx);