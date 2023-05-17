
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DivisasService {

  constructor(private _http: HttpClient) { 

  }
  public convertir(have: string, want:string, amount:number) : Observable<any>{
    const options = {
      method: "GET",
      params: {
        have: have,
        want: want,
        amount:amount
      },
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': '18359b2048mshefa50201df80486p14268djsncfef2ea642ec',
        'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
      })
    }
    return this._http.get('https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency',options);
  }
  public conversor(have:string, want:string, amount:string): Observable<any>{
    const options = {
      method: "POST",
      params: {
        'from-type': have,
        'to-type': want,
        'from-value':amount
      },
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'user-id':'lisanwn',
        'X-RapidAPI-Key': 'BkemZIyGdz53ngVg5fTduQFpfxSmnBtXlhlrCIEi7al3NcdX',
        'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com'
      })
    }
    return this._http.post('https://community-neutrino-currency-conversion.p.rapidapi.com/convert', options);
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
