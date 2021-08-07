import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tyre } from '../models/Tyre.model';

@Injectable({
  providedIn: 'root'
})
export class TyresService {

  constructor(private http : HttpClient) { }

  
  url: string = 'http://localhost:3000/tyres';

  getTyres() {
    return this.http.get<Tyre[]>(this.url);
  }

  postTyre(tyre: Tyre) {
    return this.http.post<Tyre>(this.url, tyre);
  }

  getTyre(id: string) {
    return this.http.get<Tyre>(this.url,
      {  params: new HttpParams().set('id', id)}
    );
  }

  updateTyre(id: string, tyre: Tyre) {
    return this.http.put<Tyre>
      (this.url,
      tyre,
        { params: new HttpParams().set('id', id) }
      )
  }

  deleteTyre(id: string) {
    return this.http.delete<Tyre>
      (this.url,
        { params: new HttpParams().set('id', id) }
      )
  }
}
