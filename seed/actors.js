// All of the info referenced at time of typing is from the website 'themoviedb.org'. Credit and thanks to them for the incredible resources, including using the movie description word for word.

const db = require('../db')
const Actor = require('../models/actor.js')
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const jimCarrey = await new Actor({
        first_name: 'Jim',
        middle_name: 'Eugene',
        last_name: 'Carrey',
        known_credits: 124,
        age: 61,
        alive: true,
        gender: 'Male',
        place_of_birth: 'Newmarket, Ontario, Canada',
        d_o_birth: 'January 17th, 1962',
    })
    jimCarrey.save()

    const idrisElba = await new Actor({
            first_name: 'Idrissa',
            middle_name: 'Akuna',
            last_name: 'Elba',
            known_credits: 140,
            age: 50,
            alive: true,
            gender: 'Male',
            place_of_birth: 'London, England',
            d_o_birth: 'September 6th, 1972',
        })
        idrisElba.save()


    const morganFreeman = await new Actor({
            first_name: 'Morgan',
            middle_name: 'Porterfield',
            last_name: 'Freeman',
            suffix: 'Jr.',
            known_credits: 241,
            age: 86,
            alive: true,
            gender: 'Male',
            place_of_birth: 'Memphis, Tennessee, USA',
            d_o_birth: 'June 1st, 1937',
        })
        morganFreeman.save()

        const seanGunn = await new Actor({
            first_name: 'Sean',
            middle_name: 'Patrick',
            last_name: 'Gunn',
            known_credits: 52,
            age: 49,
            alive: true,
            gender: 'Male',
            place_of_birth: 'St. Louis, Missouri, USA',
            d_o_birth: 'May 22nd, 1974',
        })
        seanGunn.save()

        const chrisPratt = await new Actor({
            first_name: 'Chris',
            middle_name: 'Michael',
            last_name: 'Pratt',
            known_credits: 85,
            age: 44,
            alive: true,
            gender: 'Male',
            place_of_birth: 'Virginia, Minnesota, USA',
            d_o_birth: 'June 21st, 1979',
        })
        chrisPratt.save()


        const tomCruise = await new Actor({
            first_name: 'Thomas',
            middle_name: 'Cruise',
            last_name: 'Mapother',
            known_credits: 134,
            age: 61,
            alive: true,
            gender: 'Male',
            place_of_birth: 'Syracuse, New York, USA',
            d_o_birth: 'July 3rd, 1962',
        })
        tomCruise.save()


        const channingTatum = await new Actor({
            first_name: 'Channing',
            middle_name: 'Matthew',
            last_name: 'Tatum',
            known_credits: 84,
            age: 43,
            alive: true,
            gender: 'Male',
            place_of_birth: 'Cullman, Alabama, USA',
            d_o_birth: 'April 26th, 1980',
        })
        channingTatum.save()


        const leonardoDicaprio = await new Actor({
            first_name: 'Leonardo',
            middle_name: 'Wilhelm',
            last_name: 'DiCaprio',
            known_credits: 147,
            age: 48,
            alive: true,
            gender: 'Male',
            place_of_birth: 'Los Angeles, California, USA',
            d_o_birth: 'November 11th, 1974',
        })
        leonardoDicaprio.save()

        
        const jonahHill = await new Actor({
            first_name: 'Jonah',
            middle_name: 'Hill',
            last_name: 'Feldstein',
            known_credits: 94,
            age: 39,
            alive: true,
            gender: 'Male',
            place_of_birth: 'Los Angeles, California, USA',
            d_o_birth: 'December 20th, 1983',
        })
        jonahHill.save()


        const sethRogen = await new Actor({
            first_name: 'Seth',
            middle_name: 'Aaron',
            last_name: 'Rogen',
            known_credits: 176,
            age: 41,
            alive: true,
            gender: 'Male',
            place_of_birth: 'Vancouver, British Columbia, Canada',
            d_o_birth: 'April 15th, 1982',
        })
        sethRogen.save()


        const hughLaurie = await new Actor({
            first_name: 'James',
            middle_name: 'Hugh',
            last_name: 'Laurie',
            known_credits: 147,
            age: 64,
            alive: true,
            gender: 'Male',
            place_of_birth: 'Oxford, England, UK',
            d_o_birth: 'June 11th, 1959',
        })
        hughLaurie.save()
        
        const brittanyMurphy = await new Actor({
            first_name: 'Brittany',
            middle_name: 'Anne',
            last_name: 'Murphy',
            known_credits: 74,
            age: 32,
            alive: false,
            gender: 'Female',
            place_of_birth: 'Atlanta, Gerogia, USA',
            d_o_birth: 'June 11th, 1959',
            d_o_death: 'December 20th, 2009'
        })
        brittanyMurphy.save()


        const selenaGomez = await new Actor({
            first_name: 'Selena',
            middle_name: 'Marie',
            last_name: 'Gomez',
            known_credits: 92,
            age: 31,
            alive: true,
            gender: 'Female',
            place_of_birth: 'Grand Prairie, Texas, USA',
            d_o_birth: 'July 22nd, 1992',
        })
        selenaGomez.save()
        
        const drewBarrymore = await new Actor({
            first_name: 'Drew',
            middle_name: 'Blythe',
            last_name: 'Barrymore',
            known_credits: 155,
            age: 48,
            alive: true,
            gender: 'Female',
            place_of_birth: 'Culver City, California, USA',
            d_o_birth: 'February 22nd, 1975',
        })
        drewBarrymore.save()

        const anneHathaway = await new Actor({
            first_name: 'Anne',
            middle_name: 'Jacqueline',
            last_name: 'Hathaway',
            known_credits: 111,
            age: 40,
            alive: true,
            gender: 'Female',
            place_of_birth: 'Brooklyn, New York, USA',
            d_o_birth: 'November 12th, 1982',
        })
        anneHathaway.save()


        const dakotaFanning = await new Actor({
            first_name: 'Hannah',
            middle_name: 'Dakota',
            last_name: 'Fanning',
            known_credits: 85,
            age: 29,
            alive: true,
            gender: 'Female',
            place_of_birth: 'Conyers, Georgia, USA, USA',
            d_o_birth: 'February 23, 1994',
        })
        dakotaFanning.save()
}

const run = async () => {
    await main()
    db.close()
}
run()