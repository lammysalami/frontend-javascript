// Task 5 - Nominal typing via brand property

interface MajorCredits {
  credits: number;
  brand: "major";
}

interface MinorCredits {
  credits: number;
  brand: "minor";
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return { credits: subject1.credits + subject2.credits, brand: "major" };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return { credits: subject1.credits + subject2.credits, brand: "minor" };
}

// Usage example
const a: MajorCredits = { credits: 3, brand: "major" };
const b: MajorCredits = { credits: 4, brand: "major" };
const majorTotal = sumMajorCredits(a, b);
console.log(majorTotal);

const x: MinorCredits = { credits: 1, brand: "minor" };
const y: MinorCredits = { credits: 2, brand: "minor" };
const minorTotal = sumMinorCredits(x, y);
console.log(minorTotal);
