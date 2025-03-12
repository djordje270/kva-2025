export interface MovieModel {
  id: number;
  title: string;
  description: string;
  genre: GenreModel[];
  duration: string;
  director: string;
  actors: ActorModel[];
  releaseDate: string;
  showtime: string;
  picture: string;
  price: number;
}

export interface GenreModel {
  id: number
  name: string
}

export interface ActorModel {
  id: number
  name: string
}