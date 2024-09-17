// const scores: Record<string, number> = {};

// const scores: {
//   [index: string]: number;
// } = {};

interface Scores {
  [subject: string]: number;
}

const scores: Scores = {};

scores.math = 95;
scores.english = 90;
scores.science = 85;
