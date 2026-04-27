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
    league: "Premier League",
    description:
      "Decades of decline followed by a cult-favorite Netflix documentary that turned their slow-motion collapse into appointment television. Yet the Stadium of Light still fills 40,000 strong, because supporting Sunderland is who you are, not what they win. The North East loves them more for what they've survived than what they've achieved.",
    scores: {
      gloryHunter: -0.3,
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
  {
    id: "arsenal",
    name: "Arsenal",
    city: "London",
    league: "Premier League",
    description:
      "North London royalty: pretty football, the move from Highbury to the Emirates, and a self-image as the most cultured club in England. The fanbase trends younger, more cosmopolitan, and more chronically online than most — endless debate, endless theatre, occasional moments of grace. Picking Arsenal means caring as much about how it looks as whether you won.",
    scores: {
      gloryHunter: 0.7,
      heritage: 0.8,
      bigCity: 0.9,
      workingClass: -0.3,
      drama: 0.3,
    },
  },
  {
    id: "aston-villa",
    name: "Aston Villa",
    city: "Birmingham",
    league: "Premier League",
    description:
      "One of England's oldest clubs and European Cup winners in 1982 — Villa Park is one of the great old grounds, and the support carries the slow, patient pride of a Midlands city that often gets overlooked. Claret-and-blue loyalty runs in families here, often for generations. A club for people who like their football traditional and their devotion long-form.",
    scores: {
      gloryHunter: 0.2,
      heritage: 0.9,
      bigCity: 0.4,
      workingClass: 0.5,
      drama: 0.4,
    },
  },
  {
    id: "bournemouth",
    name: "Bournemouth",
    city: "Bournemouth",
    league: "Premier League",
    description:
      "A south-coast club punching well above their weight: small stadium, smaller budget, top-flight football. Cherry-red shirts, easygoing seaside fans, and a vibe more 'Sunday at the pier' than 'blood feud at the gates.' Picking Bournemouth means low drama and quiet competence over inherited grudges.",
    scores: {
      gloryHunter: -0.4,
      heritage: -0.2,
      bigCity: -0.6,
      workingClass: -0.1,
      drama: 0.0,
    },
  },
  {
    id: "brentford",
    name: "Brentford",
    city: "London",
    league: "Premier League",
    description:
      "A west-London project club rebuilt around data, set pieces, and clear-eyed recruitment. The Bees punch up rather than down, run by some of the smartest people in the league, and reward fans who appreciate process over hype. Modern, calm, and quietly excellent.",
    scores: {
      gloryHunter: -0.3,
      heritage: -0.3,
      bigCity: 0.4,
      workingClass: 0.1,
      drama: -0.5,
    },
  },
  {
    id: "burnley",
    name: "Burnley",
    city: "Burnley",
    league: "Premier League",
    description:
      "A Lancashire mill-town club playing top-flight football despite a population that wouldn't fill some clubs' away ends. Turf Moor is one of the oldest grounds in the country, the support is fiercely local and proudly working-class, and the football usually has more grit than glamour. A club for people who'd rather earn it than buy it.",
    scores: {
      gloryHunter: -0.5,
      heritage: 0.7,
      bigCity: -0.7,
      workingClass: 0.8,
      drama: 0.2,
    },
  },
  {
    id: "chelsea",
    name: "Chelsea",
    city: "London",
    league: "Premier League",
    description:
      "West London, deep-pocketed, and prone to chaos: half a dozen managers a decade and a transfer policy that resembles a hedge fund. Chelsea fans have lived through dynasty and disarray in alternating cycles, and the modern club is louder, glossier, and more drama-prone than ever. Picking Chelsea means signing up for the spectacle.",
    scores: {
      gloryHunter: 0.7,
      heritage: 0.3,
      bigCity: 0.9,
      workingClass: 0.0,
      drama: 0.5,
    },
  },
  {
    id: "crystal-palace",
    name: "Crystal Palace",
    city: "London",
    league: "Premier League",
    description:
      "A South London club with one of the most atmospheric crowds in England — flares, ultras, and the full Selhurst Park experience. Eagles fans don't expect titles; they expect identity, fight, and a stadium that sounds like it's about to come apart. A club for people who think the noise matters more than the trophy cabinet.",
    scores: {
      gloryHunter: -0.3,
      heritage: 0.4,
      bigCity: 0.7,
      workingClass: 0.4,
      drama: 0.2,
    },
  },
  {
    id: "everton",
    name: "Everton",
    city: "Liverpool",
    league: "Premier League",
    description:
      "Liverpool's other club, with a deeper claim to the city's working-class soul and a fanbase forged through decades of 'next year.' Goodison was the last of the great old grounds; the new waterfront stadium carries the same patient, defiant pride. Picking Everton means choosing romance and identity over results.",
    scores: {
      gloryHunter: 0.2,
      heritage: 0.9,
      bigCity: 0.5,
      workingClass: 0.7,
      drama: 0.7,
    },
  },
  {
    id: "fulham",
    name: "Fulham",
    city: "London",
    league: "Premier League",
    description:
      "A Thames-side club with Craven Cottage, the most genteel ground in England, sitting next to one of the most expensive postcodes in London. Fans skew older, more refined, and more likely to know their cricket than your average Premier League supporter. Polite football for people who appreciate a good Pimm's at half-time.",
    scores: {
      gloryHunter: -0.2,
      heritage: 0.4,
      bigCity: 0.7,
      workingClass: -0.7,
      drama: 0.0,
    },
  },
  {
    id: "leeds-united",
    name: "Leeds United",
    city: "Leeds",
    league: "Premier League",
    description:
      "A massive Yorkshire club with a long history of being slightly mad: Don Revie's 'dirty Leeds,' Bielsa's beautiful chaos, and a fanbase that treats every game like a war. Elland Road is one of the loudest grounds in the country and the city's working-class identity runs deep. A club for people who like their football intense and their loyalty unconditional.",
    scores: {
      gloryHunter: 0.4,
      heritage: 0.7,
      bigCity: 0.3,
      workingClass: 0.7,
      drama: 0.6,
    },
  },
  {
    id: "manchester-united",
    name: "Manchester United",
    city: "Manchester",
    league: "Premier League",
    description:
      "The most globally famous English club, with a trophy cabinet built by Sir Alex Ferguson and an identity built on 'attack, attack, attack.' Old Trafford is a basilica; United fans are spread across every continent and argue passionately about whether they're still themselves. Picking United means signing on to the world's biggest football story, with all the highs and identity crises that come with it.",
    scores: {
      gloryHunter: 0.8,
      heritage: 0.9,
      bigCity: 0.7,
      workingClass: 0.0,
      drama: 0.5,
    },
  },
  {
    id: "newcastle-united",
    name: "Newcastle United",
    city: "Newcastle",
    league: "Premier League",
    description:
      "One-club city, black-and-white religion: Newcastle is the most football-obsessed place in England, and St James' Park sits right in the middle of town for a reason. Saudi ownership has changed the trajectory but not the fanbase, who'd still pack the place out at any level. Picking Newcastle means getting a city, an accent, and a community all in one go.",
    scores: {
      gloryHunter: 0.3,
      heritage: 0.8,
      bigCity: 0.4,
      workingClass: 0.9,
      drama: 0.7,
    },
  },
  {
    id: "nottingham-forest",
    name: "Nottingham Forest",
    city: "Nottingham",
    league: "Premier League",
    description:
      "Back-to-back European champions in the late 70s and early 80s under Brian Clough, now a modern Premier League club still trading on that astonishing legacy. The City Ground sits on the Trent across from Notts County; the support is loyal, Midlands-proud, and prone to nostalgia. A club for people who believe in football's power to do the impossible occasionally.",
    scores: {
      gloryHunter: 0.3,
      heritage: 0.8,
      bigCity: 0.0,
      workingClass: 0.5,
      drama: 0.5,
    },
  },
  {
    id: "tottenham-hotspur",
    name: "Tottenham Hotspur",
    city: "London",
    league: "Premier League",
    description:
      "The most theatrical club in north London, where every season is a soap opera and every cup run ends in heartbreak. Spurs play attacking football, build glittering stadiums, and have a fanbase trained by decades of 'this might be the year' disappointment. Picking Tottenham means choosing aesthetic over silverware and drama over peace.",
    scores: {
      gloryHunter: 0.4,
      heritage: 0.8,
      bigCity: 0.9,
      workingClass: -0.3,
      drama: 0.9,
    },
  },
  {
    id: "west-ham-united",
    name: "West Ham United",
    city: "London",
    league: "Premier League",
    description:
      "East London, claret and blue, and the closest English football comes to a class identity. The Hammers carry the lineage of dock-workers and Cockney football, 'I'm Forever Blowing Bubbles,' and a fanbase that's never quite forgiven the move from Upton Park to the London Stadium. Picking West Ham means siding with the working-class half of the capital.",
    scores: {
      gloryHunter: -0.1,
      heritage: 0.7,
      bigCity: 0.7,
      workingClass: 0.8,
      drama: 0.6,
    },
  },
  {
    id: "wolverhampton-wanderers",
    name: "Wolverhampton Wanderers",
    city: "Wolverhampton",
    league: "Premier League",
    description:
      "Old gold and black in the Black Country — one of England's founding clubs, currently one of its quietest big stories. Molineux is steeped in history; the support is patient, local, and as attached to every promotion as to every relegation. A club for people whose loyalty doesn't need fashion to back it up.",
    scores: {
      gloryHunter: 0.1,
      heritage: 0.7,
      bigCity: -0.1,
      workingClass: 0.6,
      drama: 0.3,
    },
  },
];
