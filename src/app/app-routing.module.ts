import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogIndexComponent } from './blog-index/blog-index.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { FourofourComponent } from './fourofour/fourofour.component';
import { PhotosComponent } from './photos/photos.component';
import { RootComponent } from './root/root.component';

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
