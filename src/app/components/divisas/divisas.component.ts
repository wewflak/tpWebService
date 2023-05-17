import { Component } from '@angular/core';
import { Album } from 'src/app/models/album';
import { Divisa } from 'src/app/models/divisa';
import { DivisasService } from 'src/app/services/divisas.service';

@Component({
  selector: 'app-divisas',
  templateUrl: './divisas.component.html',
  styleUrls: ['./divisas.component.css']
})
export class DivisasComponent {
  divisa!: Divisa
  searchedVideo!:string
  video!:Album
  data!:any
  submittedVideo=false
  videosSearched:Array<Album>
  submitted = false
  currencyCodes = ["usd", "eur", "ars", "jpy", "cny"]
  content: any[] = [
    {code: "usd", amounts: []},
    {code: "eur", amounts: []},
    {code: "ars", amounts: []},
    {code: "jpy", amounts: []},
    {code: "cny", amounts: []}
  ]
  constructor(private currencyService: DivisasService){
    this.divisa = new Divisa()
    this.videosSearched = new Array<Album>
    // for (let i = 0; i< this.currencyCodes.length; i++){
    //   for(let j = 0; j<this.currencyCodes.length; j++){
    //     this.currencyService.convertir(this.currencyCodes[i], this.currencyCodes[j],1).subscribe(
    //       data=>this.content[i].amounts.push(data.new_amount)
    //     )
    //   }
    // }
  }
  pruebaVideo(){

  }
  getVideos(){
    this.currencyService.getVideos(this.searchedVideo, 'video', true).subscribe(async(results:any)=>{
      this.asignVideos(results.results)
    }
    )
  }
  asignVideos(results:any){
    for(let i=0; i<results.length && i<10;i++){
    var nuevo = new Album(
      results[i].id,
      results[i].title,
      results[i].channel.name,
      results[i].channel.icon,
      results[i].url
    )
    this.videosSearched.push(nuevo)
  }
}
  pruebaConversor(){
    this.currencyService.conversor("ARS","USD","10").subscribe(
      result=>{
        console.log(result)
      },
      error=>{
        console.log(error)
      }
      )
  }
  ngOnInit(): void{}
  // convertir(have: string, want:string, amount: number){
  //   this.currencyService.convertir(have, want, amount).subscribe(
  //     (data:any)=>{
  //       this.divisa.old_amount= amount
  //       this.divisa.old_currency= have
  //       this.divisa.new_currency= want
  //       this.divisa.new_amount= data.new_amount
  //       this.submitted=true
  //     }
  //   )
  // }
}
