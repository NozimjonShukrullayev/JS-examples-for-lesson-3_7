// Integer16
// m sonni berilgan 2 xona birlikda yaxlitlang.
// round() funksiyasidan foydalaning
// Input: m.
// Output: natija

// Input:    Output:
// 3.456     3.46
// 5.678     5.68
// 7.5       7.5

// Ustoz, misolda sonni yaxlitlash uchun round()dan foydalan degan. 
// round()da sonning faqat butun qismi qolyapti.
// Shuning uchun .toFixed funksiyasidan foydalandim.
// Buning kamchiligi: Number() taypida chiqarmas ekan.

let m = 3.456;
console.log(m.toFixed(2));