let arr = [1, 2, 3, 4, 5];
let m = 0;
for (e of arr) m += e;
let moy = m / arr.length;
console.log("The average is " + moy);