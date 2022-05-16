// If9
// Sizga harorat selsiyda berilgan quyidagi harorat holatiga muvofiq xabarni
// ko`rsating:
// Temp<0: ‘’ Freezing ’’
// Temp 1-10: ‘’ Very Cold ’’
// Temp 11-20: ‘’ Cold ’’
// Temp 21-30: ‘’ Normal ’’
// Temp 31-40: ‘’ Hot ’’
// Temp >40: ‘’ Very Hot ’’
// Input: Temp. ( Butun son)
// Output: Natijani chiqaring.

// Input   Output
// 28      Normal
// -4      Freezing
// 35      Hot
// 58      Very Hot

let temp = 28, xabar;

if(temp < 0) {
  xabar = `Freezing`;
} else if(1 <= temp && temp <= 10 ) {
  xabar = `Very Cold`;
} else if(11 <= temp && temp <= 20 ) {
  xabar = `Cold`;
} else if(21 <= temp && temp <= 30 ) {
  xabar = `Normal`;
} else if(31 <= temp && temp <= 40 ) {
  xabar = `Hot`;
} else {
  xabar = `Very Hot`;
}

console.log(xabar);