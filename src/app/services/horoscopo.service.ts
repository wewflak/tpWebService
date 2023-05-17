import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoroscopoService {

  constructor(private _http: HttpClient) { }

  public horoscope(sign: string, date:string, language: string, type:string) : Observable<any>{
      let httpOptions= {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': '18359b2048mshefa50201df80486p14268djsncfef2ea642ec',
        'X-RapidAPI-Host': 'horoscopes-ai.p.rapidapi.com'
      })
    }
    return this._http.get('https://horoscopes-ai.p.rapidapi.com/get_horoscope/'+sign+'/'+date+'/'+type+'/'+language+'', httpOptions)
  }
}
