import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DivisasComponent } from './components/divisas/divisas.component';
import { MusicaComponent } from './components/musica/musica.component';
import { HoroscopoComponent } from './components/horoscopo/horoscopo.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieDetailComponent } from './components/movie-detail/movie-detail.component';
import { SafePipe } from './models/Pipe';
import { DecimalPipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DivisasComponent,
    MusicaComponent,
    HoroscopoComponent,
    HeaderComponent,
    MoviesComponent,
    MovieDetailComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DecimalPipe
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
