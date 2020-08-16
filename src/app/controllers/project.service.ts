import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  constructor(private http: HttpClient) { }

  getProject() {
    if (environment.production == true) {
      return this.http.get('/api/projects').subscribe();
    } else {
      return this.http.get('http://localhost:4201/api/projects').subscribe();
    }
  }

}
