import { MovieModel } from "../models/movie.model";

export class MovieService {
    static getMovies(): MovieModel[] {
      return [
        {
          id: 1,
          title: 'Avatar: The Way of Water',
          description: 'Jake Sully and Neytiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the different regions of Pandora.',
          genre: [
            { id: 1, name: 'Sci-Fi' },
            { id: 2, name: 'Adventure' }
          ],
          duration: '192 minutes',
          director: 'James Cameron',
          actors: [
            { id: 1, name: 'Sam Worthington' },
            { id: 2, name: 'Zoe Saldana' },
            { id: 3, name: 'Sigourney Weaver' },
            { id: 4, name: 'Stephen Lang' }
          ],
          releaseDate: '2022-12-16',
          showtime: '2025-03-10 19:00',
          picture: '/avatar.jpg'
        },
        {
          id: 2,
          title: 'The Batman',
          description: 'Batman ventures into Gotham City’s underworld when a sadistic killer leaves behind a trail of cryptic clues.',
          genre: [
            { id: 3, name: 'Action' },
            { id: 4, name: 'Crime' },
            { id: 5, name: 'Drama' }
          ],
          duration: '155 minutes',
          director: 'Matt Reeves',
          actors: [
            { id: 5, name: 'Robert Pattinson' },
            { id: 6, name: 'Zoë Kravitz' },
            { id: 7, name: 'Colin Farrell' },
            { id: 8, name: 'Paul Dano' }
          ],
          releaseDate: '2022-03-04',
          showtime: '2025-03-11 20:00',
          picture: '/batman.jpg'
        },
        {
          id: 3,
          title: 'Spider-Man: No Way Home',
          description: 'With Spider-Man’s identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous enemies from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.',
          genre: [
            { id: 3, name: 'Action' },
            { id: 2, name: 'Adventure' },
            { id: 1, name: 'Sci-Fi' }
          ],
          duration: '148 minutes',
          director: 'Jon Watts',
          actors: [
            { id: 9, name: 'Tom Holland' },
            { id: 10, name: 'Zendaya' },
            { id: 11, name: 'Benedict Cumberbatch' },
            { id: 12, name: 'Alfred Molina' }
          ],
          releaseDate: '2021-12-17',
          showtime: '2025-03-12 18:30',
          picture: '/spider-man.jpg'
        },
        {
          id: 4,
          title: 'Dune',
          description: 'A noble family becomes embroiled in a war for control of the galaxy’s most valuable asset while its heir becomes troubled by visions of a dark future.',
          genre: [
            { id: 3, name: 'Action' },
            { id: 2, name: 'Adventure' },
            { id: 6, name: 'Drama' }
          ],
          duration: '155 minutes',
          director: 'Denis Villeneuve',
          actors: [
            { id: 13, name: 'Timothée Chalamet' },
            { id: 14, name: 'Rebecca Ferguson' },
            { id: 15, name: 'Oscar Isaac' },
            { id: 16, name: 'Zendaya' }
          ],
          releaseDate: '2021-10-22',
          showtime: '2025-03-13 21:00',
          picture: '/dune.jpg'
        },
        {
          id: 5,
          title: 'The Matrix Resurrections',
          description: 'Neo is back in this long-awaited sequel to The Matrix franchise, where he has to face the consequences of his past actions and the system that controls reality.',
          genre: [
            { id: 3, name: 'Action' },
            { id: 1, name: 'Sci-Fi' }
          ],
          duration: '148 minutes',
          director: 'Lana Wachowski',
          actors: [
            { id: 17, name: 'Keanu Reeves' },
            { id: 18, name: 'Carrie-Anne Moss' },
            { id: 19, name: 'Yahya Abdul-Mateen II' },
            { id: 20, name: 'Jessica Henwick' }
          ],
          releaseDate: '2021-12-22',
          showtime: '2025-03-14 19:30',
          picture: '/matrix.jpg'
        },
        {
          id: 6,
          title: 'Jurassic World: Dominion',
          description: 'The end of the Jurassic era has arrived as dinosaurs now live freely among humans. Owen and Claire set out to track down a dangerous dinosaur that threatens global safety.',
          genre: [
            { id: 3, name: 'Action' },
            { id: 2, name: 'Adventure' },
            { id: 1, name: 'Sci-Fi' }
          ],
          duration: '146 minutes',
          director: 'Colin Trevorrow',
          actors: [
            { id: 21, name: 'Chris Pratt' },
            { id: 22, name: 'Bryce Dallas Howard' },
            { id: 23, name: 'Laura Dern' },
            { id: 24, name: 'Jeff Goldblum' }
          ],
          releaseDate: '2022-06-10',
          showtime: '2025-03-15 18:00',
          picture: '/jurassicworld.png'
        },
        {
          id: 7,
          title: 'Black Panther: Wakanda Forever',
          description: 'The people of Wakanda fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.',
          genre: [
            { id: 3, name: 'Action' },
            { id: 2, name: 'Adventure' },
            { id: 6, name: 'Drama' }
          ],
          duration: '161 minutes',
          director: 'Ryan Coogler',
          actors: [
            { id: 25, name: 'Letitia Wright' },
            { id: 26, name: 'Lupita Nyong\'o' },
            { id: 27, name: 'Danai Gurira' },
            { id: 28, name: 'Winston Duke' }
          ],
          releaseDate: '2022-11-11',
          showtime: '2025-03-16 19:45',
          picture: '/blackpanther.jpg'
        },
        {
          id: 8,
          title: 'No Time to Die',
          description: 'James Bond comes out of retirement to stop a dangerous criminal organization and uncover the mystery behind a new and deadly weapon.',
          genre: [
            { id: 3, name: 'Action' },
            { id: 2, name: 'Adventure' },
            { id: 7, name: 'Thriller' }
          ],
          duration: '163 minutes',
          director: 'Cary Joji Fukunaga',
          actors: [
            { id: 29, name: 'Daniel Craig' },
            { id: 30, name: 'Rami Malek' },
            { id: 31, name: 'Léa Seydoux' },
            { id: 32, name: 'Lashana Lynch' }
          ],
          releaseDate: '2021-09-30',
          showtime: '2025-03-17 20:30',
          picture: '/notimetodie.jpg'
        },
        {
          id: 9,
          title: 'The Flash',
          description: 'Barry Allen uses his superpowers to travel back in time and change the course of history, but his actions have unintended consequences that threaten the fabric of reality.',
          genre: [
            { id: 3, name: 'Action' },
            { id: 2, name: 'Adventure' },
            { id: 8, name: 'Fantasy' }
          ],
          duration: '145 minutes',
          director: 'Andy Muschietti',
          actors: [
            { id: 33, name: 'Ezra Miller' },
            { id: 34, name: 'Michael Keaton' },
            { id: 35, name: 'Ben Affleck' },
            { id: 36, name: 'Sasha Calle' }
          ],
          releaseDate: '2023-06-16',
          showtime: '2025-03-18 22:00',
          picture: '/theflash.jpg'
        },
        {
          id: 10,
          title: 'Mission: Impossible – Fallout',
          description: 'Ethan Hunt and his IMF team must track down stolen plutonium while facing a new threat in the form of a deadly rogue agent.',
          genre: [
            { id: 3, name: 'Action' },
            { id: 2, name: 'Adventure' },
            { id: 7, name: 'Thriller' }
          ],
          duration: '147 minutes',
          director: 'Christopher McQuarrie',
          actors: [
            { id: 37, name: 'Tom Cruise' },
            { id: 38, name: 'Henry Cavill' },
            { id: 39, name: 'Ving Rhames' },
            { id: 40, name: 'Simon Pegg' }
          ],
          releaseDate: '2018-07-27',
          showtime: '2025-03-19 20:15',
          picture: '/missionimpossible.jpg'
        }
      ];
    }
  }