import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { TvshowService } from 'src/app/services/tvshow.service';
import { TvShow } from 'src/app/models/tvshow';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatTableModule, RouterModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  tvShows: TvShow[] = [];
  displayedColumns: string[] = ['id', 'name', 'favorite', 'actions'];

  constructor(private tvshowService: TvshowService) {}

  ngOnInit(): void {
    this.loadTvShows();
  }

  loadTvShows(): void {
    this.tvshowService.getAllTvShows().subscribe(data => {
      this.tvShows = data;
    });
  }

  deleteTvShow(id: number): void {
    this.tvshowService.deleteTvShow(id).subscribe(() => {
      this.loadTvShows();
    });
  }
}
