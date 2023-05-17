import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PeliculaDetalle } from 'src/app/models/pelicula-detalle';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit{
  @Input() data!:string
  received!:string
  movie!:PeliculaDetalle
  constructor(private moviesService: MoviesService, private router: Router, private route: ActivatedRoute){
    route.params.subscribe(params => {
      let data = params['data']
      this.received= data
      console.log(data)
  });
  }
  ngOnInit(): void {
    this.getPelicula()
  }
  getPelicula(){
    this.moviesService.getMovieDetail(this.received).subscribe(
      result=>{
        console.log(result)
        // this.movie = new PeliculaDetalle()
        //   result.title,
        // )
      },
      error=>{
        console.log(error)
      }
    )
  }
}
