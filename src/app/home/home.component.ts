import { Component } from '@angular/core';
import { FlightService } from '../../services/flight.service';
import { NgFor, NgIf } from '@angular/common';
import { AxiosError } from 'axios';
import { FlightModel } from '../../models/flight.model';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { UtilsService } from '../../services/utils.service';
import { LoadingComponent } from "../loading/loading.component";
import { RouterLink } from '@angular/router';
import { MovieModel } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  imports: [NgIf, NgFor, MatButtonModule, MatCardModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // Uzimamo sve filmove sa servisa
  dataSource: MovieModel[] = this.getRandomMovies();

  // Funkcija koja vraća 3 nasumično izabrana filma
  private getRandomMovies(): MovieModel[] {
    const allMovies: MovieModel[] = MovieService.getMovies(); // Pretpostavljam da uzimaš sve filmove sa servisa

    // Mešanje niza koristeći Fisher-Yates algoritam
    for (let i = allMovies.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allMovies[i], allMovies[j]] = [allMovies[j], allMovies[i]]; // Swap elemenata
    }

    // Vraćamo prva 3 filma iz izmešanog niza
    return allMovies.slice(0, 8);
  }
}
