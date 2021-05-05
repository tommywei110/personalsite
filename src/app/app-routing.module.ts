import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogIndexComponent } from './components/blog-index/blog-index.component';
import { BlogPostComponent } from './components/blog-post/blog-post.component';
import { FourofourComponent } from './components/fourofour/fourofour.component';
import { PhotosComponent } from './components/photos/photos.component';
import { RootComponent } from './components/root/root.component';

const routes: Routes = [
  { path: '', component: RootComponent },
  { path: 'photo-gallery', component: PhotosComponent },
  { path: 'blog-index', component: BlogIndexComponent },
  { path: 'blog/:id', component: BlogPostComponent },
  { path: '**', component: FourofourComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
