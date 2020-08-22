import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../interfaces/project';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  baseUrl = 'https://www.googleapis.com/books/v1/volumes?q=davidfosterwallace';
  constructor( private http: HttpClient) { }

  getAll(): Observable<Project[]>{
    return this.http.get<Project[]>(this.baseUrl)
      .pipe(
        tap(projects => {return projects})
      );
  }
}
