import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightModel } from '../../models/flight.model';
import { FlightService } from '../../services/flight.service';
import { UtilsService } from '../../services/utils.service';
import { MatCardModule } from '@angular/material/card';
import { NgFor, NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { AirlineModel } from '../../models/airline.model';
import { AirlineService } from '../../services/airline.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserService } from '../../services/user.service';
import { MovieModel } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { CinemaModel } from '../../models/cinema.model';
import { CinemaService } from '../../services/cinema.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-order',
  imports: [MatCardModule, NgIf, NgFor, MatInputModule, MatButtonModule, MatSelectModule, MatFormFieldModule, FormsModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  public movie: MovieModel | undefined;
  public cinemas: CinemaModel[] = CinemaService.getCinemas()
  public selectedCinema: CinemaModel = this.cinemas[0]
  public selectedTicketCount: number = 1
  public selectedPrice: number = 10

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // Uzimamo ID filma iz URL-a
    const movieId = Number(this.route.snapshot.paramMap.get('id'));

    // Filtriramo film prema ID-u
    this.movie = MovieService.getMovies().find(m => m.id === movieId);
  }

  public doOrder() {
    const result = UserService.createOrder({
      orderId: new Date().getTime(),
      id: this.movie!.id,
      title: this.movie!.title,
      duration: this.movie!.duration,
      showtime: this.movie!.showtime,
      cinema: this.selectedCinema,
      count: this.selectedTicketCount,
      pricePerItem: this.selectedPrice,
      status: 'ordered',
      rating: null
    })

    result ? this.router.navigate(['/user']) : alert('An error occured while creating an order')
  }
}
