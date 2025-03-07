import { CinemaModel } from "../models/cinema.model";

export class CinemaService {
    static getCinemas(): CinemaModel[] {
        return [
            {
                id: 1,
                name: 'Cineplexx - Beograd',
                countryOfOrigin: 'Serbia',
                website: 'https://www.cineplexx.rs'
            },
            {
                id: 2,
                name: 'Cineplexx - Novi Sad',
                countryOfOrigin: 'Serbia',
                website: 'https://www.cineplexx.rs'
            },
            {
                id: 3,
                name: 'Cineplexx - Niš',
                countryOfOrigin: 'Serbia',
                website: 'https://www.cineplexx.rs'
            }
        ]
    }

    static getCinemaeById(id: number) {
        return this.getCinemas().find(cinema=>cinema.id === id)
    }
}