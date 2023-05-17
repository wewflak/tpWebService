import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';
import { DivisasComponent } from './components/divisas/divisas.component';
import { MusicaComponent } from './components/musica/musica.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';

const routes: Routes = [
  {path:'horoscopo', component:HoroscopoComponent},
  {path:'divisas', component:DivisasComponent},
  {path:'musica', component:MusicaComponent},
  {path:'movies', component:MoviesComponent},
  {path:'movieDetail', component:MovieDetailComponent, data:{'data':{}}}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
