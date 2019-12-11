import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  protected url = 'https://hn.algolia.com/api/v1/search_by_date?tags=story';

  getPosts(): Observable<any> {
    return this
        .http
        .get(`${this.url}`)
        .pipe(
            map(res => res)
        );
  }
}
