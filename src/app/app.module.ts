import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RootComponent } from './components/root/root.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PhotosComponent } from './components/photos/photos.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogIndexComponent } from './components/blog-index/blog-index.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { FourofourComponent } from './components/fourofour/fourofour.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    NavbarComponent,
    PhotosComponent,
    FooterComponent,
    BlogIndexComponent,
    BlogPostComponent,
    FourofourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
