import type { Club } from "./types";

// Starting score estimates. Tweak as the quiz gets stress-tested with real users.
export const clubs: Club[] = [
  {
    id: "manchester-city",
    name: "Manchester City",
    city: "Manchester",
    league: "Premier League",
    description:
      "A modern dynasty assembled with petrostate wealth and Pep Guardiola's surgical, possession-based football. The blue half of Manchester has deep working-class roots, but today the club operates as a polished global brand collecting trophies on every continent. Beautiful to watch, complicated to love.",
    scores: {
      gloryHunter: 0.9,
      heritage: 0.2,
      bigCity: 0.8,
      workingClass: 0.0,
      drama: -0.3,
    },
  },
  {
    id: "liverpool",
    name: "Liverpool",
    city: "Liverpool",
    league: "Premier League",
    description:
      "Anfield is a cathedral, You'll Never Walk Alone is the hymn, and the support is romantic to the bone. The scouse identity is fiercely working-class and proudly distinct from the rest of England — picking Liverpool means buying into a hundred years of mythology. The football is intense; so are the people.",
    scores: {
      gloryHunter: 0.7,
      heritage: 0.9,
      bigCity: 0.5,
      workingClass: 0.7,
      drama: 0.4,
    },
  },
  {
    id: "brighton",
    name: "Brighton & Hove Albion",
    city: "Brighton",
    league: "Premier League",
    description:
      "A moneyball success story run smarter than most clubs ten times their size, playing genuinely good football on a relatively modest budget. The vibe is seaside, well-educated, calm — fans expect competence rather than miracles, and they usually get it. The least dramatic ride in the Premier League, by design.",
    scores: {
      gloryHunter: -0.2,
      heritage: 0.0,
      bigCity: -0.2,
      workingClass: -0.4,
      drama: -0.6,
    },
  },
  {
    id: "sunderland",
    name: "Sunderland",
    city: "Sunderland",
    league: "Championship",
    description:
      "Decades of decline followed by a cult-favorite Netflix documentary that turned their slow-motion collapse into appointment television. Yet the Stadium of Light still fills 40,000 strong, because supporting Sunderland is who you are, not what they win. The North East loves them more for what they've survived than what they've achieved.",
    scores: {
      gloryHunter: -0.6,
      heritage: 0.7,
      bigCity: -0.1,
      workingClass: 0.9,
      drama: 0.8,
    },
  },
  {
    id: "wrexham",
    name: "Wrexham",
    city: "Wrexham",
    league: "League One",
    description:
      "Bought by Ryan Reynolds and Rob McElhenney in 2020, hauled out of non-league with back-to-back promotions and a hit Disney+ docuseries. The club sits on the Welsh border with a tight-knit community feel, and the recent fame has brought a wave of American supporters who fell in love through the show. A genuine fairy tale that's still being written.",
    scores: {
      gloryHunter: -0.7,
      heritage: 0.6,
      bigCity: -0.8,
      workingClass: 0.7,
      drama: 0.7,
    },
  },
];
