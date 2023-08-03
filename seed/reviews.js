const db = require('../db')
const Actor = require('../models/review.js')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {

    const review1 = await new Review({
        movieId: [theTrumanShow._id],
        score: 90,
        comment: `One of Jim Carrey's best works ever. Everyone has had that feeling that they're being watched every now and then, and this is such a fun and dystopian way to take that. Ed Harris' character 'Christof' also brings a very interesting angle for the viewer to see through and consider.`
    })

    const review2 = await new Review({
        movieId: [howTheGrinchStoleChristmas._id],
        score: 85,
        comment: `Another classic by the GOAT Jim Carrey. It's a bit weird at times, but only to fit within the charm of Dr. Seuss' style. A must-watch come every christmas!`
        })

    const review3 = await new Review({
        movieId: [howTheGrinchStoleChristmas._id],
        score: 5,
        comment: `It was a good movie....`,
        })

    const review4 = await new Review({
        movieId: yesMan._id,
        score: 10,
        comment: `Eckhart likes it. It was good.`
    })

    const review5 = await new Review({
        movieId: guardiansOfTheGalaxyVol3._id,
        score: 95,
        comment: `James Gunn's finale of the Guardians trilogy is no doubt the best of the bunch. Focusing on Rocket Raccoon as the center of the story, this story is shockingly deep and emotionally gut-wrenching at times.`
    })

    const review6 = await new Review({
        movieId: avengersInfinityWar._id,
        score: 85,
        comment: `There is no movie like Avengers: Infinity War...there has never been an event like it, even Endgame. Of the two movies, it's a clear winner for Infinity War for me!`
    })


}

const run = async () => {
    await main()
    db.close()
}
run()
