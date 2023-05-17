import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _http:HttpClient) { }
  public getMovies(s:string,m:string){
    
    let httpOptions={
      params:{
        's': s,
        'm': m
      },
        headers: new HttpHeaders({
          
          'X-RapidAPI-Key': '18359b2048mshefa50201df80486p14268djsncfef2ea642ec',
          'X-RapidAPI-Host': 'mdblist.p.rapidapi.com'
    })
  }
  return this._http.get('https://mdblist.p.rapidapi.com/',httpOptions)
}
  public getMovieDetail(i:string){
    let httpOptions={
      params:{
        'i': i,
      },
        headers: new HttpHeaders({
          
          'X-RapidAPI-Key': '18359b2048mshefa50201df80486p14268djsncfef2ea642ec',
          'X-RapidAPI-Host': 'mdblist.p.rapidapi.com'
    })
  }
  return this._http.get('https://mdblist.p.rapidapi.com/',httpOptions)
  }
  public translateText(source:string, target:string, text:string):Observable<any>{
    const httpOptions = {
    headers: new HttpHeaders({
    'content-type': 'application/x-www-form-urlencoded',
    'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
    'X-RapidAPI-Key': '5a891b3bfemshbe636412126e564p1450a6jsne66d35508b88',
    }),
    }
    const body = new HttpParams()
    .set('q', text)
    .set('target', target)
    .set('source', source);
    return this._http.post("https://google-translate1.p.rapidapi.com/language/translate/v2",body, httpOptions);
    }
}
