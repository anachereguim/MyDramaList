import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dramas } from 'src/app/models/dramas.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DramasService {

  private apiUrl ='http://localhost:3000/dramas';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Dramas[]> {
    return this.http.get<Dramas[]>(this.apiUrl);
  }
  public getById(id: number): Observable<Dramas> {
    return this.http.get<Dramas>(`${this.apiUrl}/${id}`);
  }
  public add(request: Dramas): Observable<Dramas> {
    return this.http.post<Dramas>(this.apiUrl, request);
  }

  public update(request: Dramas, id: number): Observable<Dramas> {
    return this.http.put<Dramas>(`${this.apiUrl}/${id}`, request);
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
  public getByType(type: string): Observable<Dramas[]> {
    return this.http.get<Dramas[]>(`${this.apiUrl}?type=${type}`);
  }
}
