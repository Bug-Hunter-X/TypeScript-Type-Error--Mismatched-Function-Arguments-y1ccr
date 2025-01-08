function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function isNumber(arg: any): arg is number {
    return typeof arg === 'number';
}

let result = add(5, 3);
console.log(result); // Output: 8

result = subtract(5, 3);
console.log(result); // Output: 2

let num1 = 5;
let num2 = "3";

if (isNumber(num1) && isNumber(num2)) {
    result = add(num1, num2);
    console.log(result); // Output: 8
} else {
    console.log("Type Error: Arguments are not numbers");
}

//Or using type assertion
result = add(5, Number(num2));
console.log(result); // Output: 8