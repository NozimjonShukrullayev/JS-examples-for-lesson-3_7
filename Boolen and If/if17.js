// If17
// n butun sonining toq raqamlari yig`indisini toping.
// Input: n. ( Butun son. 0 < n < 10000 ).
// Output: Natijani chiqaring.

// Input   Output
// 45      5
// 345     8
// 8481    1 

let n = 45, natija;
let minglik = Math.floor(n / 1000);
let yuzlik = Math.floor((n % 1000) / 100);
let onlik = Math.floor((n % 100) / 10);
let birlik = Math.floor(n % 10);
    
if(0 < n && n < 10) {
  if(n % 2 != 0) {
    natija = n;
  } else {
    natija = 0;
  } 
} else if(10 <= n && n <= 99) {
  if(onlik % 2 != 0 && birlik % 2 != 0) {
    natija = onlik + birlik;
  } else if(onlik % 2 != 0) {
    natija = onlik;
  } else {
    natija = birlik;
  } 
} else if(100 <= n && n <= 999) {
  if(yuzlik % 2 != 0 && onlik % 2 != 0 && birlik % 2 != 0) {
    natija = yuzlik + onlik + birlik;
  } else if(yuzlik % 2 != 0 && onlik % 2 != 0) {
    natija = yuzlik + onlik;
  } else if(yuzlik % 2 != 0 && birlik % 2 != 0) {
    natija = yuzlik + birlik;
  } else if(onlik % 2 != 0 && birlik % 2 != 0) {
    natija = onlik + birlik;
  } else if(yuzlik % 2 != 0) {
    natija = yuzlik;
  } else if(onlik % 2 != 0) {
    natija = onlik;
  } else {
    natija = birlik;
  } 
} else {
  if(minglik % 2 != 0 && yuzlik % 2 != 0 && onlik % 2 != 0 && birlik % 2 != 0) {
    natija = minglik + yuzlik + onlik + birlik;
  } else if(yuzlik % 2 != 0 && onlik % 2 != 0 && birlik % 2 != 0) {
    natija = yuzlik + onlik + birlik;
  } else if(onlik % 2 != 0 && birlik % 2 != 0) {
    natija = onlik + birlik;
  } else if(minglik % 2 != 0 && yuzlik % 2 != 0 && onlik % 2 != 0) {
    natija = minglik + yuzlik + onlik;
  } else if(minglik % 2 != 0 && onlik % 2 != 0 && birlik % 2 != 0) {
    natija = minglik + onlik + birlik;
  } else if(minglik % 2 != 0 && yuzlik % 2 != 0 && birlik % 2 != 0) {
    natija = minglik + yuzlik + birlik;
  } else if(minglik % 2 != 0 && yuzlik % 2 != 0) {
    natija = minglik + yuzlik;
  } else if(minglik % 2 != 0 && onlik % 2 != 0) {
    natija = minglik + onlik;
  } else if(minglik % 2 != 0 && birlik % 2 != 0) {
    natija = minglik + birlik;
  } else if(yuzlik % 2 != 0 && onlik % 2 != 0) {
    natija = yuzlik + onlik;
  } else if(yuzlik % 2 != 0 && birlik % 2 != 0) {
    natija = yuzlik + birlik;
  } else if(onlik % 2 != 0 && birlik % 2 != 0) {
    natija = onlik + birlik;
  } else if(yuzlik % 2 != 0) {
    natija = yuzlik;
  } else if(onlik % 2 != 0) {
    natija = onlik;
  } else {
    natija = birlik;
  } 
}

console.log(natija);