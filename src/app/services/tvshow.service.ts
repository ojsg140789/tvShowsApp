import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TvShow } from '../models/tvshow';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TvshowService {

  private apiUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getAllTvShows(): Observable<TvShow[]> {
    return this.http.get<TvShow[]>(this.apiUrl);
  }

  getTvShowById(id: number): Observable<TvShow> {
    return this.http.get<TvShow>(`${this.apiUrl}/${id}`);
  }

  createTvShow(tvShow: TvShow): Observable<TvShow> {
    return this.http.post<TvShow>(this.apiUrl, tvShow);
  }

  updateTvShow(tvShow: TvShow): Observable<void> {
    return this.http.put<void>(`${this.apiUrl}/${tvShow.id}`, tvShow);
  }

  deleteTvShow(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
