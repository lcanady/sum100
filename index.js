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
  // Build a list of operators with the possible values of (0,1,2).
  const o = i
    .toString(ops.length) // convert index to base 3
    .padStart(numbers.length - 1, "0") // <---
    .split("")
    .map((v) => parseInt(v));

  // I need to find a cleaner presentation for this string.  Just a long
  // interplation to create the  possible solution string.
  let tempSolution = "";
  for (let j = 0; j < numbers.length; j++) {
    if (j < numbers.length - 1) {
      tempSolution += `${numbers[j]}${ops[o[j]]}`;
    } else {
      tempSolution += `${numbers[j]}`;
    }
  }

  // Run it. Save it. Done.
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

  if (answer === value) solutions.push(tempSolution);
}

console.log(solutions);
console.log("solutions: ", solutions.length);
