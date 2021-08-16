const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const value = 100;

// calculate the total number of possible combinations (3^8)
const combos = Math.pow(3, numbers.length - 1);
const solutions = [];
const ops = ["", "-", "+"];

for (let i = 0; i <= combos; i++) {
  // Build a list of operators with the possible values of (0,1,2).
  const o = i
    .toString(3) // convert index to base 3
    .padStart(8, "0")
    .split("")
    .map((v) => parseInt(v));

  // I need to find a cleaner presentation for this string.  Just a long
  // interplation to create the  possible solution string.
  const tempSolution = `1${ops[o[0]]}2${ops[o[1]]}3${ops[o[2]]}4${ops[o[3]]}5${
    ops[o[4]]
  }6${ops[o[5]]}7${ops[o[6]]}8${ops[o[7]]}9`;

  // Run it. Save it. Done.
  if (eval(tempSolution) === value) solutions.push(tempSolution);
}

console.log(solutions);
