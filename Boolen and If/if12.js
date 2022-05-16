// If12
// Mana sizga 4 ta modelning tasviri berilgan. Ba’zi kublar boshqa kublarning
// orqasida joylashgan. 1-model 1 ta kubdan, 2-model 4 ta kubdan iborat va
// hokazo… n qatlamni kiritganimizda n qatlamli modelni yasashimiz uchun
// nechta kubik kerak bo`lishini topadigan dastur tuzing.
// Input: n. ( Butun son ).
// Output: Natijani chiqaring.

// Input   Output
// 1       1
// 2       4
// 0       0

let n = 2, kublarSoni;

if(n == 0) {
  kublarSoni = 0;
} else {
  kublarSoni = n**2; 
}

console.log(kublarSoni);