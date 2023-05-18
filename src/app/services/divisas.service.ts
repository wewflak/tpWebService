
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DivisasService {

  constructor(private _http: HttpClient) { 

  }
  getTextConvertidor(from_type:string , to_type : string , from_value : string):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidAPI-Key': '18359b2048mshefa50201df80486p14268djsncfef2ea642ec',
        'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com'
      }),
      }
      const body = new HttpParams()
      .set('from-value',from_value )
      .set('from-type', from_type)
      .set('to-type',to_type);
      return this._http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert",body, httpOptions);
      }

private readonly apiKey: string = 'b7fc317da07f5bdd4b62bc3d';
private readonly baseUrl: string = 'https://v6.exchangeratesapi.io'
  public getExchangeRate(baseCurrency: string, targetCurrency: string, amount:number): Observable<any> {
      let httpOptions={
        params:{
        'baseCurrency': baseCurrency,
        'targetCurrency': targetCurrency
        },
        headers: new HttpHeaders({
          'apiKey':'b7fc317da07f5bdd4b62bc3d'
        })
      }

  
      return this._http.get('https://v6.exchangerate-api.com/v6/'+this.apiKey+'/pair/'+baseCurrency+'/'+targetCurrency)
    }
public getVideos(query:string,type:string,safesearch:boolean){
    
      let httpOptions={
        params:{
          'query': query, 
          'type': type,
          'safeSearch': safesearch
        },
          headers: new HttpHeaders({
            'X-RapidAPI-Key': '18359b2048mshefa50201df80486p14268djsncfef2ea642ec',
            'X-RapidAPI-Host': 'simple-youtube-search.p.rapidapi.com'
      })
    }
    return this._http.get('https://simple-youtube-search.p.rapidapi.com/search',httpOptions)
  }
}
