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
  //   public horoscope(sign: string, date:string, language: string, type:string) : Observable<any>{
  //     let httpOptions= {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       'X-RapidAPI-Key': '18359b2048mshefa50201df80486p14268djsncfef2ea642ec',
  //       'X-RapidAPI-Host': 'horoscopes-ai.p.rapidapi.com'
  //     })
  //   }
  //   return this._http.get('https://horoscopes-ai.p.rapidapi.com/get_horoscope/'+sign+'/'+date+'/'+type+'/'+language+'', httpOptions)
  // }
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
    // getArtists(queryString: any) {
    //   let apiUrl = 'https://api.deezer.com/search/artist?q={queryString}';
    //   return this._http.get(apiUrl).subscribe(async (data: any) => {
    //     this.artistsData = await data.data;
    //   });
    // }
  
    // getTopTracksArtists(artistID: any) {
    //   let apiUrl = 'https://api.deezer.com/artist/{artistID}/top';
    //   return this._http.get(apiUrl).subscribe(async (data: any) => {
    //     this.artistsTopTracksData = await data.data;
    //   });
    // }
  
    // getArtistsAlbums(artistID: any) {
    //   let apiUrl = 'https://api.deezer.com/artist/{artistID}/albums';
    //   return this._http.get(apiUrl).subscribe(async (data: any) => {
    //     this.artistsAlbumsData = await data.data;
    //   });
    // }
  }
