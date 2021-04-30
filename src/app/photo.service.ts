import { NONE_TYPE } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  listOfPhotos() : Array<string>{
    return ['1.jpg', '2.jpg', '3.jpg', '4.jpg']
  }
}
