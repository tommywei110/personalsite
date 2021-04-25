import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  assetRoot: string = '../../assets';
  showMobileMenu = "hidden";
  open = true;
  publicItems: Array<[string, string]> = [
    ['Home', '/'],
    ['Info', '/#Info'],
    ['Projects', '/#Projects'],
    ['Contact', '/#Contact']
  ];

  constructor() { }
  
  ngOnInit(): void {
  }

  toggleMobileMenu() {
    this.showMobileMenu = this.showMobileMenu == "hidden" ? "flex" : "hidden";
  }
}
