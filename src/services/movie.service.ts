import { MovieModel } from "../models/movie.model";

export class MovieService {
    static getMovies(): MovieModel[] {
        return [
            {
                id: 1,
                title: 'Avatar: The Way of Water',
                description: 'Jake Sully and Neytiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the different regions of Pandora.',
                genre: 'Sci-Fi, Adventure',
                duration: '192 minutes',
                director: 'James Cameron',
                actors: 'Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang',
                releaseDate: '2022-12-16',
                showtime: '2025-03-10 19:00',
                picture: '/avatar.jpg'
            },
            {
                id: 2,
                title: 'The Batman',
                description: 'Batman ventures into Gotham City’s underworld when a sadistic killer leaves behind a trail of cryptic clues.',
                genre: 'Action, Crime, Drama',
                duration: '155 minutes',
                director: 'Matt Reeves',
                actors: 'Robert Pattinson, Zoë Kravitz, Colin Farrell, Paul Dano',
                releaseDate: '2022-03-04',
                showtime: '2025-03-11 20:00',
                picture: '/batman.jpg'
            },
            {
                id: 3,
                title: 'Spider-Man: No Way Home',
                description: 'With Spider-Man’s identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous enemies from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.',
                genre: 'Action, Adventure, Sci-Fi',
                duration: '148 minutes',
                director: 'Jon Watts',
                actors: 'Tom Holland, Zendaya, Benedict Cumberbatch, Alfred Molina',
                releaseDate: '2021-12-17',
                showtime: '2025-03-12 18:30',
                picture: '/spider-man.jpg'
            },
            {
                id: 4,
                title: 'Dune',
                description: 'A noble family becomes embroiled in a war for control of the galaxy’s most valuable asset while its heir becomes troubled by visions of a dark future.',
                genre: 'Action, Adventure, Drama',
                duration: '155 minutes',
                director: 'Denis Villeneuve',
                actors: 'Timothée Chalamet, Rebecca Ferguson, Oscar Isaac, Zendaya',
                releaseDate: '2021-10-22',
                showtime: '2025-03-13 21:00',
                picture: '/dune.jpg'
            },
            {
                id: 5,
                title: 'The Matrix Resurrections',
                description: 'Neo is back in this long-awaited sequel to The Matrix franchise, where he has to face the consequences of his past actions and the system that controls reality.',
                genre: 'Action, Sci-Fi',
                duration: '148 minutes',
                director: 'Lana Wachowski',
                actors: 'Keanu Reeves, Carrie-Anne Moss, Yahya Abdul-Mateen II, Jessica Henwick',
                releaseDate: '2021-12-22',
                showtime: '2025-03-14 19:30',
                picture: '/matrix.jpg'
            },
            {
                id: 6,
                title: 'Jurassic World: Dominion',
                description: 'The end of the Jurassic era has arrived as dinosaurs now live freely among humans. Owen and Claire set out to track down a dangerous dinosaur that threatens global safety.',
                genre: 'Action, Adventure, Sci-Fi',
                duration: '146 minutes',
                director: 'Colin Trevorrow',
                actors: 'Chris Pratt, Bryce Dallas Howard, Laura Dern, Jeff Goldblum',
                releaseDate: '2022-06-10',
                showtime: '2025-03-15 18:00',
                picture: '/jurassicworld.png'
            },
            {
                id: 7,
                title: 'Black Panther: Wakanda Forever',
                description: 'The people of Wakanda fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.',
                genre: 'Action, Adventure, Drama',
                duration: '161 minutes',
                director: 'Ryan Coogler',
                actors: 'Letitia Wright, Lupita Nyong\'o, Danai Gurira, Winston Duke',
                releaseDate: '2022-11-11',
                showtime: '2025-03-16 19:45',
                picture: '/blackpanther.jpg'
            },
            {
                id: 8,
                title: 'No Time to Die',
                description: 'James Bond comes out of retirement to stop a dangerous criminal organization and uncover the mystery behind a new and deadly weapon.',
                genre: 'Action, Adventure, Thriller',
                duration: '163 minutes',
                director: 'Cary Joji Fukunaga',
                actors: 'Daniel Craig, Rami Malek, Léa Seydoux, Lashana Lynch',
                releaseDate: '2021-09-30',
                showtime: '2025-03-17 20:30',
                picture: '/notimetodie.jpg'
            },
            {
                id: 9,
                title: 'The Flash',
                description: 'Barry Allen uses his superpowers to travel back in time and change the course of history, but his actions have unintended consequences that threaten the fabric of reality.',
                genre: 'Action, Adventure, Fantasy',
                duration: '145 minutes',
                director: 'Andy Muschietti',
                actors: 'Ezra Miller, Michael Keaton, Ben Affleck, Sasha Calle',
                releaseDate: '2023-06-16',
                showtime: '2025-03-18 22:00',
                picture: '/theflash.jpg'
            },
            {
                id: 10,
                title: 'Mission: Impossible – Fallout',
                description: 'Ethan Hunt and his IMF team must track down stolen plutonium while facing a new threat in the form of a deadly rogue agent.',
                genre: 'Action, Adventure, Thriller',
                duration: '147 minutes',
                director: 'Christopher McQuarrie',
                actors: 'Tom Cruise, Henry Cavill, Ving Rhames, Simon Pegg',
                releaseDate: '2018-07-27',
                showtime: '2025-03-19 20:15',
                picture: '/missionimpossible.jpg'
            }
        ]
    }
}