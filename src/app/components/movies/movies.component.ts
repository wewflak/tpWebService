import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaDetalle } from 'src/app/models/pelicula-detalle';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  moviesSearched:Array<any>
  movieSearched!:string
  constructor(private moviesService: MoviesService, private router: Router){
    this.moviesSearched = new Array<Pelicula>
  }
  ngOnInit(){
  }
  public getMovies(){
    this.moviesService.getMovies(this.movieSearched,'m').subscribe( async (data : any ) =>{
      console.log(data.search[0])
      this.asignMovies(data.search)
    })
  }
  asignMovies(array:any){
    for(let i=0;i<array.length && i<25;i++){
      // this.movie.movieTitle = array[i].title
      // this.movie.imdbId = array[i].id
      // this.movie.movieScore = array[i].score
      // this.movie.movieYear = array[i].year
      // this.moviesSearched[i] = this.movie
      // console.log(this.moviesSearched[i].movieTitle)
      var nueva = new Pelicula(
        array[i].id,
        array[i].title,
        array[i].year,
        array[i].score
      )
      this.moviesSearched.push(nueva)
    }
  }
  pruebaDetalle(id:string){
    this.moviesService.getMovieDetail(id).subscribe(
      result=>{
        console.log(result)
      },
      error=>{
        console.log(error)
      }
    )
  }
  goDetail(query:string){
    this.router.navigate(['movieDetail', {data: query}])
  }
}
