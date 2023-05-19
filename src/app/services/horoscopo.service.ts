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
        'X-RapidAPI-Key': 'ad32c3dc6amshfb13847e8877c28p11f9fbjsn22ef143a7ee5',
        'X-RapidAPI-Host': 'horoscopes-ai.p.rapidapi.com'
      })
    }
    return this._http.get('https://horoscopes-ai.p.rapidapi.com/get_horoscope/'+sign+'/'+date+'/'+type+'/'+language+'', httpOptions)
  }
}
