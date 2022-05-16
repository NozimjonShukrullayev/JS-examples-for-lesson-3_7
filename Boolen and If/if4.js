// If4
// X va Y dekart koordinata o`qlarida yotmaydigan (x; y) nuqta berilgan. 
// Shu nuqta joylashgan koordinata choragini aniqlang.
// Input: x, y. (Butun son).
// Output: Natijani chiqaring.

// Input       Output
//  7   3      I - chorak
// -5   6      II - chorak
// -8  -1      III - chorak
//  5  -12     IV - chorak

let x = 7, y = 3, chorak;

if(0 < x && 0 < y) {
  chorak = `I - chorak`;
} else if(x < 0 && 0 < y) {
  chorak = `II - chorak`;
} else if(x < 0 && y < 0) {
  chorak = `III - chorak`;
} else {
  chorak = `IV - chorak`;  
}

console.log(chorak);