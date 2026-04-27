import type { Question } from "./types";

export const questions: Question[] = [
  {
    id: "saturday-breakfast",
    text: "It's Saturday morning. Pick your ideal start to the day.",
    answers: [
      {
        text: "A full English in a greasy-spoon café",
        scores: { workingClass: 0.6, heritage: 0.4 },
      },
      {
        text: "Sourdough toast and a flat white at a new café",
        scores: { workingClass: -0.5, bigCity: 0.4, drama: -0.3 },
      },
      {
        text: "Bacon roll and strong tea, eaten on the walk to the ground",
        scores: { workingClass: 0.5, heritage: 0.3 },
      },
      {
        text: "Skip breakfast — too much going on",
        scores: { drama: 0.5, gloryHunter: 0.2 },
      },
    ],
  },
  {
    id: "losing-at-halftime",
    text: "Your team is losing 3-0 at halftime. You...",
    answers: [
      {
        text: "Bail. There's better things to do with a Saturday.",
        scores: { gloryHunter: 0.7 },
      },
      {
        text: "Yell at the TV. The comeback is on.",
        scores: { drama: 0.6, workingClass: 0.4 },
      },
      {
        text: "Crack open another pint with mates. This is just being a fan.",
        scores: { gloryHunter: -0.5, drama: 0.3, heritage: 0.3 },
      },
      {
        text: "Calmly note what tactical change you'd make at the break.",
        scores: { drama: -0.6, workingClass: -0.3 },
      },
    ],
  },
  {
    id: "ideal-evening",
    text: "Pick your ideal evening out.",
    answers: [
      {
        text: "Same pub you've gone to for fifteen years",
        scores: { heritage: 0.7, workingClass: 0.4, bigCity: -0.4 },
      },
      {
        text: "A new restaurant in the city",
        scores: { bigCity: 0.6, workingClass: -0.4, drama: -0.2 },
      },
      {
        text: "A messy night you'll be telling stories about for years",
        scores: { drama: 0.8, gloryHunter: 0.2 },
      },
      {
        text: "Early dinner, home by ten, ready for tomorrow",
        scores: { drama: -0.6, workingClass: -0.3 },
      },
    ],
  },
];
