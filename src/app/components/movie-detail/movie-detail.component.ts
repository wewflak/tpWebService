import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';
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
  embedUrl!:any
  resultado!:string
  code_country!:string
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
        this.detail = result;
        console.log(this.detail.backdrop)
        this.detail.country = this.changeCountry(this.detail.country)
        this.detail.language = this.changeLanguage(this.detail.language)
        this.detail.status = this.changeStatus(this.detail.status)
        this.embedUrl = this.changeUrl(this.detail.trailer)
      },
      error=>{
        console.log(error)
      }
    )
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
