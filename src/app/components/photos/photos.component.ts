import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../../services/photo.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  photoRoot: string = '../../assets/photo/';
  listOfPhotoUrls: Array<string> = [];
  largePrintUrl: string = '';

  constructor(private photo: PhotoService) {
  }

  ngOnInit(): void {
    this.photo.listOfPhotos().subscribe( photoNames => {
      this.listOfPhotoUrls = photoNames.map( name => this.photo.constructUrlWithPhotoName(name));
      this.largePrintUrl = this.listOfPhotoUrls.length ? this.listOfPhotoUrls[0] : '';
    })
  }

  setLargePrint(p: string) {
    this.largePrintUrl = p;
  }

}
