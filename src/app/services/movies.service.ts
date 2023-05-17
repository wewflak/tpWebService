import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
