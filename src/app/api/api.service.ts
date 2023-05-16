import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Journey } from '../model/journey';
import { ApiConfig } from './api-config';

@Injectable({
  providedIn: 'root'
})
export abstract class ApiService {
  constructor(
    public readonly config: ApiConfig,
    public httpClient: HttpClient
  ) {
    //
  }

  getJourneyOptions(): Observable<Journey> {
    const url = "/api/QuoteRequest";
    return this.httpClient.get(url).pipe(
      map((response: any) => new Journey(response))
    );
  }
}
