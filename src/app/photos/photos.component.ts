import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photoRoot: string = '../../assets/photo/';
  listOfPhotos: Array<string> = [];
  largePrint: string;

  constructor(private photo: PhotoService) { 
    this.listOfPhotos = photo.listOfPhotos();
    this.largePrint = this.listOfPhotos[1];
  }

  ngOnInit(): void {
  }

  setLargePrint(p: string) {
    this.largePrint = p;
  }

}
