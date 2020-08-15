import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable } from '@angular/core';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  constructor(private http: HttpClient) { }


  getProject() {
    return this.http.get(environment.myEndpoint + '/api/projects').subscribe();
  }

}
