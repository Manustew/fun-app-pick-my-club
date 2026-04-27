import type { Answer, Club, Dimension, Scores } from "./types";

const DIMENSIONS: readonly Dimension[] = [
  "gloryHunter",
  "heritage",
  "bigCity",
  "workingClass",
  "drama",
] as const;

function zeroScores(): Scores {
  return {
    gloryHunter: 0,
    heritage: 0,
    bigCity: 0,
    workingClass: 0,
    drama: 0,
  };
}

export function aggregateUserScores(
  answers: Array<Pick<Answer, "scores">>,
): Scores {
  const result = zeroScores();
  for (const answer of answers) {
    for (const dim of DIMENSIONS) {
      result[dim] += answer.scores[dim] ?? 0;
    }
  }
  return result;
}

export function matchUserToClub(userScores: Scores, clubs: Club[]): Club {
  if (clubs.length === 0) {
    throw new Error("matchUserToClub requires a non-empty clubs array");
  }
  let bestClub = clubs[0];
  let bestDistance = Infinity;
  for (const club of clubs) {
    let sumOfSquares = 0;
    for (const dim of DIMENSIONS) {
      const diff = userScores[dim] - club.scores[dim];
      sumOfSquares += diff * diff;
    }
    const distance = Math.sqrt(sumOfSquares);
    if (distance < bestDistance) {
      bestDistance = distance;
      bestClub = club;
    }
  }
  return bestClub;
}
