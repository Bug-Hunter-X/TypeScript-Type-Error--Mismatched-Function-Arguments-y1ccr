function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result = add(5, 3); //result is 8
console.log(result); 
result = subtract(5,3); //result is 2
console.log(result); 
result = add(5, "3"); //Type Error