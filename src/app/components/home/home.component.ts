import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { TvshowService } from 'src/app/services/tvshow.service';
import { TvShow } from 'src/app/models/tvshow';

import Swal from 'sweetalert2';

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
    this.tvshowService.getAllTvShows().subscribe(
    {
      next: (data) => {
        this.tvShows = data;
      },
      error: (err) => {
        Swal.fire('Error', 'No se pudieron cargar los shows.', 'error');
        console.error('Error al cargar los shows el show:', err);
      }
    });
  }

  deleteTvShow(id: number): void {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esta acción',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminarlo',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.tvshowService.deleteTvShow(id).subscribe(() => {
          Swal.fire('¡Eliminado!', 'El show ha sido eliminado.', 'success');
          this.loadTvShows();
        });
      }
    });
  }
}
