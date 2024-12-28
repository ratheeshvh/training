console.log("JavaScript Example");

console.log("\n1) Control Statement:");
const number = 5;
if (number > 10) {
  console.log(`  ${number} is greater than 10`);
} else {
  console.log(`  ${number} is not greater than 10`);
}

console.log("\n2) Operators:");

let a = 5;
console.log(`  Assignment: a = ${a}`);

let sum = a + 10;
console.log(`  Arithmetic: a + 10 = ${sum}`);
let sub =a-2;
console.log(`  Arithmetic: a - 10 = ${sub}`)
let isGreater = a > 3;
console.log(`  Relational: a > 3 is ${isGreater}`);

let logical = a > 3 && a < 10;
console.log(`  Logical: a > 3 && a < 10 is ${logical}`);

let bitwise = a & 1;
console.log(`  Bitwise: a & 1 = ${bitwise}`);

let ternary = a > 3 ? "Greater than 3" : "Not greater than 3";
console.log(`  Ternary: ${ternary}`);

a++;
console.log(`  Unary: Incremented a = ${a}`);


console.log("\n3) Secondary Data Types:");


let arr = [1, 2, 3, 4, 5];
console.log(`  Array: [${arr}]`);

let obj = { name: "Alice", age: 25 };
console.log(`  Object: ${JSON.stringify(obj)}`);

console.log("\n4) Loops:");

console.log("  For Loop:");
for (let i = 0; i < arr.length; i++) {
  console.log(`    Index ${i}: ${arr[i]}`);
}

console.log("  For Of Loop:");
for (const value of arr) {
  console.log(`    ${value}`);
}

console.log("  For In Loop (Object):");
for (const key in obj) {
  console.log(`    ${key}: ${obj[key]}`);
}

console.log("  While Loop:");
let i = 0;
while (i < arr.length) {
  console.log(`    ${arr[i]}`);
  i++;
}

console.log("  Do-While Loop:");
i = 0;
do {
  console.log(`    ${arr[i]}`);
  i++;
} while (i < arr.length);
