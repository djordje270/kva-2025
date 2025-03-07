import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FlightModel } from '../../models/flight.model';
import { FlightService } from '../../services/flight.service';
import { NgIf } from '@angular/common';
import { UtilsService } from '../../services/utils.service';
import { LoadingComponent } from "../loading/loading.component";
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { SafePipe } from "../safe.pipe";
import { MovieModel } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-details',
  imports: [NgIf, MatCardModule, MatListModule, MatButtonModule, RouterLink],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent implements OnInit {

  movie: MovieModel | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Uzimamo ID filma iz URL-a
    const movieId = Number(this.route.snapshot.paramMap.get('id'));

    // Filtriramo film prema ID-u
    this.movie = MovieService.getMovies().find(m => m.id === movieId);
  }
}
