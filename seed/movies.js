// All of the info referenced at time of typing is from the website 'themoviedb.org'. Credit and thanks to them for the incredible resources, including using the movie description word for word.

const db = require('../db')
const Movie = require('../models/movie.js')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const theTrumanShow = await new Movie({
        title: 'The Truman Show',
        actors: [jimCarrey._id],
        director: 'Peter Weir',
        runtime: 103,
        rating: 'PG-13',
        score: 81,
        year_released: 1998,
        budget: '$60,000,000',
        revenue: '$264,118,201.00',
        description: "Truman Burbank is the star of The Truman Show, a 24-hour-a-day reality TV show that broadcasts every aspect of his life without his knowledge. His entire life has been an unending soap opera for consumption by the rest of the world. And everyone he knows, including his wife and his best friend, is really an actor, paid to be part of his life.",
        reviews: []
    })
    theTrumanShow.save()

    const eternalSunshineOfTheSpotlessMind = await new Movie({
        actors: [jimCarrey._id],
        director: 'Michel Gondry',
        runtime: 208,
        rating: 'R',
        score: 81,
        year_released: 2004,
        budget: '$20,000,000',
        revenue: '$72,258,126.00',
        description: "Joel Barish, heartbroken that his girlfriend underwent a procedure to erase him from her memory, decides to do the same. However, as he watches his memories of her fade away, he realises that he still loves her, and may be too late to correct his mistake.",
        reviews: []
    })
    eternalSunshineOfTheSpotlessMind.save()

    const bruceAlmighty = await new Movie({
        actors: [jimCarrey._id, morganFreeman._id],
        director: 'Tom Shadyac',
        runtime: 101,
        rating: 'PG-13',
        score: 67,
        year_released: 2003,
        budget: '$80,000,000',
        revenue: '$484,592,874.00',
        description: "Bruce Nolan toils as a 'human interest' television reporter in Buffalo, N.Y., but despite his high ratings and the love of his beautiful girlfriend, Bruce remains unfulfilled. At the end of the worst day in his life, he angrily ridicules God—and the Almighty responds, endowing Bruce with all of His divine powers.",
        reviews: []
    })
    bruceAlmighty.save()

    const theMask = await new Movie({
        actors: [jimCarrey._id],
        director: ['Chuck Russel'],
        runtime: 101,
        rating: 'PG-13',
        score: 69,
        year_released: 1994,
        budget: '$23,000,000',
        revenue: '$351,583,407.00',
        description: "When timid bank clerk Stanley Ipkiss discovers a magical mask containing the spirit of the Norse god Loki, his entire life changes. While wearing the mask, Ipkiss becomes a supernatural playboy exuding charm and confidence which allows him to catch the eye of local nightclub singer Tina Carlyle. Unfortunately, under the mask's influence, Ipkiss also robs a bank, which angers junior crime lord Dorian Tyrell, whose goons get blamed for the heist.",
        reviews: []
    })
    theMask.save()

    const howTheGrinchStoleChristmas = await new Movie({
        actors: [jimCarrey._id],
        director: ['Ron Howard'],
        runtime: 104,
        rating: 'PG',
        score: 67,
        year_released: 2000,
        budget: '$123,000,000',
        revenue: '$345,823,040.00',
        description: "The Grinch decides to rob Whoville of Christmas - but a dash of kindness from little Cindy Lou Who and her family may be enough to melt his heart...",
        reviews: []
    })
    howTheGrinchStoleChristmas.save()

    const yesMan = await new Movie({
        actors: [jimCarrey._id],
        director: ['Peyton Reed'],
        runtime: 104,
        rating: 'PG-13',
        score: 67,
        year_released: 2008,
        budget: '$70,000,000',
        revenue: '$223,241,637.00',
        description: "Carl Allen has stumbled across a way to shake free of post-divorce blues and a dead-end job: embrace life and say yes to everything.",
        reviews: []
    })
    yesMan.save()

    const zootopia = await new Movie({
        actors: [idrisElba._id],
        director: ['Rich Moore', 'Byron Howard'],
        runtime: 109,
        rating: 'PG',
        score: 77,
        year_released: 2016,
        budget: '$150,000,000',
        revenue: '$1,023,784,195.00',
        description: "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
        reviews: []
    })
    zootopia.save()

    const theDarkTower = await new Movie({
        actors: [idrisElba._id],
        director: ['Nikolaj Arcel'],
        runtime: 95,
        rating: 'PG-13',
        score: 57,
        year_released: 2017,
        budget: '$60,000,000',
        revenue: '$113,231,078.00',
        description: "A boy haunted by visions of a parallel world aids its disillusioned guardian in preventing the destruction of the nexus of universes known as the Dark Tower.",
        reviews: []
    })
    theDarkTower.save()

    const pacificRim = await new Movie({
        actors: [idrisElba._id],
        director: ['Guillermo del Toro'],
        runtime: 131,
        rating: 'PG-13',
        score: 69,
        year_released: 2013,
        budget: '$180,000,000',
        revenue: '$411,002,906.00',
        description: "Using massive piloted robots to combat the alien threat, earth's survivors take the fight to the invading alien force lurking in the depths of the Pacific Ocean. Nearly defenseless in the face of the relentless enemy, the forces of mankind have no choice but to turn to two unlikely heroes who now stand as earth's final hope against the mounting apocalypse.",
        reviews: []
    })
    pacificRim.save()

    const theSuicideSquad = await new Movie({
        actors: [idrisElba._id, seanGunn._id],
        director: ['James Gunn'],
        runtime: 132,
        rating: 'R',
        score: 76,
        year_released: 2021,
        budget: '$185,000,000',
        revenue: '$168,717,425.00',
        description: "Supervillains Harley Quinn, Bloodsport, Peacemaker and a collection of nutty cons at Belle Reve prison join the super-secret, super-shady Task Force X as they are dropped off at the remote, enemy-infused island of Corto Maltese.",
        reviews: []
    })
    theSuicideSquad.save()

    const thor = await new Movie({
        actors: [idrisElba._id],
        director: ['Kenneth Branagh'],
        runtime: 115,
        rating: 'PG-13',
        score: 68,
        year_released: 2011,
        budget: '$150,000,000',
        revenue: '$449,326,618.00',
        description: "Against his father Odin's will, The Mighty Thor - a powerful but arrogant warrior god - recklessly reignites an ancient war. Thor is cast down to Earth and forced to live among humans as punishment. Once here, Thor learns what it takes to be a true hero when the most dangerous villain of his world sends the darkest forces of Asgard to invade Earth.",
        reviews: []
    })  
    thor.save()  

    const thorTheDarkWorld = await new Movie({
        actors: [idrisElba._id],
        director: ['Alan Taylor'],
        runtime: 112,
        rating: 'PG-13',
        score: 65,
        year_released: 2013,
        budget: '$170,000,000',
        revenue: '$644,783,140.00',
        description: "Thor fights to restore order across the cosmos… but an ancient race led by the vengeful Malekith returns to plunge the universe back into darkness. Faced with an enemy that even Odin and Asgard cannot withstand, Thor must embark on his most perilous and personal journey yet, one that will reunite him with Jane Foster and force him to sacrifice everything to save us all.",
        reviews: []
    })    
    thorTheDarkWorld.save()

    const thorRagnarok = await new Movie({
        actors: [idrisElba._id],
        director: ['Taika Waititi'],
        runtime: 131,
        rating: 'PG-13',
        score: 76,
        year_released: 2017,
        budget: '$180,000,000',
        revenue: '$855,301,806.00',
        description: "Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the destruction of his home-world and the end of Asgardian civilization, at the hands of a powerful new threat, the ruthless Hela.",
        reviews: []
    })  
    thorRagnarok.save() 
    
    const thorLoveAndThunder = await new Movie({
        actors: [idrisElba._id, chrisPratt._id, seanGunn._id],
        director: ['Taika Waititi'],
        runtime: 119,
        rating: 'PG-13',
        score: 65,
        year_released: 2022,
        budget: '$250,000,000',
        revenue: '$760,928,081.00',
        description: "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher’s vengeance and stop him before it’s too late.",
        reviews: []
    })   
    thorLoveAndThunder.save() 
    
    const theMountainBetweenUs = await new Movie({
        actors: [idrisElba._id],
        director: ['Hany Abu-Assad'],
        runtime: 109,
        rating: 'PG-13',
        score: 66,
        year_released: 2017,
        budget: '$35,000,000',
        revenue: '$62,832,209.00',
        description: "Stranded on a mountain after a tragic plane crash, two strangers must work together to endure the extreme elements of the remote, snow-covered terrain. When they realize help is not coming, they embark on a perilous journey across hundreds of miles of wilderness, pushing each other to survive and discovering their inner strength.",
        reviews: []
    })    
    theMountainBetweenUs.save()
    
    
    const theShawshankRedemption = await new Movie({
        actors: [morganFreeman._id],
        director: ['Frank Darabont'],
        runtime: 142,
        rating: 'R',
        score: 87,
        year_released: 1994,
        budget: '$25,000,000',
        revenue: '$28,341,469.00',
        description: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
        reviews: []
    })    
    theShawshankRedemption.save()
    
    const se7en = await new Movie({
        actors: [morganFreeman._id],
        director: ['David Fincher'],
        runtime: 147,
        rating: 'R',
        score: 84,
        year_released: 1995,
        budget: '$33,000,000',
        revenue: '$327,311,859.00',
        description: `Two homicide detectives are on a desperate hunt for a serial killer whose crimes are based on the "seven deadly sins" in this dark and haunting film that takes viewers from the tortured remains of one victim to the next. The seasoned Det. Sommerset researches each sin in an effort to get inside the killer's mind, while his novice partner, Mills, scoffs at his efforts to unravel the case.`,
        reviews: []
    })    
    se7en.save()
    
    const nowYouSeeMe = await new Movie({
        actors: [morganFreeman._id],
        director: [''],
        runtime: 132,
        rating: 'R',
        score: 76,
        year_released: 2021,
        budget: '$185,000,000',
        revenue: '$168,717,425.00',
        description: "An FBI agent and an Interpol detective track a team of illusionists who pull off bank heists during their performances and reward their audiences with the money.",
        reviews: []
    })    
    nowYouSeeMe.save()
    
    const oblivion = await new Movie({
        actors: [morganFreeman._id, tomCruise._id],
        director: [''],
        runtime: 0,
        rating: 'R',
        score: 0,
        year_released: 2020,
        budget: '$185,000,000',
        revenue: '$168,717,425.00',
        description: "Jack Harper is one of the last few drone repairmen stationed on Earth. Part of a massive operation to extract vital resources after decades of war with a terrifying threat known as the Scavs, Jack’s mission is nearly complete. His existence is brought crashing down when he rescues a beautiful stranger from a downed spacecraft. Her arrival triggers a chain of events that forces him to question everything he knows and puts the fate of humanity in his hands.",
        reviews: []
    })    
    oblivion.save()
    
    const batmanBegins = await new Movie({
        actors: [morganFreeman._id],
        director: ['Christopher Nolan'],
        runtime: 140,
        rating: 'PG-13',
        score: 77,
        year_released: 2005,
        budget: '$150,000,000',
        revenue: '$374,218,673.00',
        description: "Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City. Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.",
        reviews: []
    })    
    batmanBegins.save()
  
    const theDarkKnight = await new Movie({
        actors: [morganFreeman._id],
        director: ['Christopher Nolan'],
        runtime: 152,
        rating: 'PG-13',
        score: 85,
        year_released: 2008,
        budget: '$185,000,000',
        revenue: '$1,004,558,444.00',
        description: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
        reviews: []
    })    
    theDarkKnight.save()

    const theDarkKnightRises = await new Movie({
        actors: [morganFreeman._id],
        director: ['Christopher Nolan'],
        runtime: 165,
        rating: 'PG-13',
        score: 78,
        year_released: 2012,
        budget: '$250,000,000',
        revenue: '$1,081,041,287.00',
        description: "Following the death of District Attorney Harvey Dent, Batman assumes responsibility for Dent's crimes to protect the late attorney's reputation and is subsequently hunted by the Gotham City Police Department. Eight years later, Batman encounters the mysterious Selina Kyle and the villainous Bane, a new terrorist leader who overwhelms Gotham's finest. The Dark Knight resurfaces to protect a city that has branded him an enemy.",
        reviews: []
    })    
    theDarkKnightRises.save()
    
    const invictus = await new Movie({
        actors: [morganFreeman._id],
        director: ['Clint Eastwood'],
        runtime: 134,
        rating: 'PG-13',
        score: 72,
        year_released: 2009,
        budget: '$60,000,000',
        revenue: '$122,426,792.00',
        description: "Newly elected President Nelson Mandela knows his nation remains racially and economically divided in the wake of apartheid. Believing he can bring his people together through the universal language of sport, Mandela rallies South Africa's rugby team as they make their historic run to the 1995 Rugby World Cup Championship match.",
        reviews: []
    })  
    invictus.save()  
    
    const alongCameASpider = await new Movie({
        actors: [morganFreeman._id],
        director: ['Lee Tamahori'],
        runtime: 104,
        rating: 'R',
        score: 63,
        year_released: 2001,
        budget: '$60,000,000',
        revenue: '$105,178,561.00',
        description: "After the harrowing death of his partner, detective and best-selling author Alex Cross has retreated to the peace of retirement. But when a brilliant criminal kidnaps a senator's young daughter, Alex is lured back into action. Teamed with the Secret Service agent assigned to protect the missing girl, Alex follows a serpentine trail of clues that leads him to a stunning discovery - the kidnapper wants more than just ransom.",
        reviews: []
    })
    alongCameASpider.save()

    const millionDollarBaby = await new Movie({
        actors: [morganFreeman._id],
        director: ['Clint Eastwood'],
        runtime: 132,
        rating: 'PG-13',
        score: 80,
        year_released: 2004,
        budget: '$30,000,000',
        revenue: '$216,763,646.00',
        description: "Despondent over a painful estrangement from his daughter, trainer Frankie Dunn isn't prepared for boxer Maggie Fitzgerald to enter his life. But Maggie's determined to go pro and to convince Dunn and his cohort to help her.",
        reviews: []
    })
    millionDollarBaby.save()

    const warOfTheWorlds = await new Movie({
        actors: [tomCruise._id, morganFreeman._id, dakotaFanning._id, channingTatum._id],
        director: ['Steven Spielberg'],
        runtime: 117,
        rating: 'PG-13',
        score: 65,
        year_released: 2020,
        budget: '$132,000,000',
        revenue: '$603,873,119.00',
        description: "Ray Ferrier is a divorced dockworker and less-than-perfect father. Soon after his ex-wife and her new husband drop off his teenage son and young daughter for a rare weekend visit, a strange and powerful lightning storm touches down.",
        reviews: []
    })
    warOfTheWorlds.save()

    const theBucketList = await new Movie({
        actors: [morganFreeman._id],
        director: ['Bob Reiner'],
        runtime: 97,
        rating: 'PG-13',
        score: 72,
        year_released: 2007,
        budget: '$45,000,000',
        revenue: '$175,372,502.00',
        description: "Corporate billionaire Edward Cole and working class mechanic Carter Chambers are worlds apart. At a crossroads in their lives, they share a hospital room and discover they have two things in common: a desire to spend the time they have left doing everything they ever wanted to do and an unrealized need to come to terms with who they are. Together they embark on the road trip of a lifetime, becoming friends along the way and learning to live life to the fullest, with insight and humor.",
        reviews: []
    })
    theBucketList.save()

    const red = await new Movie({
        actors: [morganFreeman._id],
        director: ['Robert Schwentke'],
        runtime: 111,
        rating: 'PG-13',
        score: 67,
        year_released: 2010,
        budget: '$58,000,000',
        revenue: '$199,000,000.00',
        description: "After surviving an assault from a squad of hit men, retired CIA black ops agent Frank Moses reassembles his old team for an all-out war. Frank reunites with old Joe, crazy Marvin and wily Victoria to uncover a massive conspiracy that threatens their lives. Only their expert training will allow them to survive a near-impossible mission -- breaking into CIA headquarters.",
        reviews: []
    })
    red.save()

    const guardiansOfTheGalaxy = await new Movie({
        actors: [chrisPratt._id, seanGunn._id],
        director: ['James Gunn'],
        runtime: 121,
        rating: 'PG-13',
        score: 79,
        year_released: 2014,
        budget: '$170,000,000',
        revenue: '$772,776,600.00',
        description: "Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser.",
        reviews: []
    })
    guardiansOfTheGalaxy.save()

    const guardiansOfTheGalaxyVol2 = await new Movie({
        actors: [seanGunn._id, chrisPratt._id],
        director: ['James Gunn'],
        runtime: 137,
        rating: 'PG-13',
        score: 76,
        year_released: 2017,
        budget: '$200,000,000',
        revenue: '$863,756,051.00',
        description: "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
        reviews: []
    })
    guardiansOfTheGalaxyVol2.save()

    const guardiansOfTheGalaxyVol3 = await new Movie({
        actors: [seanGunn._id, chrisPratt._id],
        director: [''],
        runtime: 150,
        rating: 'PG-13',
        score: 81,
        year_released: 2023,
        budget: '$250,000,000',
        revenue: '$840,155,006.00',
        description: "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
        reviews: []
    })
    guardiansOfTheGalaxyVol3.save()  
    
    const avengersInfinityWar = await new Movie({
        actors: [seanGunn._id, chrisPratt._id],
        director: ['Joe Russo', 'Anthony Russo'],
        runtime: 149,
        rating: 'PG-13',
        score: 83,
        year_released: 2018,
        budget: '$300,000,000',
        revenue: '$2,052,415,039.00',
        description: "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
        reviews: []
    })
    avengersInfinityWar.save()

    const avengersEndgame = await new Movie({
        actors: [seanGunn._id, chrisPratt._id],
        director: [''],
        runtime: 150,
        rating: 'PG-13',
        score: 81,
        year_released: 2019,
        budget: '$356,000,000.00',
        revenue: '$2,794,731,755.00',
        description: "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
        reviews: []
    })
    avengersEndgame.save()

    const theLegoMovie = await new Movie({
        actors:[chrisPratt._id, morganFreeman._id, jonahHill._id, channingTatum._id],
        director: ['Phil Lord', 'Christopher Miller'],
        runtime: 100,
        rating: 'PG',
        score: 74,
        year_released: 2014,
        budget: '$60,000,000.00',
        revenue: '$469,160,692.00',
        description: "An ordinary Lego mini-figure, mistakenly thought to be the extraordinary MasterBuilder, is recruited to join a quest to stop an evil Lego tyrant from conquering the universe.",
        reviews: []
    })
    theLegoMovie.save()

    const jurrasicWorld = await new Movie({
        actors:[chrisPratt._id],
        director: ['Colin Trevorrow'],
        runtime: 124,
        rating: 'PG-13',
        score: 67,
        year_released: 2015,
        budget: '$150,000,000.00',
        revenue: '$1,671,537,444.00',
        description: "Twenty-two years after the events of Jurassic Park, Isla Nublar now features a fully functioning dinosaur theme park, Jurassic World, as originally envisioned by John Hammond.",
        reviews: []
    })
    jurrasicWorld.save()

    const jurrasicWorldFallenKingdom = await new Movie({
        actors:[chrisPratt._id],
        director: ['J. A. Bayona'],
        runtime: 129,
        rating: 'PG-13',
        score: 66,
        year_released: 2018,
        budget: '$170,000,000.00',
        revenue: '$1,310,466,296.00',
        description: "Three years after Jurassic World was destroyed, Isla Nublar now sits abandoned. When the island's dormant volcano begins roaring to life, Owen and Claire mount a campaign to rescue the remaining dinosaurs from this extinction-level event.",
        reviews: []
    })
    jurrasicWorldFallenKingdom.save()   

    const jurrasicWorldDominion = await new Movie({
        actors:[chrisPratt._id],
        director: ['Colin Trevorrow'],
        runtime: 147,
        rating: 'PG-13',
        score: 68,
        year_released: 2022,
        budget: '$165,000,000.00',
        revenue: '$1,001,978,080.00',
        description: "Four years after Isla Nublar was destroyed, dinosaurs now live—and hunt—alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators ona planet they now share with history's most fearsome creatures.",
        reviews: []
    })
    jurrasicWorldDominion.save()

    const theSuperMarioBrosMovie = await new Movie({
        actors:[chrisPratt._id, sethRogen._id],
        director: ['Michael Jelenic', 'Aaron Horvath'],
        runtime: 93,
        rating: 'PG',
        score: 78,
        year_released: 2023,
        budget: '$100,000,000.00',
        revenue: '$1,347,013,866.00',
        description: "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
        reviews: []
    })
    theSuperMarioBrosMovie.save()

    const edgeOfTomorrow = await new Movie({
        actors:[tomCruise._id],
        director: ['Doug Liman'],
        runtime: 114,
        rating: 'PG-13',
        score: 76,
        year_released: 2014,
        budget: '$170,000,000.00',
        revenue: '$370,541,256.00',
        description: "Major Bill Cage is an officer who has never seen a day of combat when he is unceremoniously demoted and dropped into combat. Cage is killed within minutes, managing to take an alpha alien down with him. He awakens back at the beginning of the same day and is forced to fight and die again... and again - as physical contact with the alien has thrown him into a time loop.",
        reviews: []
    })
    edgeOfTomorrow.save()

    const missionImpossible = await new Movie({
        actors:[tomCruise._id],
        director: ['Brian De Palma'],
        runtime: 0,
        rating: 'G',
        score: 0,
        year_released: 2000,
        budget: '$80,000,000.00',
        revenue: '$457,731,198.00',
        description: "When Ethan Hunt, the leader of a crack espionage team whose perilous operation has gone awry with no explanation, discovers that a mole has penetrated the CIA, he's surprised to learn that he's the No. 1 suspect. To clear his name, Hunt now must ferret out the real double agent and, in the process, even the score.",
        reviews: []
    })
    missionImpossible.save()
    
    const minorityReport = await new Movie({
        actors:[tomCruise._id],
        director: ['Steven Spielberg'],
        runtime: 145,
        rating: 'PG-13',
        score: 73,
        year_released: 2002,
        budget: '$102,000,000.00',
        revenue: '$358,372,926.00',
        description: "John Anderton is a top 'Precrime' cop in the late-21st century, when technology can predict crimes before they're committed. But Anderton becomes the quarry when another investigator targets him for a murder charge.",
        reviews: []
    })
    minorityReport.save()

    const topGun = await new Movie({
        actors:[tomCruise._id],
        director: ['Tony Scott'],
        runtime: 110,
        rating: 'PG',
        score: 70,
        year_released: 1986,
        budget: '$15,000,000.00',
        revenue: '$356,830,601.00',
        description: "For Lieutenant Pete 'Maverick' Mitchell and his friend and co-pilot Nick 'Goose' Bradshaw, being accepted into an elite training school for fighter pilots is a dream come true. But a tragedy, as well as personal demons, will threaten Pete's dreams of becoming an ace pilot.",
        reviews: []
    })
    topGun.save()

    const jumpStreet21 = await new Movie({
        actors:[channingTatum._id, jonahHill._id],
        director: ['Phil Lord', 'Christopher Miller'],
        runtime: 2012,
        rating: 'R',
        score: 69,
        year_released: 2012,
        budget: '$42,000,000.00',
        revenue: '$201,585,328.00',
        description: "In high school, Schmidt was a dork and Jenko was the popular jock. After graduation, both of them joined the police force and ended up as partners riding bicycles in the city park. Since they are young and look like high school students, they are assigned to an undercover unit to infiltrate a drug ring that is supplying high school students synthetic drugs.",
        reviews: []
    })
    jumpStreet21.save()

    const jumpStreet22 = await new Movie({
        actors:[channingTatum._id, jonahHill._id],
        director: ['Phil Lord', 'Christopher Miller'],
        runtime: 112,
        rating: 'R',
        score: 68,
        year_released: 2014,
        budget: '$50,000,000.00',
        revenue: '$331,333,876.00',
        description: "After making their way through high school (twice), big changes are in store for officers Schmidt and Jenko when they go deep undercover at a local college. But when Jenko meets a kindred spirit on the football team, and Schmidt infiltrates the bohemian art major scene, they begin to question their partnership. Now they don't have to just crack the case - they have to figure out if they can have a mature relationship. If these two overgrown adolescents can grow from freshmen into real men, college might be the best thing that ever happened to them.",
        reviews: []
    })
    jumpStreet22.save()


    const jupiterAscending = await new Movie({
        actors:[channingTatum._id],
        director: ['Lana Wachowski', 'Lilly Wachowski'],
        runtime: 127,
        rating: 'PG-13',
        score: 54,
        year_released: 2015,
        budget: '$176,000,000.00',
        revenue: '$183,987,723.00',
        description: "In a universe where human genetic material is the most precious commodity, an impoverished young Earth woman becomes the key to strategic maneuvers and internal strife within a powerful dynasty…",
        reviews: []
    })
    jupiterAscending.save()

    const whiteHouseDown = await new Movie({
        actors:[channingTatum._id],
        director: ['Roland Emmerich'],
        runtime: 131,
        rating: 'PG-13',
        score: 64,
        year_released: 2013,
        budget: '$150,000,000.00',
        revenue: '$205,366,737.00',
        description: "Capitol Policeman John Cale has just been denied his dream job with the Secret Service of protecting President James Sawyer. Not wanting to let down his little girl with the news, he takes her on a tour of the White House, when the complex is overtaken by a heavily armed paramilitary group. Now, with the nation's government falling into chaos and time running out, it's up to Cale to save the president, his daughter, and the country.",
        reviews: []
    })
    whiteHouseDown.save()

    const giJoe = await new Movie({
        actors:[channingTatum._id],
        director: ['Stephen Sommers'],
        runtime: 118,
        rating: 'PG-13',
        score: 58,
        year_released: 2009,
        budget: '$175,000,000.00',
        revenue: '$302,469,017.00',
        description: "From the Egyptian desert to deep below the polar ice caps, the elite G.I. JOE team uses the latest in next-generation spy and military equipment to fight the corrupt arms dealer Destro and the growing threat of the mysterious Cobra organization to prevent them from plunging the world into chaos.",
        reviews: []
    })
    giJoe.save()

    const inception = await new Movie({
        actors:[leonardoDicaprio._id],
        director: ['Christopher Nolan'],
        runtime: 148,
        rating: 'PG-13',
        score: 84,
        year_released: 2010,
        budget: '$160,000,000.00',
        revenue: '$825,532,764.00',
        description: `Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: "inception", the implantation of another person's idea into a target's subconscious.`,
        reviews: []
    })
    inception.save()

    const titanic = await new Movie({
        actors:[leonardoDicaprio._id],
        director: ['James Cameron'],
        runtime: 194,
        rating: 'PG-13',
        score: 79,
        year_released: 1997,
        budget: '$200,000,000.00',
        revenue: '$2,264,162,353.00',
        description: "101-year-old Rose DeWitt Bukater tells the story of her life aboard the Titanic, 84 years later. A young Rose boards the ship with her mother and fiancé. Meanwhile, Jack Dawson and Fabrizio De Rossi win third-class tickets aboard the ship. Rose tells the whole story from Titanic's departure through to its death—on its first and last voyage—on April 15, 1912.",
        reviews: []
    })
    titanic.save()

    const theRevenant = await new Movie({
        actors:[leonardoDicaprio._id],
        director: ['Alejandro González Iñárritu'],
        runtime: 157,
        rating: 'R',
        score: 75,
        year_released: 2015,
        budget: '$135,000,000.00',
        revenue: '$532,950,503.00',
        description: "In the 1820s, a frontiersman, Hugh Glass, sets out on a path of vengeance against those who left him for dead after a bear mauling.",
        reviews: []
    })
    theRevenant.save()

    const theGreatGatsby = await new Movie({
        actors:[leonardoDicaprio._id],
        director: ['Baz Luhrmann'],
        runtime: 143,
        rating: 'PG-13',
        score: 74,
        year_released: 2013,
        budget: '$105,000,000.00',
        revenue: '$351,040,419.00',
        description: "An adaptation of F. Scott Fitzgerald's Long Island-set novel, where Midwesterner Nick Carraway is lured into the lavish world of his neighbor, Jay Gatsby. Soon enough, however, Carraway will see through the cracks of Gatsby's nouveau riche existence, where obsession, madness, and tragedy await.",
        reviews: []
    })
    theGreatGatsby.save()

    const theWolfOfWallStreet = await new Movie({
        actors:[leonardoDicaprio._id, jonahHill._id],
        director: ['Martin Scorsese'],
        runtime: 180,
        rating: 'R',
        score: 80,
        year_released: 2013,
        budget: '$100,000,000.00',
        revenue: '$392,000,000.00',
        description: "A New York stockbroker refuses to cooperate in a large securities fraud case involving corruption on Wall Street, corporate banking world and mob infiltration. Based on Jordan Belfort's autobiography.",
        reviews: []
    })
    theWolfOfWallStreet.save()

    const thisIsTheEnd = await new Movie({
        actors:[sethRogen._id, jonahHill._id],
        director: ['Seth Rogen', 'Evan Goldberg'],
        runtime: 107,
        rating: 'R',
        score: 62,
        year_released: 2000,
        budget: '$32,000,000.00',
        revenue: '$126,041,322.00',
        description: "While attending a party at James Franco's house, Seth Rogen, Jay Baruchel and many other celebrities are faced with the apocalypse.",
        reviews: []
    })
    thisIsTheEnd.save()

    const howToTrainYourDragon = await new Movie({
        actors:[jonahHill._id],
        director: ['Dean DeBlois', 'Chris Sanders'],
        runtime: 98,
        rating: 'PG',
        score: 78,
        year_released: 2010,
        budget: '$165,000,000.00',
        revenue: '$494,879,471.00',
        description: "As the son of a Viking leader on the cusp of manhood, shy Hiccup Horrendous Haddock III faces a rite of passage: he must kill a dragon to prove his warrior mettle. But after downing a feared dragon, he realizes that he no longer wants to destroy it, and instead befriends the beast – which he names Toothless – much to the chagrin of his warrior father.",
        reviews: []
    })
    howToTrainYourDragon.save()

    const sausageParty = await new Movie({
        actors:[sethRogen._id, jonahHill._id],
        director: ['Greg Tiernan', 'Conrad Vernon'],
        runtime: 89,
        rating: 'R',
        score: 57,
        year_released: 2016,
        budget: '$19,000,000.00',
        revenue: '$140,705,322.00',
        description: "Frank leads a group of supermarket products on a quest to discover the truth about their existence and what really happens when they become chosen to leave the grocery store.",
        reviews: []
    })
    sausageParty.save()

    const neighbors = await new Movie({
        actors:[sethRogen._id],
        director: ['Nicholas Stoller'],
        runtime: 97,
        rating: 'R',
        score: 62,
        year_released: 2014,
        budget: '$18,000,000.00',
        revenue: '$270,665,134.00',
        description: "A couple with a newborn baby face unexpected difficulties after they are forced to live next to a fraternity house.",
        reviews: []
    })
    neighbors.save()

    const monstersVsAliens = await new Movie({
        actors:[hughLaurie._id, sethRogen._id],
        director: ['Conrad Vernon', 'Rob Leterman'],
        runtime: 94,
        rating: 'PG',
        score: 62,
        year_released: 2009,
        budget: '$175,000,000.00',
        revenue: '$381,509,870.00',
        description: "When Susan Murphy is unwittingly clobbered by a meteor full of outer space gunk on her wedding day, she mysteriously grows to 49-feet-11-inches. The military jumps into action and captures Susan, secreting her away to a covert government compound. She is renamed Ginormica and placed in confinement with a ragtag group of Monsters...",
        reviews: []
    })
    monstersVsAliens.save()
}

const run = async () => {
    await main()
    db.close()
}
run()

//template

// const movie = await new Movie({
//     actors:[],
//     director: [''],
//     runtime: 0,
//     rating: 'G',
//     score: 0,
//     year_released: 2000,
//     budget: '$x,000,000.00',
//     revenue: '$',
//     description: "",
//     review: []
// })