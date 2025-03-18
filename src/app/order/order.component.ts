import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { NgFor, NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserService } from '../../services/user.service';
import { MovieModel } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { CinemaModel } from '../../models/cinema.model';
import { CinemaService } from '../../services/cinema.service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

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

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const movieId = Number(this.route.snapshot.paramMap.get('id'));

    this.movie = MovieService.getMovies().find(m => m.id === movieId);
  }

  public doOrder() {
    Swal.fire({
      title: `Place an order to ${this.movie?.title}?`,
      text: "Orders can be canceled any time from your user profile!",
      icon: "warning",
      showCancelButton: true,
      customClass: {
        popup: 'bg-dark'
      },
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, place an order!"
    }).then((result) => {
      if (result.isConfirmed) {
        const result = UserService.createOrder({
          orderId: new Date().getTime(),
          id: this.movie!.id,
          title: this.movie!.title,
          duration: this.movie!.duration,
          showtime: this.movie!.showtime,
          cinema: this.selectedCinema,
          price: this.movie!.price,
          count: this.selectedTicketCount,
          status: 'ordered',
          rating: null
        })
        result ? this.router.navigate(['/user']) :
          Swal.fire({
            title: "Failed to create an order",
            text: "Something is wrong with your order!",
            icon: "error"
          });
      }
    })
  }
}
