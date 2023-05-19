import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculaDetalle } from 'src/app/models/pelicula-detalle';
import { MoviesService } from 'src/app/services/movies.service';
declare var window:any;
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
  moviesSearched:Array<any>
  movieSearched!:string
  formModal:any;
  submited=false

  constructor(private moviesService: MoviesService, private router: Router){
    this.moviesSearched = new Array<Pelicula>
    this.movieSearched=''
  }
  ngOnInit(){
    this.formModal=new window.bootstrap.Modal(
      document.getElementById("moviesModal")
    )
  }
  openModal(){
    this.formModal.show()
  }
  doSomething(){
    this.formModal.hide()
  }
  public getMovies(){
    
  if(this.movieSearched.length==0){
    console.log('no pasa')
    this.openModal()
  }else{
    this.clearArray()
    this.submited=true
    this.moviesService.getMovies(this.movieSearched,'m').subscribe( async (data : any ) =>{
      console.log(data.search[0])
      this.asignMovies(data.search)
    })
  }
}
  clearArray(){
    while(this.moviesSearched.length>0){
      this.moviesSearched.pop()
    }
  }
  asignMovies(array:any){
    for(let i=0;i<array.length && i<25;i++){
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
