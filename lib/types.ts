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

  // Visual identity (real crest images are a future task)
  primaryColor: string; // hex like "#C8102E"

  // Identity
  nickname: string;
  foundedYear: number;
  stadium: { name: string; capacity: number };

  // Current state — these change over time, refresh periodically
  manager: string;
  officialWebsite: string;

  // The good stuff
  legends: Array<{ name: string; bio: string }>; // 3 per club
  anthem: { title: string; phrase: string }; // phrase = ONE short widely-recognizable line
  mainRival: string; // full club name
  history: string; // 2-3 sentences on a defining era, identity, or moment
  starterFact: string; // 1 short quirky/insider fact, distinct from history
};
