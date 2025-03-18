import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { NgFor, NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
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
  inputPrice: number | null = null; 

  public constructor() {
    this.allData = this.getAllMovies();
    this.dataSource = this.allData; 

    this.genreList = this.allData.map(movie => movie.genre)
      .flat()
      .map(genre => genre.name) 
      .filter((value, index, self) => self.indexOf(value) === index);  
  }

  private getAllMovies(): MovieModel[] {
    return MovieService.getMovieList(); 
  }

  public doSearch() {
    if (this.allData == null) return;

    this.dataSource = this.allData.filter(movie => {
      const matchesTitle = movie.title.toLowerCase().includes(this.inputTitle.toLowerCase());
      const matchesGenre = this.selectedGenre ? movie.genre.some(genre => genre.name === this.selectedGenre) : true;
      const matchesPrice = this.inputPrice !== null ? movie.price === this.inputPrice : true; 

      return matchesTitle && matchesPrice && matchesGenre;
    });
  }

  public doSelectGenre() {
    this.doSearch(); 
  }

  public doReset() {
    this.inputTitle = '';
    this.selectedGenre = null;
    this.inputPrice = null;
    
    if (this.allData !== null) {
      this.dataSource = this.allData; 
    }
  }

}
