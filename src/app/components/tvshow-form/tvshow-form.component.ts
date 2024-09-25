import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TvshowService } from 'src/app/services/tvshow.service';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import Swal from 'sweetalert2';

@Component({
  standalone: true,
  selector: 'app-tvshow-form',
  templateUrl: './tvshow-form.component.html',
  styleUrls: ['./tvshow-form.component.css'],
  imports: [ReactiveFormsModule, CommonModule, MatInputModule, MatButtonModule, MatCheckboxModule, MatCardModule]
})
export class TvShowFormComponent implements OnInit {
  tvShowForm!: FormGroup;
  tvShowId?: number;

  constructor(
    private fb: FormBuilder,
    private tvShowService: TvshowService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tvShowForm = this.fb.group({
      name: ['', Validators.required],
      favorite: [false]
    });

    this.tvShowId = Number(this.route.snapshot.paramMap.get('id'));

    if (this.tvShowId) {
      this.tvShowService.getTvShowById(this.tvShowId).subscribe({
        next: (tvShow) => {
          if (tvShow) {
            this.tvShowForm.patchValue(tvShow);
          }
        },
        error: (err) => {
          Swal.fire('Error', 'No se pudo cargar el show.', 'error');
          console.error('Error al obtener el show:', err);
        }
      });
    }
  }

  save(): void {
    if (this.tvShowId) {
      this.tvShowService.updateTvShow({ ...this.tvShowForm.value, id: this.tvShowId }).subscribe({
        next: () => {
          Swal.fire('¡Actualización exitosa!', 'El show fue actualizado correctamente', 'success');
          this.router.navigate(['/']);
        },
        error: (err) => {          
          Swal.fire('Error', 'No se pudo actualizar el show.', 'error');
          console.error('Error al actualizar el show:', err);
        }
      });
    } else {
      this.tvShowService.createTvShow(this.tvShowForm.value).subscribe({
        next: () => {
          Swal.fire('¡Creación exitosa!', 'El show fue creado correctamente', 'success');
          this.router.navigate(['/']);
        },
        error: (err) => {
          Swal.fire('Error', 'No se pudo crear el show.', 'error');
          console.error('Error al crear el show:', err);
        }
      });
    }
  }

  get f() {
    return this.tvShowForm.controls;
  }

  cancel() {
    this.router.navigate(['/']);
  }
}
