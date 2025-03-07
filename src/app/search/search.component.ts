import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { FlightModel } from '../../models/flight.model';
import { NgIf } from '@angular/common';
import { FlightService } from '../../services/flight.service';
import { MatButtonModule } from '@angular/material/button';
import { UtilsService } from '../../services/utils.service';
import { LoadingComponent } from "../loading/loading.component";
import { RouterLink } from '@angular/router';
import { MovieModel } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-search',
  imports: [MatTableModule, NgIf, MatButtonModule, RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  displayedColumns: string[] = ['title','duration', 'genre', 'showtime', 'actions'];
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
