import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TvshowService } from 'src/app/services/tvshow.service';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';

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
      this.tvShowService.getTvShowById(this.tvShowId).subscribe(data => {
        this.tvShowForm.patchValue(data);
      });
    }
  }

  save(): void {
    if (this.tvShowId) {
      this.tvShowService.updateTvShow({ ...this.tvShowForm.value, id: this.tvShowId }).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.tvShowService.createTvShow(this.tvShowForm.value).subscribe(() => {
        this.router.navigate(['/']);
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
