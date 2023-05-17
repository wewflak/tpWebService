
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

  public conversor(from:string, to:string, amount:number): Observable<any>{
    const options = {
      params: {
        from: from,
        to: to,
        amount: amount
      },
      headers: new HttpHeaders({
        'X-RapidAPI-Key': '18359b2048mshefa50201df80486p14268djsncfef2ea642ec',
        'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com'
      })
    }
    return this._http.get('https://currency-converter18.p.rapidapi.com/api/v1/convert', options);
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
