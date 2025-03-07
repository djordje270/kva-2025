import { Component } from '@angular/core';
import { CinemaModel } from '../../models/cinema.model';
import { CinemaService } from '../../services/cinema.service';
import { MatTableModule } from '@angular/material/table';
import { NgIf } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-airline',
  imports: [MatTableModule, NgIf, MatButtonModule],
  templateUrl: './cinema.component.html',
  styleUrl: './cinema.component.css'
})
export class CinemaComponent {
  displayedColumns: string[] = ['name', 'countryOfOrigin', 'website', 'actions'];
  dataSource: CinemaModel[] = CinemaService.getCinemas()
}
