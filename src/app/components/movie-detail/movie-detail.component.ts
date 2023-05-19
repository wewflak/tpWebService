import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Actor } from 'src/app/models/actor';
import { PeliculaDetalle } from 'src/app/models/pelicula-detalle';
import { MoviesService } from 'src/app/services/movies.service';
import {LOCALE_ID } from '@angular/core';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
  providers: [{ provide: LOCALE_ID, useValue: 'es-AR' }]
})
export class MovieDetailComponent implements OnInit{

  @Input() data!:string
  received!:string
  description!:string
  movie!:PeliculaDetalle
  detail!:any
  embedUrl!:any
  role!:string
  resultado!:string
  code_country!:string
  cast!:any
  actorsObject!:Array<Actor>
  actors!:Array<string>
  actorsRole!:Array<string>
  directors!:Array<string>
  maxDir:number
  maxWrit:number
  currentDate!: Date;
  maxAct:number
  writers!:Array<string>
        // Public properties
        itsSafe!: SafeHtml;

        // Private properties
        /**
         * Component constructor
         *
         * @param domSanitizer: DomSanitizer
         */
  constructor(private moviesService: MoviesService, private router: Router, private route: ActivatedRoute,
    private domSanitizer: DomSanitizer){
    route.params.subscribe(params => {
      let data = params['data']
      this.received= data
      this.actorsObject = new Array<Actor>
      this.actors = new Array<string>
      this.actorsRole = new Array<string>
      this.directors = new Array<string>
      this.writers = new Array<string>
      this.currentDate = new Date();
      console.log(data)
  });
  this.maxAct=0
  this.maxDir=0
  this.maxWrit=0
  }
  ngOnInit(): void {
    this.getPelicula()
  }
  formatCurrentDate( query:any): string {
    const formattedDate = formatDate(query, 'dd/MM/yyyy', 'en-US'); // Use 'en-US' for the pipe to parse correctly

    return formattedDate;
  }
  getPelicula(){
    this.moviesService.getMovieDetail(this.received).subscribe(
      result=>{
        console.log(result)
        this.detail = result;
        console.log(this.detail.backdrop)
        this.detail.country = this.changeCountry(this.detail.country)
        this.detail.language = this.changeLanguage(this.detail.language)
        this.detail.released = this.formatCurrentDate(this.detail.released)
        this.detail.status = this.changeStatus(this.detail.status)
        this.embedUrl = this.changeUrl(this.detail.trailer)
        this.getCast()
      },
      error=>{
        console.log(error)
      }
    )
  }
  getCast(){
    this.moviesService.getCast(this.received).subscribe(async (results:any)=>{
      console.log(results)
      console.log(results.results.roles[3].actor.name)
      this.cast = results.results.roles
      console.log(this.cast[3].role)
      //this.separateCast()
      this.getDirectors()
      this.getWriters()
      this.separateCast()
    }
    )
  }
  getDirectors(){
    for(let i=0;i<this.cast.length;i++){
      if(this.cast[i].role == "Director" && this.actors.length<3){
        this.directors.push(this.cast[i].actor.name)
      }
    }
  }
  getWriters(){
    for(let i=0;i<this.cast.length;i++){
      if(this.cast[i].role == 'Writer' && this.maxWrit<3 && !this.writers.includes(this.cast[i].actor.name)){
        this.writers.push(this.cast[i].actor.name)
        this.maxWrit++;
      }
    }
  }
  separateCast(){
    for(let i=0;i<this.cast.length;i++){
    if(this.cast[i].role == "Director" && this.actors.length<3){
      this.maxDir= this.maxDir+1;
    }else if(this.cast[i].role == 'Writer' && this.maxWrit<3){
      this.maxWrit++;
    }else if(this.maxAct<=10 && this.cast[i].role != 'Writer' && this.cast[i].role != 'Director'){
      this.actors.push(this.cast[i].actor.imdb_id)
      this.actorsRole.push(this.cast[i].role)
      console.log(this.cast[i].actor.name + ' de: '+this.cast[i].role)
      this.maxAct++
    }
  }
  this.getActors()
  }
  getActors(){
    for (let i =0; i<this.actors.length;i++){
      this.moviesService.getActorBio(this.actors[i]).subscribe(
        result=>{
          console.log(result)
          var nuevo = new Actor(
            result.results.name,
            result.results.image_url,
            this.actorsRole[i]
          )
          this.actorsObject.push(nuevo)
        },
        error=>{
          console.log(error)
        }
      )
    }
  }
  changeUrl(url:string):SafeResourceUrl{
      if (url.includes('watch')) {
        const videoId = url.split('v=')[1];
        if (videoId) {
          const embedUrl = `https://www.youtube.com/embed/${videoId}`;
          return this.domSanitizer.bypassSecurityTrustResourceUrl(embedUrl);
        }
      }
      return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
  }
  changeCountry(codigo_pais:string):string{
    const paises:{[codigo:string]:string} = {
      'us': ' Estados Unidos',
      'ar': ' Argentina',
      'fr': ' Francia',
      'gb': ' Reino Unido',
      'it': ' Italia',
      'kr': ' Corea del Sur',
      'hk': ' China',
      'jp': ' Japón'
  }

  if (codigo_pais in paises){
      return paises[codigo_pais]
  }else{
      return 'Código de país inválido'
  }
  }
  changeStatus(estado:string):string{
    const estados:{[palabra:string]:string}={
      'released': 'Estrenada',
      'planned': 'Planeada'
    };
    if(estado in estados){
      return estados[estado]
    }else{
      return 'No se encuentra'
    }
  }
  changeLanguage(codigoIdioma: string): string {
    const idiomas: {[codigo: string]: string} = {
      'es': ' Español',
      'fr': ' Francés',
      'en': ' Inglés',
      'it': ' Italiano',
      'ko': ' Coreano',
      'cn': ' Chino',
      'ja': ' Japonés'
    };
  
    if (codigoIdioma in idiomas) {
      return idiomas[codigoIdioma];
    } else {
      return 'Código de idioma inválido';
    }
  }
  translate(query:string){
    this.moviesService.translateText('en', 'es', query).subscribe(
      result=>{
        console.log(result)
        console.log(result.data.translations[0].translatedText)
        this.resultado = result.data.translations[0].translatedText
      },
      error=>{
        console.log(error)
      }
    )
  }
}
