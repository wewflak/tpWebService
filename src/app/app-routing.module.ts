import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';
import { DivisasComponent } from './components/divisas/divisas.component';
import { MusicaComponent } from './components/musica/musica.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { AudioTextComponent } from './components/audio-text/audio-text.component';
import { BooksComponent } from './components/books/books.component';
import { QrGeneratorComponent } from './components/qr-generator/qr-generator.component';
import { ParcialComponent } from './components/parcial/parcial.component';

const routes: Routes = [
  {path:'horoscopo', component:HoroscopoComponent},
  {path:'divisas', component:DivisasComponent},
  {path:'musica', component:MusicaComponent},
  {path:'movies', component:MoviesComponent},
  {path:'movieDetail', component:MovieDetailComponent, data:{'data':{}}},
  {path:'textAudio', component:AudioTextComponent},
  {path:'books', component:BooksComponent},
  {path:'qrCode', component:QrGeneratorComponent},
  {path:'parcial', component:ParcialComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
