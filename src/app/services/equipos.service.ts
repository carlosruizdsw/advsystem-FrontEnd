import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {
  private API_URL = 'http://localhost:3000/find_equipos'; // tu endpoint

  constructor(private http: HttpClient) {}

  getEquipos() {
    return this.http.get<any>(this.API_URL);
  }
}
