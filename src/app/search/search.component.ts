import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { FlightModel } from '../../models/flight.model';
import { NgFor, NgIf } from '@angular/common';
import { FlightService } from '../../services/flight.service';
import { MatButtonModule } from '@angular/material/button';
import { UtilsService } from '../../services/utils.service';
import { LoadingComponent } from "../loading/loading.component";
import { RouterLink } from '@angular/router';
import { MovieModel } from '../../models/movie.model';
import { MovieService } from '../../services/movie.service';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-search',
  imports: [
    MatTableModule,
    NgIf,
    NgFor,
    MatButtonModule,
    RouterLink,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatSelectModule
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  displayedColumns: string[] = ['title','duration', 'genre', 'showtime', 'price', 'actions'];
  allData: MovieModel[] | null = null;
  genreList: string[] = [];
  selectedGenre: string | null = null;
  dataSource: MovieModel[] = [];
  inputTitle: string = ''
  inputPrice: number | null = null; // za filtriranje po ceni

  public constructor() {
    this.allData = this.getAllMovies();
    this.dataSource = this.allData;  // inicijalno prikazivanje svih filmova

    // Popuni listu žanrova
    this.genreList = this.allData.map(movie => movie.genre)
      .flat()
      .map(genre => genre.name)  // uzmi samo ime žanra
      .filter((value, index, self) => self.indexOf(value) === index);  // Ukloni duplikate
  }

  // Metoda koja vraća sve filmove (hardkodovani podaci)
  private getAllMovies(): MovieModel[] {
    return MovieService.getMovieList();  // pretpostavljam da si već implementirao MovieService.getMovieList()
  }

  // Pretraga filmova prema inputu
  public doSearch() {
    if (this.allData == null) return;

    this.dataSource = this.allData.filter(movie => {
      // Filtriraj po imenu, ceni i žanru
      const matchesTitle = movie.title.toLowerCase().includes(this.inputTitle.toLowerCase());
      const matchesGenre = this.selectedGenre ? movie.genre.some(genre => genre.name === this.selectedGenre) : true;
      const matchesPrice = this.inputPrice !== null ? movie.price === this.inputPrice : true;  // Proveri da li cena odgovara

      return matchesTitle && matchesPrice && matchesGenre;
    });
  }

  // Filtriranje filmova prema odabranom žanru
  // Filtriranje filmova prema odabranom žanru
  public doSelectGenre() {
    this.doSearch();  // Pozovi doSearch da bi svi filteri bili povezani
  }

  // Funkcija za resetovanje svih filtera
  public doReset() {
    this.inputTitle = '';
    this.selectedGenre = null;
    this.inputPrice = null;
    
    // Ako su podaci učitani, resetuj dataSource na sve filmove
    if (this.allData !== null) {
      this.dataSource = this.allData;  // Resetuje prikaz svih filmova
    }
  }

}
