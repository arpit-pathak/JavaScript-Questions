// 34. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

function solveLinEquation(a, b, c) {
  if (a === 0) {
    throw new Error("Cannot divide by zero. 'a' must be a non-zero value.");
  }
  const x = -c / a;
  const y = -(a * x + c) / b;
  return { x, y };
}

console.log(solveLinEquation(2, 3, 7)); // Outputs: { x: -3, y: 1.5 }
