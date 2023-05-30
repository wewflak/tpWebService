import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicaService {

  constructor(private _http: HttpClient) { }
    artistsData: any;
    artistsTopTracksData: any;
    artistsAlbumsData: any;
    public getArtist(artistName: string){
      let httpOptions={
        params:{q:artistName},
        headers: new HttpHeaders({
          'X-RapidAPI-Key': '18359b2048mshefa50201df80486p14268djsncfef2ea642ec',
          'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        })
      }
      return this._http.get('https://deezerdevs-deezer.p.rapidapi.com/search',httpOptions)
    }
    public getTrack(trackId:number){
      
    }
  }
