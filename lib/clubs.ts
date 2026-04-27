import type { Club } from "./types";

// Data compiled around 2026-04-26.
// Score estimates are starting values — tune as the quiz gets stress-tested.
// Time-sensitive fields (manager, stadium capacity after renovations, active legends)
// are flagged with `// VERIFY` and need periodic refresh.
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
    primaryColor: "#6CABDD",
    nickname: "The Citizens",
    foundedYear: 1880,
    stadium: { name: "Etihad Stadium", capacity: 53400 }, // VERIFY (expansion in progress)
    manager: "Pep Guardiola", // VERIFY
    officialWebsite: "https://www.mancity.com",
    legends: [
      {
        name: "Colin Bell",
        bio: "Elegant midfielder of the late-1960s and early-1970s great City side, dubbed 'The King of the Kippax' by fans who voted him their player of the century.",
      },
      {
        name: "Vincent Kompany",
        bio: "Belgian center-back and captain of the modern dynasty — his thunderbolt against Leicester in 2019 effectively won City the league.",
      },
      {
        name: "Sergio Agüero",
        bio: "All-time top scorer and the man whose stoppage-time goal against QPR in 2012 won City their first Premier League title.",
      },
    ],
    anthem: {
      title: "Blue Moon",
      phrase: "Blue moon, you saw me standing alone",
    },
    mainRival: "Manchester United",
    history:
      "City spent decades as Manchester's quieter half, with the 1968 league title a distant memory by the 1990s. The 2008 Abu Dhabi takeover transformed them into the most successful English club of the 2010s and 2020s, and the Pep Guardiola era brought four consecutive Premier League titles and a long-awaited Champions League in 2023 — though the modern dominance has come with legal scrutiny that the fanbase still grapples with.",
    starterFact:
      "Every City fan knows '93:20' — the minute and second of Sergio Agüero's title-winning goal against QPR in 2012, ending a 44-year league drought.",
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
    primaryColor: "#C8102E",
    nickname: "The Reds",
    foundedYear: 1892,
    stadium: { name: "Anfield", capacity: 61276 },
    manager: "Arne Slot", // VERIFY
    officialWebsite: "https://www.liverpoolfc.com",
    legends: [
      {
        name: "Kenny Dalglish",
        bio: "Player, manager, and the spiritual heart of the club — won everything as both, and led Liverpool through the aftermath of the Hillsborough disaster.",
      },
      {
        name: "Steven Gerrard",
        bio: "Liverpool-born captain who dragged the club through the 2005 Champions League comeback in Istanbul, the most romantic European night in football history.",
      },
      {
        name: "Mohamed Salah",
        bio: "Modern-era talisman whose 2017 arrival rebuilt Liverpool into title winners; record-breaking African scorer in the Premier League.",
      },
    ],
    anthem: {
      title: "You'll Never Walk Alone",
      phrase: "Walk on, with hope in your heart",
    },
    mainRival: "Manchester United",
    history:
      "Liverpool's identity was forged through Bill Shankly's 1960s revolution and refined into European dominance under Bob Paisley, but the club's deepest emotional bonds were sealed by tragedy. The Hillsborough disaster of 1989, in which 97 supporters lost their lives, and the decades-long fight for justice that followed, made 'You'll Never Walk Alone' more than a song. Picking Liverpool means inheriting that solidarity.",
    starterFact:
      "The 'This Is Anfield' sign above the players' tunnel was installed by Bill Shankly in the 1960s to remind visiting teams what they were walking into — players still touch it for luck before every home match.",
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
    primaryColor: "#0057B8",
    nickname: "The Seagulls",
    foundedYear: 1901,
    stadium: { name: "American Express Stadium", capacity: 31876 },
    manager: "Fabian Hürzeler", // VERIFY
    officialWebsite: "https://www.brightonandhovealbion.com",
    legends: [
      {
        name: "Bobby Zamora",
        bio: "Early-2000s talisman who scored 83 goals in three seasons, the face of Brighton's recovery from near-extinction.",
      },
      {
        name: "Glenn Murray",
        bio: "Three-spell striker across more than a decade, the goalscoring constant through the club's rise from League One to the Premier League.",
      },
      {
        name: "Lewis Dunk",
        bio: "Brighton-born center-back who has spent his entire career at the club and captained them through their entire Premier League era.",
      },
    ],
    anthem: {
      title: "Sussex by the Sea",
      phrase: "Good old Sussex by the sea",
    },
    mainRival: "Crystal Palace",
    history:
      "Brighton spent the late 1990s on the brink of extinction, kicked out of the Goldstone Ground by speculators in 1997 and forced to play home games 70 miles away in Gillingham. Fans saved the club through grassroots fundraising and a decade of campaigning before the Amex Stadium opened in 2011, and Tony Bloom's data-driven ownership has since turned them into one of the smartest-run clubs in Europe.",
    starterFact:
      "The 'Seagulls' nickname came from a 1970s response to Crystal Palace fans chanting 'Eagles!' — Brighton supporters started replying 'Seagulls!' and it stuck as the official nickname.",
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
    primaryColor: "#EB172B",
    nickname: "The Black Cats",
    foundedYear: 1879,
    stadium: { name: "Stadium of Light", capacity: 49000 },
    manager: "Régis Le Bris", // VERIFY
    officialWebsite: "https://www.safc.com",
    legends: [
      {
        name: "Charlie Hurley",
        bio: "Irish center-back known as 'The King' at Roker Park in the 1960s — fans voted him Sunderland's player of the century.",
      },
      {
        name: "Niall Quinn",
        bio: "Towering Irish striker who later returned as chairman, the most beloved figure in modern Sunderland history through both highs and lows.",
      },
      {
        name: "Kevin Phillips",
        bio: "Won the European Golden Boot in 2000 with 30 league goals — still the only English winner of the award.",
      },
    ],
    anthem: {
      title: "Wise Men Say",
      phrase: "Wise men say, only fools rush in",
    },
    mainRival: "Newcastle United",
    history:
      "Sunderland were one of the dominant teams of pre-WWII English football, with six league titles, but the modern club is defined by a long, painful slide. Two relegations in three years (2017 and 2018) led to the 'Sunderland 'Til I Die' Netflix documentary, and yet the Stadium of Light kept filling up. Promotion back to the Premier League in 2025 came as the city's vindication for keeping the faith.",
    starterFact:
      "The Stadium of Light is built on the site of the old Wearmouth Colliery — the miner's lamp at the entrance honors the pit-head heritage of the city that founded the club.",
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
    primaryColor: "#DD2A2D",
    nickname: "The Red Dragons",
    foundedYear: 1864,
    stadium: { name: "Racecourse Ground", capacity: 13300 }, // VERIFY (expansion underway)
    manager: "Phil Parkinson", // VERIFY
    officialWebsite: "https://www.wrexhamafc.co.uk", // VERIFY
    legends: [
      {
        name: "Arfon Griffiths",
        bio: "Welsh international midfielder and the heart of Wrexham's 1970s side that reached the European Cup Winners' Cup quarter-final.",
      },
      {
        name: "Mickey Thomas",
        bio: "Scored the iconic free kick that knocked reigning champions Arsenal out of the FA Cup in 1992, one of the great cup upsets in English football history.",
      },
      {
        name: "Paul Mullin",
        bio: "Talisman striker of the Reynolds–McElhenney era whose goals fired the back-to-back promotions chronicled in the Disney+ documentary.",
      },
    ],
    anthem: {
      title: "Yma o Hyd",
      phrase: "Ry'n ni yma o hyd",
    },
    mainRival: "Chester FC",
    history:
      "Wrexham are the third-oldest professional football club in the world, founded in 1864, but spent decades drifting through the lower leagues before Hollywood arrived. Ryan Reynolds and Rob McElhenney bought the club in 2020, the Disney+ documentary 'Welcome to Wrexham' followed, and back-to-back promotions vaulted them up the pyramid. The fairy tale isn't finished yet.",
    starterFact:
      "The Racecourse Ground is the world's oldest international football stadium still in use — Wales played their first home international match here in 1877.",
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
    primaryColor: "#EF0107",
    nickname: "The Gunners",
    foundedYear: 1886,
    stadium: { name: "Emirates Stadium", capacity: 60704 },
    manager: "Mikel Arteta", // VERIFY
    officialWebsite: "https://www.arsenal.com",
    legends: [
      {
        name: "Tony Adams",
        bio: "Captain through three different decades and the embodiment of George Graham's 1990s back four — known simply as 'Mr Arsenal.'",
      },
      {
        name: "Dennis Bergkamp",
        bio: "Dutch playmaker of unmatched grace who refused to fly to away games, his goals and assists defined the football of Arsène Wenger's first great side.",
      },
      {
        name: "Thierry Henry",
        bio: "Arsenal's all-time top scorer and the talisman of the 'Invincibles' — the team that went the entire 2003-04 league season unbeaten.",
      },
    ],
    anthem: {
      title: "Good Old Arsenal",
      phrase: "Good old Arsenal, we're proud",
    },
    mainRival: "Tottenham Hotspur",
    history:
      "Arsenal moved from south to north London in 1913, planting the seed for the eternal Tottenham rivalry, and built much of their modern identity at Highbury under Herbert Chapman in the 1930s and George Graham in the late 1980s. The Arsène Wenger era (1996-2018) modernized English football and produced the only Premier League side to go undefeated — the 2003-04 'Invincibles' — before the move to the Emirates began a long and ongoing rebuild.",
    starterFact:
      "Herbert Chapman, Arsenal's manager in the 1930s, persuaded London Underground to rename the local Tube station from 'Gillespie Road' to simply 'Arsenal' in 1932 — making it the only Tube station in the world named after a football club.",
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
    primaryColor: "#670E36",
    nickname: "The Villans",
    foundedYear: 1874,
    stadium: { name: "Villa Park", capacity: 42640 }, // VERIFY (recent expansion)
    manager: "Unai Emery", // VERIFY
    officialWebsite: "https://www.avfc.co.uk",
    legends: [
      {
        name: "Peter Withe",
        bio: "Center-forward who scored the only goal of the 1982 European Cup Final against Bayern Munich, the highest peak in the club's history.",
      },
      {
        name: "Paul McGrath",
        bio: "Irish defender so beloved that Villa fans still chant 'Ooh Aah Paul McGrath' decades after he played his last game for the club.",
      },
      {
        name: "Gareth Barry",
        bio: "Long-serving midfielder and captain through the 2000s — over 400 appearances and a quiet model of consistency.",
      },
    ],
    anthem: {
      title: "The Villa Song",
      phrase: "We are Villa, the mighty mighty Villa",
    },
    mainRival: "Birmingham City",
    history:
      "Aston Villa were founder members of the Football League in 1888 and won seven league titles before the First World War, dominating early English football. The club's modern peak came in 1982 when they lifted the European Cup, beating Bayern Munich in Rotterdam — making them one of just five English clubs ever to win Europe's biggest prize. After decades drifting in mid-table, the Unai Emery era has brought European nights and ambition back to Villa Park.",
    starterFact:
      "Villa Park has hosted more FA Cup semi-finals than any other stadium in England — a quiet record reflecting how central the ground has been to English football for over a century.",
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
    primaryColor: "#DA291C",
    nickname: "The Cherries",
    foundedYear: 1899,
    stadium: { name: "Vitality Stadium", capacity: 11307 },
    manager: "Andoni Iraola", // VERIFY
    officialWebsite: "https://www.afcb.co.uk",
    legends: [
      {
        name: "Ted MacDougall",
        bio: "1970s goalscoring machine who once scored nine in a single FA Cup tie against Margate, still the club's record individual haul.",
      },
      {
        name: "Steve Fletcher",
        bio: "Two spells across nearly two decades — his goal in the final game of the 2008-09 season helped save Bournemouth from dropping out of the Football League.",
      },
      {
        name: "Eddie Howe",
        bio: "Local-boy player and manager who took the club from administration in League Two to the Premier League in seven seasons — the most beloved figure in Cherries history.",
      },
    ],
    anthem: {
      title: "When the Cherries Go Marching In",
      phrase: "Oh when the Cherries, go marching in",
    },
    mainRival: "Southampton",
    history:
      "Bournemouth were minutes from going out of business in 2008, dropped into administration with a points deduction, and survived in the Football League by a single goal in their final game. Local boy Eddie Howe took over as manager at age 31 and engineered the most improbable rise in modern English football — League Two to the Premier League in seven seasons.",
    starterFact:
      "The Vitality Stadium holds just 11,307 people, the smallest in the Premier League by a significant margin — for context, that's less than a sixth of Old Trafford's capacity.",
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
    primaryColor: "#E30613",
    nickname: "The Bees",
    foundedYear: 1889,
    stadium: { name: "Gtech Community Stadium", capacity: 17250 }, // VERIFY
    manager: "Thomas Frank", // VERIFY
    officialWebsite: "https://www.brentfordfc.com",
    legends: [
      {
        name: "Peter Gelson",
        bio: "Defender whose 514 appearances across the 1960s and 1970s remain the club's all-time record, the cornerstone of decades of lower-league grit.",
      },
      {
        name: "Kevin O'Connor",
        bio: "Brentford-born midfielder who spent his entire 14-year career at the club, captaining the side through the 2000s.",
      },
      {
        name: "Ivan Toney",
        bio: "His 31 league goals in 2020-21 fired Brentford's promotion to the Premier League, ending a 74-year top-flight absence.",
      },
    ],
    anthem: {
      title: "Hey Jude",
      phrase: "Na na na, hey Jude",
    },
    mainRival: "Fulham",
    history:
      "Brentford spent 75 years in the lower divisions after their last top-flight relegation in 1947, before Matthew Benham's data-driven ownership turned them into one of the smartest analytics-led clubs in football. Promotion to the Premier League in 2021 ended the long wait, and the move from beloved old Griffin Park to the modern Gtech Community Stadium marked the club's full transformation.",
    starterFact:
      "Griffin Park, Brentford's home for 116 years before they moved in 2020, was the only English football ground with a pub on each of its four corners — a tradition fans still mourn.",
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
    primaryColor: "#6C1D45",
    nickname: "The Clarets",
    foundedYear: 1882,
    stadium: { name: "Turf Moor", capacity: 21944 },
    manager: "Scott Parker", // VERIFY
    officialWebsite: "https://www.burnleyfootballclub.com",
    legends: [
      {
        name: "Jimmy McIlroy",
        bio: "Northern Irish playmaker and the heart of Burnley's 1959-60 league title-winning side — regarded by older fans as the greatest player in the club's history.",
      },
      {
        name: "Jimmy Adamson",
        bio: "Captain of the 1959-60 champions and FWA Footballer of the Year, later returned as manager — a one-club man across two careers.",
      },
      {
        name: "Ben Mee",
        bio: "Defensive captain through Burnley's modern Premier League era under Sean Dyche, the modern face of the club's grit-and-graft identity.",
      },
    ],
    anthem: {
      title: "No Nay Never",
      phrase: "No nay never, no nay never no more",
    },
    mainRival: "Blackburn Rovers",
    history:
      "Burnley were one of the twelve founding members of the Football League in 1888 and won the title in 1920-21 and again in 1959-60, but the modern era was defined by Sean Dyche's improbable nine-year tenure that took a small mill-town club into the Premier League and Europe. Turf Moor remains one of the most atmospheric grounds in the country, surrounded by the same Victorian-era streets as in the club's earliest days.",
    starterFact:
      "Turf Moor has a stand named after Jimmy McIlroy, Burnley's greatest player — the club renamed it while he was still alive in 2010, an honor almost unheard of in English football.",
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
    primaryColor: "#034694",
    nickname: "The Blues",
    foundedYear: 1905,
    stadium: { name: "Stamford Bridge", capacity: 40343 }, // VERIFY
    manager: "Enzo Maresca", // VERIFY
    officialWebsite: "https://www.chelseafc.com",
    legends: [
      {
        name: "Frank Lampard",
        bio: "Chelsea's all-time top scorer despite playing as a midfielder — 211 goals across 13 years and every domestic and European trophy possible.",
      },
      {
        name: "Didier Drogba",
        bio: "Ivorian striker and Champions League hero whose extra-time header and penalty in Munich won Chelsea their first European Cup in 2012.",
      },
      {
        name: "John Terry",
        bio: "Chelsea-born center-back and captain who lifted four Premier League titles, the most decorated defender in the club's history.",
      },
    ],
    anthem: {
      title: "Blue Is the Colour",
      phrase: "Blue is the colour, football is the game",
    },
    mainRival: "Tottenham Hotspur",
    history:
      "Chelsea spent most of the 20th century as a glamorous mid-table club, until Roman Abramovich's 2003 takeover transformed them into perennial contenders. The José Mourinho era brought a decade of trophies and the swagger to back them up, peaked by the 2012 Champions League win in Munich against Bayern. Ownership has since changed and stability has eluded them — but the spectacle hasn't.",
    starterFact:
      "Stamford Bridge originally opened in 1877 as an athletics venue — Chelsea were founded in 1905 specifically because the owners couldn't find a tenant football club to play there.",
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
    primaryColor: "#C4122E",
    nickname: "The Eagles",
    foundedYear: 1905,
    stadium: { name: "Selhurst Park", capacity: 25486 },
    manager: "Oliver Glasner", // VERIFY
    officialWebsite: "https://www.cpfc.co.uk",
    legends: [
      {
        name: "Jim Cannon",
        bio: "Center-back whose 663 appearances across 16 years remain Palace's all-time record, captain through the 1970s and 1980s.",
      },
      {
        name: "Ian Wright",
        bio: "Discovered as a 22-year-old amateur and turned into a goalscoring legend — Palace fans still consider him their greatest ever, even after his Arsenal years.",
      },
      {
        name: "Wilfried Zaha",
        bio: "Croydon-born winger and modern-era talisman whose two spells at the club made him the symbol of Palace's Premier League years.",
      },
    ],
    anthem: {
      title: "Glad All Over",
      phrase: "And I'm feeling glad all over",
    },
    mainRival: "Brighton & Hove Albion",
    history:
      "Crystal Palace have spent most of their history bouncing between divisions, but built a defining identity at Selhurst Park: the Holmesdale Fanatics ultras, flares, noise, and the 'M23 Derby' against Brighton. After a near-bankruptcy in 2010 saved by a fan-led consortium, the club has settled into a long Premier League run. The 2025 FA Cup Final win was their first major trophy and a long-overdue payoff for a fanbase built on patience.",
    starterFact:
      "The 'Crystal Palace' name comes from the Crystal Palace Exhibition Building of 1851 — the original football team was formed by employees of the building, making it one of the oldest names in English football despite the modern club only dating to 1905.",
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
    primaryColor: "#003399",
    nickname: "The Toffees",
    foundedYear: 1878,
    stadium: { name: "Hill Dickinson Stadium", capacity: 52888 }, // VERIFY (new stadium opened 2025, sponsorship name)
    manager: "David Moyes", // VERIFY
    officialWebsite: "https://www.evertonfc.com",
    legends: [
      {
        name: "Dixie Dean",
        bio: "Scored 60 league goals in the 1927-28 season, a record that has stood for nearly a century and is widely considered unbreakable.",
      },
      {
        name: "Neville Southall",
        bio: "Welsh goalkeeper and the heart of Everton's mid-1980s title-winning side — held the club's all-time appearance record at 751 games.",
      },
      {
        name: "Tim Cahill",
        bio: "Australian midfielder whose corner-flag celebrations and improbable headers made him the most beloved Everton player of the modern era.",
      },
    ],
    anthem: {
      title: "Grand Old Team",
      phrase: "It's a grand old team to play for",
    },
    mainRival: "Liverpool",
    history:
      "Everton are one of the founding members of the Football League and the most successful English club never to have been relegated for more than a brief spell — until the precarious modern era. Goodison Park stood for 133 years before the move to the new Bramley-Moore Dock waterfront stadium in 2025, and the fanbase carries a deep, defiant pride in being Liverpool's older, working-class half.",
    starterFact:
      "Everton played their home matches at Anfield from 1884 until 1892 — when a rent dispute caused them to leave, the directors who stayed founded a new club to occupy the ground: Liverpool FC.",
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
    primaryColor: "#000000",
    nickname: "The Cottagers",
    foundedYear: 1879,
    stadium: { name: "Craven Cottage", capacity: 28800 }, // VERIFY (post-Riverside Stand expansion)
    manager: "Marco Silva", // VERIFY
    officialWebsite: "https://www.fulhamfc.com",
    legends: [
      {
        name: "Johnny Haynes",
        bio: "England's first £100-a-week footballer and a one-club man, played 658 games for Fulham across 18 years and has a stand named after him.",
      },
      {
        name: "George Cohen",
        bio: "Fulham one-club man and 1966 World Cup winner with England — the club's most decorated international.",
      },
      {
        name: "Brian McBride",
        bio: "American striker beloved for his work-rate and aerial ability — Fulham's pub at Craven Cottage was named 'McBride's' in his honor.",
      },
    ],
    anthem: {
      title: "We Love You Fulham",
      phrase: "We love you Fulham, we do",
    },
    mainRival: "Chelsea",
    history:
      "Fulham are London's oldest established football club, founded in 1879, and have spent most of their history bouncing between divisions. Mohamed Al Fayed's ownership through the 2000s funded the rise to the Premier League and the 2009-10 run to the Europa League final under Roy Hodgson — a fairy-tale European campaign that remains the high-water mark for a club that has never quite escaped the shadow of its bigger London neighbors.",
    starterFact:
      "Craven Cottage is the only Premier League ground with an actual cottage in the corner — an Edwardian listed building where players' families watch from the balcony on matchday.",
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
    primaryColor: "#FFCD00",
    nickname: "The Whites",
    foundedYear: 1919,
    stadium: { name: "Elland Road", capacity: 37608 }, // VERIFY
    manager: "Daniel Farke", // VERIFY
    officialWebsite: "https://www.leedsunited.com",
    legends: [
      {
        name: "John Charles",
        bio: "1950s 'Gentle Giant' who excelled at both center-half and center-forward — widely regarded as one of the greatest British footballers ever.",
      },
      {
        name: "Billy Bremner",
        bio: "Captain of Don Revie's iconic 1960s and 1970s side, all-time appearance record holder, and the spiritual leader whose statue stands outside Elland Road.",
      },
      {
        name: "Lucas Radebe",
        bio: "South African center-back and captain of the Champions League-era side, fan-voted Leeds' player of the century in 2000.",
      },
    ],
    anthem: {
      title: "Marching On Together",
      phrase: "Marching on together, we're gonna see you win",
    },
    mainRival: "Manchester United",
    history:
      "Leeds United were dominant under Don Revie in the late 1960s and early 1970s, winning two league titles and earning the 'dirty Leeds' reputation — physical, ruthless, hated by everyone outside Yorkshire. After decades in the wilderness, including a financial collapse that dropped them to League One in 2007, the Marcelo Bielsa era restored both Premier League football and beautiful chaos to Elland Road.",
    starterFact:
      "Leeds wear all-white because Don Revie loved Real Madrid — he switched the club's colors in 1961 specifically to mimic the Spanish giants, and they've worn the same kit ever since.",
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
    primaryColor: "#DA020E",
    nickname: "The Red Devils",
    foundedYear: 1878,
    stadium: { name: "Old Trafford", capacity: 74310 }, // VERIFY
    manager: "Rúben Amorim", // VERIFY
    officialWebsite: "https://www.manutd.com",
    legends: [
      {
        name: "Sir Bobby Charlton",
        bio: "Survivor of the 1958 Munich air disaster who led United to the 1968 European Cup, all-time top scorer for both club and England for half a century.",
      },
      {
        name: "Eric Cantona",
        bio: "French talisman with the upturned collar — the catalyst for the 1990s Ferguson dynasty and the swagger of the modern Premier League era.",
      },
      {
        name: "Wayne Rooney",
        bio: "United's all-time top scorer who broke Charlton's record, the local-boy striker around whom the late-Ferguson and post-Ferguson sides were built.",
      },
    ],
    anthem: {
      title: "Glory Glory Man United",
      phrase: "Glory glory Man United",
    },
    mainRival: "Liverpool",
    history:
      "Manchester United's identity was forged by the Munich air disaster of February 1958, which killed eight 'Busby Babes' returning from a European Cup tie, and the rebuilding under Sir Matt Busby that culminated in winning the European Cup ten years later. Sir Alex Ferguson's 27-year reign brought 13 league titles and made United the most globally famous English club, before the post-Ferguson decade became a long, public struggle to find that identity again.",
    starterFact:
      "The 'Theatre of Dreams' nickname for Old Trafford was coined by Sir Bobby Charlton — the phrase stuck so completely that the club adopted it as the ground's official tagline.",
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
    primaryColor: "#241F20",
    nickname: "The Magpies",
    foundedYear: 1892,
    stadium: { name: "St James' Park", capacity: 52305 },
    manager: "Eddie Howe", // VERIFY
    officialWebsite: "https://www.newcastleunited.com",
    legends: [
      {
        name: "Jackie Milburn",
        bio: "Geordie striker known as 'Wor Jackie' who scored the goals that won Newcastle three FA Cups in the 1950s — beloved across generations on Tyneside.",
      },
      {
        name: "Kevin Keegan",
        bio: "Returned as manager and reignited Newcastle in the 1990s — his swashbuckling 'Entertainers' came within a Manchester United comeback of the 1995-96 title.",
      },
      {
        name: "Alan Shearer",
        bio: "Geordie boy who turned down Manchester United to come home and become the Premier League's all-time top scorer at his boyhood club.",
      },
    ],
    anthem: {
      title: "The Blaydon Races",
      phrase: "Aw me lads, you should've seen us gannin'",
    },
    mainRival: "Sunderland",
    history:
      "Newcastle United are arguably the most football-obsessed city in England — a one-club town where 50,000 fans will pack St James' Park regardless of league position. Kevin Keegan's swashbuckling 1995-96 'Entertainers,' who came within a Manchester United comeback of winning the title, defined the modern Geordie identity. The 2021 Saudi-led takeover ended decades of Mike Ashley's ownership and brought Champions League football back to Tyneside.",
    starterFact:
      "St James' Park sits literally in the middle of Newcastle's city center, on a hill above the train station — Geordies say there's nothing in the world like walking down through the city to a home matchday.",
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
    primaryColor: "#DD0000",
    nickname: "The Tricky Trees",
    foundedYear: 1865,
    stadium: { name: "City Ground", capacity: 30332 }, // VERIFY
    manager: "Nuno Espírito Santo", // VERIFY
    officialWebsite: "https://www.nottinghamforest.co.uk",
    legends: [
      {
        name: "Trevor Francis",
        bio: "English football's first £1 million player, scored the winning goal in the 1979 European Cup Final against Malmö in his first major final.",
      },
      {
        name: "John Robertson",
        bio: "Scottish winger and Brian Clough's most trusted creator — set up most of the European Cup goals and scored the winner in the 1980 final.",
      },
      {
        name: "Stuart Pearce",
        bio: "Hard-tackling left-back known as 'Psycho' — Forest's longest-serving captain in the modern era and the man whose England redemption at Euro 96 cemented his legend.",
      },
    ],
    anthem: {
      title: "Mull of Kintyre",
      phrase: "Mull of Kintyre, oh mist rolling",
    },
    mainRival: "Derby County",
    history:
      "Nottingham Forest were transformed by Brian Clough from a Second Division also-ran into European champions in just two seasons — winning back-to-back European Cups in 1979 and 1980 with a squad assembled on a fraction of their rivals' budgets. They are one of very few clubs in history to have won more European titles than league titles, and the 1980s Forest side remains the benchmark for what a great manager can do with limited resources.",
    starterFact:
      "The City Ground sits less than 300 yards across the River Trent from Notts County's Meadow Lane — they are the closest two professional football grounds anywhere in Europe.",
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
    primaryColor: "#132257",
    nickname: "Spurs",
    foundedYear: 1882,
    stadium: { name: "Tottenham Hotspur Stadium", capacity: 62850 },
    manager: "Ange Postecoglou", // VERIFY
    officialWebsite: "https://www.tottenhamhotspur.com",
    legends: [
      {
        name: "Jimmy Greaves",
        bio: "Spurs' record goalscorer for over 50 years with 266 goals — the greatest natural finisher in English football history.",
      },
      {
        name: "Glenn Hoddle",
        bio: "Visionary playmaker of the late 1970s and 1980s whose passing range and technique made him the most artful English midfielder of his era.",
      },
      {
        name: "Harry Kane",
        bio: "Spurs-academy striker who broke Greaves' all-time scoring record in 2023 and became the modern face of the club before leaving for Bayern Munich.",
      },
    ],
    anthem: {
      title: "Glory Glory Tottenham Hotspur",
      phrase: "Glory glory Tottenham Hotspur",
    },
    mainRival: "Arsenal",
    history:
      "Tottenham were the first 20th-century team to win the league and FA Cup double, in 1961, and the first British club to win a European trophy with the 1963 Cup Winners' Cup. The Bill Nicholson era set a standard of attractive football that remains the club's stated identity through long, painful trophy droughts. The Mauricio Pochettino years — including the 2019 Champions League final — restored hope before resuming the cycle of near-misses.",
    starterFact:
      "The Tottenham Hotspur Stadium has a fully retractable pitch — the football surface slides away to reveal an artificial turf for NFL games, the only stadium of its kind in Europe.",
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
    primaryColor: "#7A263A",
    nickname: "The Hammers",
    foundedYear: 1895,
    stadium: { name: "London Stadium", capacity: 62500 }, // VERIFY
    manager: "Graham Potter", // VERIFY
    officialWebsite: "https://www.whufc.com",
    legends: [
      {
        name: "Bobby Moore",
        bio: "England's 1966 World Cup-winning captain and one of the most respected defenders in football history — a one-club man for the heart of his career.",
      },
      {
        name: "Geoff Hurst",
        bio: "The only man ever to score a hat-trick in a World Cup final, his three goals in the 1966 final at Wembley remain the defining moment in English football.",
      },
      {
        name: "Trevor Brooking",
        bio: "Elegant midfielder and lifelong Hammer — his 17 years at the club spanned multiple FA Cup wins and decades of fans' affection.",
      },
    ],
    anthem: {
      title: "I'm Forever Blowing Bubbles",
      phrase: "I'm forever blowing bubbles",
    },
    mainRival: "Millwall",
    history:
      "West Ham contributed three players to England's 1966 World Cup-winning team — captain Bobby Moore, Martin Peters, and Geoff Hurst, the only man ever to score a hat-trick in a World Cup final. The club's identity was built around the Boleyn Ground in Upton Park, and the 2016 move to the London Stadium remains controversial with supporters who feel something essential was lost. The claret-and-blue, working-class East End identity persists regardless.",
    starterFact:
      "Bubbles are released from the corner flags before every West Ham home game — a literal manifestation of 'I'm Forever Blowing Bubbles,' the club anthem since the 1920s.",
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
    primaryColor: "#FDB913",
    nickname: "Wolves",
    foundedYear: 1877,
    stadium: { name: "Molineux", capacity: 31750 },
    manager: "Vítor Pereira", // VERIFY
    officialWebsite: "https://www.wolves.co.uk",
    legends: [
      {
        name: "Billy Wright",
        bio: "England's first 100-cap player and the captain of the three-time-champion Wolves side of the 1950s — the original football superstar of the post-war era.",
      },
      {
        name: "Derek Dougan",
        bio: "Northern Irish striker known as 'The Doog' — his goals and showmanship in the 1960s and 1970s made him one of the most beloved figures at Molineux.",
      },
      {
        name: "Steve Bull",
        bio: "Local-boy striker who scored 306 goals across 13 years, sticking with Wolves through their slide into the Fourth Division when bigger clubs came calling.",
      },
    ],
    anthem: {
      title: "Hi Ho Silver Lining",
      phrase: "And it's hi ho silver lining",
    },
    mainRival: "West Bromwich Albion",
    history:
      "Wolves' 1950s side, captained by Billy Wright and managed by Stan Cullis, won three league titles and played the famous floodlit friendlies at Molineux that inspired the creation of the European Cup. After decades of decline including a slide into the Fourth Division, Sir Jack Hayward's bankrolled rebuild in the 1990s and a Chinese-owned modern era have returned the Old Gold to top-flight football and European nights.",
    starterFact:
      "Molineux Stadium takes its name from Benjamin Molineux, an 18th-century industrialist who originally built the site as a private pleasure garden in 1750 — predating organized football itself by more than a century.",
  },
];
