import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
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
  dataSource: MovieModel[] = this.getRandomMovies();

  private getRandomMovies(): MovieModel[] {
    const allMovies: MovieModel[] = MovieService.getMovies();

    for (let i = allMovies.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allMovies[i], allMovies[j]] = [allMovies[j], allMovies[i]]; 
    }

    return allMovies.slice(0, 8);
  }
}
