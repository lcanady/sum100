const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const value = 100;
const ops = ["", "-", "+"];

const opsFuns = {
  "": (a, b) => a + b,
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

const combos = Math.pow(ops.length, numbers.length - 1);
const solutions = [];

for (let i = 0; i <= combos; i++) {
  // Build a list of operators.
  const o = i
    .toString(ops.length) // convert index to base 3
    .padStart(numbers.length - 1, "0") // <---
    .split("")
    .map((v) => parseInt(v));

  // build an answer expression
  let tempSolution = "";
  for (let j = 0; j < numbers.length; j++) {
    if (j < numbers.length - 1) {
      tempSolution += `${numbers[j]}${ops[o[j]]}`;
    } else {
      tempSolution += `${numbers[j]}`;
    }
  }

  // Reduce the expression to an answer
  const answer = tempSolution
    .replace(/([\/\+\*\-])/g, " $1")
    .split(" ")
    .reduce((p, c) => {
      const op = c.split("")[0];
      if (/^[\+\*\-\/]/.test(op)) {
        return opsFuns[op](parseInt(p), parseInt(c.slice(1)));
      }

      return parseInt(p) + parseInt(c);
    });

  // compare and save if a match.
  if (answer === value) solutions.push(tempSolution);
}

console.log(solutions);
console.log("solutions: ", solutions.length);
