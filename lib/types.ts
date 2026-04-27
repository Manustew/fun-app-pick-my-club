export type Dimension =
  | "gloryHunter"
  | "heritage"
  | "bigCity"
  | "workingClass"
  | "drama";

export type Scores = Record<Dimension, number>;

export type Answer = {
  text: string;
  scores: Partial<Scores>;
};

export type Question = {
  id: string;
  text: string;
  answers: Answer[];
};

export type Club = {
  id: string;
  name: string;
  city: string;
  league: string;
  description: string;
  scores: Scores;
};
