import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface photoNames extends Array<string> { };

@Injectable({
  providedIn: 'root'
})

export class PhotoService {
  // without the port number

  constructor(private http: HttpClient) { }

  listOfPhotos(): Observable<photoNames> {
    return this.http.get<photoNames>('api/photos');
  }

  constructUrlWithPhotoName(name: string) {
    return `api/photos/${name}`;
  }
}
