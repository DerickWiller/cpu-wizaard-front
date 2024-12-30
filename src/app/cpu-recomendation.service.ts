import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CpuRecommendationService {
  private apiUrl = 'localhost:8080/recommend';
  constructor(private http: HttpClient) { }

  getCpuRecommendation(criteria: any): Observable<any> {
    const url = 'http://localhost:8080/recommend'; // URL da API
    return this.http.post(url, criteria); // Fazendo um POST com o objeto criteria
  }

  getInfo(): Observable<any> {
    const apiUrl = 'http://localhost:8080/saiba-mais';
    console.log('Chamando API:', apiUrl);
    return this.http.get<any>(apiUrl);
  }
}
