import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface DataItem {
  category: string;
  score: number;
  icon: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly dataUrl = 'assets/data.json';
  private readonly http = inject(HttpClient);

  getData(): Observable<DataItem[]>{
    return this.http.get<DataItem[]>(this.dataUrl);
  }
}
