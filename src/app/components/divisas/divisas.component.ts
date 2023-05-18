import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/models/album';
import { Divisa } from 'src/app/models/divisa';
import { DivisasService } from 'src/app/services/divisas.service';

@Component({
  selector: 'app-divisas',
  templateUrl: './divisas.component.html',
  styleUrls: ['./divisas.component.css']
})
export class DivisasComponent implements OnInit{
  divisa!: Divisa
  searchedVideo!:string
  video!:Album
  data!:any
  submittedVideo=false
  videosSearched:Array<Album>
  submitted = false
  base!:string
  desired!:string
  amount!:number
  from!:string
  to!:string
  result!:number
  currencies: string[] = ['EUR', 'USD', 'ARS'];
  exchangeRates: { [key: string]: number } = {};
  currencyCodes = ["USD", "EUR", "ARS"]
  content: any[] = [
    {code: "USD", amounts: []},
    {code: "EUR", amounts: []},
    {code: "ARS", amounts: []}
  ]
  constructor(private currencyService: DivisasService){
    this.divisa = new Divisa()
    this.videosSearched = new Array<Album>
  }
  async fetchExchangeRates() {
    try {
      for (let i = 0; i < this.currencyCodes.length; i++) {
        this.base = this.currencyCodes[i]
        console.log(this.base + ' base')
        for (let j = 0; j < this.currencyCodes.length; j++) {
          this.desired= this.currencyCodes[j]
          console.log(this.desired + ' deseada')
          // this.currencyService.getExchangeRate(this.base, this.desired, 1).subscribe(
          //   data =>{ 
          //     this.content[i].amounts.push(data.conversion_rate)
          //   })
        }
      }
    } catch (error) {
      console.error('An error occurred while fetching exchange rates.', error);
    }
  }
public async convertCurrencies(baseCurrency: string, targetCurrency: string, amount:number): Promise<void> {
  this.currencyService.getExchangeRate(baseCurrency, targetCurrency, amount).subscribe(
    result=>{
      this.submitted=true
      console.log(result)
      console.log(result.conversion_rate)
      this.result = result.conversion_rate
    },
    error=>{
      console.log(error)
    }
  )
}
  pruebaVideo(){
    
    for (let i = 0; i< this.currencyCodes.length; i++){
      for(let j = 0; j<this.currencyCodes.length; j++){
          console.log(this.content[i].amounts[j])
      }
    }
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
  ngOnInit(): void{

    this.fetchExchangeRates()
  }
}
