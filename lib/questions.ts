import type { Question } from "./types";

export const questions: Question[] = [
  {
    id: "saturday-breakfast",
    text: "It's Saturday morning. Pick your ideal start to the day.",
    answers: [
      {
        text: "Diner breakfast with bottomless coffee and a paper menu",
        scores: { workingClass: 0.5, heritage: 0.4 },
      },
      {
        text: "Avocado toast and a cortado at the new café everyone's talking about",
        scores: { workingClass: -0.5, bigCity: 0.5, drama: -0.3 },
      },
      {
        text: "Egg sandwich from the deli, eaten on the walk somewhere",
        scores: { workingClass: 0.5, bigCity: 0.3, heritage: 0.2 },
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
        text: "Bail. There are better things to do with a Saturday.",
        scores: { gloryHunter: 0.7 },
      },
      {
        text: "Yell at the TV. The comeback is on.",
        scores: { drama: 0.6, workingClass: 0.4 },
      },
      {
        text: "Crack open another beer with friends. This is just being a fan.",
        scores: { gloryHunter: -0.5, drama: 0.3, heritage: 0.3 },
      },
      {
        text: "Calmly note what tactical change you'd make at halftime.",
        scores: { drama: -0.6, workingClass: -0.3 },
      },
    ],
  },
  {
    id: "ideal-evening",
    text: "Pick your ideal evening out.",
    answers: [
      {
        text: "Your usual spot — the dive bar you've been going to for fifteen years",
        scores: { heritage: 0.7, workingClass: 0.5, bigCity: -0.4 },
      },
      {
        text: "A new restaurant downtown you've been wanting to try",
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
  {
    id: "where-to-live",
    text: "Pick where you'd actually want to live.",
    answers: [
      {
        text: "A small town with a real Main Street that hasn't changed in fifty years",
        scores: { heritage: 0.6, bigCity: -0.7 },
      },
      {
        text: "A buzzing city where new restaurants open every week",
        scores: { bigCity: 0.7, drama: 0.3, workingClass: -0.3 },
      },
      {
        text: "A coastal town where everyone knows your dog's name",
        scores: { bigCity: -0.6, workingClass: 0.2, drama: -0.4 },
      },
      {
        text: "A neighborhood on the rise — gritty but transforming",
        scores: { heritage: -0.4, drama: 0.3, bigCity: 0.3 },
      },
    ],
  },
  {
    id: "ideal-vacation",
    text: "Pick your ideal vacation.",
    answers: [
      {
        text: "A national park trip ending with a beer at a small-town brewery",
        scores: { heritage: 0.4, workingClass: 0.4, drama: -0.3 },
      },
      {
        text: "A long weekend in Mexico City — culture, food, late dinners",
        scores: { bigCity: 0.6, workingClass: -0.4 },
      },
      {
        text: "A wild bachelor/bachelorette weekend in Vegas with twelve friends",
        scores: { drama: 0.7, workingClass: 0.3, gloryHunter: 0.2 },
      },
      {
        text: "A quiet beach, a stack of books, no agenda",
        scores: { drama: -0.6, workingClass: -0.3 },
      },
    ],
  },
  {
    id: "dream-meal",
    text: "Pick your dream meal.",
    answers: [
      {
        text: "Sunday dinner at Mom's house with the whole family",
        scores: { heritage: 0.7, workingClass: 0.4 },
      },
      {
        text: "A farm-to-table spot with seasonal everything and a craft cocktail",
        scores: { workingClass: -0.5, bigCity: 0.4, drama: -0.2 },
      },
      {
        text: "Tailgate food in a parking lot before a game with twenty friends",
        scores: { drama: 0.4, workingClass: 0.5, heritage: 0.2 },
      },
      {
        text: "A loud chain restaurant where the whole crew can fit",
        scores: { workingClass: 0.4, bigCity: -0.2 },
      },
    ],
  },
  {
    id: "stranger-insult",
    text: "A stranger insults your team to your face. You...",
    answers: [
      {
        text: "Lose your mind. Defend the badge to the death.",
        scores: { drama: 0.7, workingClass: 0.6 },
      },
      {
        text: "Calmly explain, with statistics, why they are mistaken.",
        scores: { drama: -0.5, workingClass: -0.4 },
      },
      {
        text: "Laugh — they're probably right, but it's still your team.",
        scores: { gloryHunter: -0.6, heritage: 0.3 },
      },
      {
        text: "Don't engage. Walk away.",
        scores: { drama: -0.4, gloryHunter: -0.2 },
      },
    ],
  },
  {
    id: "hero-archetype",
    text: "Pick a hero archetype.",
    answers: [
      {
        text: "The eternal underdog who keeps showing up",
        scores: { gloryHunter: -0.7, heritage: 0.3 },
      },
      {
        text: "The polished winner who makes it look easy",
        scores: { gloryHunter: 0.7, workingClass: -0.3 },
      },
      {
        text: "The chaos magnet who always has a story",
        scores: { drama: 0.7, heritage: -0.2 },
      },
      {
        text: "The quiet craftsman who just does the work",
        scores: { drama: -0.6, workingClass: 0.3 },
      },
    ],
  },
  {
    id: "drink-of-choice",
    text: "Pick your drink of choice.",
    answers: [
      {
        text: "An IPA from the local craft brewery",
        scores: { workingClass: -0.4, bigCity: 0.4, drama: -0.2 },
      },
      {
        text: "Bourbon, neat. Maybe two.",
        scores: { heritage: 0.5, drama: -0.3, workingClass: 0.2 },
      },
      {
        text: "A frozen margarita with friends on a sunny patio",
        scores: { drama: 0.5, bigCity: 0.3, workingClass: -0.2 },
      },
      {
        text: "Sparkling water for me, thanks",
        scores: { drama: -0.6, workingClass: -0.3 },
      },
    ],
  },
];
