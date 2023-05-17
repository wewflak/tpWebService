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
  description!:string
  movie!:PeliculaDetalle
  detail!:any
  resultado!:string
  code_country!:string
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
        this.detail = result;
        console.log(this.detail.backdrop)
        // this.translate(this.detail.description)
        // console.log(this.resultado + 'pureba')
        // this.detail.description = this.resultado
        this.detail.country = this.changeCountry(this.detail.country)
        this.detail.language = this.changeLanguage(this.detail.language)
        // this.translate(this.detail.status)
        // this.detail.status = this.resultado
        console.log(this.description)
      },
      error=>{
        console.log(error)
      }
    )
  }
  changeCountry(codigo_pais:string):string{
    const paises:{[codigo:string]:string} = {
      'us': 'Estados Unidos',
      'ar': 'Argentina',
      'fr': 'Francia',
      'gb': 'Reino Unido',
      'it': 'Italia',
      'kr': 'Corea del Sur',
      'hk': 'China',
      'jp': 'Japón'
  }

  if (codigo_pais in paises){
      return paises[codigo_pais]
  }else{
      return 'Código de país inválido'
  }
  }
  changeLanguage(codigoIdioma: string): string {
    const idiomas: {[codigo: string]: string} = {
      'es': 'Espanol',
      'fr': 'Francés',
      'en': 'Inglés',
      'it': 'Italiano',
      'ko': 'Coreano',
      'cn': 'Chino',
      'ja': 'Japonés'
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
