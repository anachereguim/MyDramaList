import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { List } from 'src/app/models/list.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl ='http://localhost:3000/list';

  constructor(private http: HttpClient) { }

  public getAll(): Observable<List[]> {
    return this.http.get<List[]>(this.apiUrl);
  }
  public getById(id: number): Observable<List> {
    return this.http.get<List>(`${this.apiUrl}/${id}`);
  }

  public add(request: List): Observable<List> {
    return this.http.post<List>(this.apiUrl, request);
  }
  public update(request: List, id: number): Observable<List> {
    return this.http.put<List>(`${this.apiUrl}/${id}`, request);
  }
  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
