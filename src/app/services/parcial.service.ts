import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParcialService {

  constructor( private _http: HttpClient) { }
  public getInfo(query:string): Observable<any>{
    const encodedParams = new HttpParams()
    .set('ip', query)
    .set('reverse-lookup', 'checked');
    const headers = new HttpHeaders({
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Key': 'ebd5a0ca77msh4399c36041f7251p1fea76jsn2a6aa2f411ba',
      'X-RapidAPI-Host': 'community-neutrino-ip-info.p.rapidapi.com'
    });
    const options ={
      headers
    };
    return this._http.post('https://community-neutrino-ip-info.p.rapidapi.com/ip-info', encodedParams.toString(),options)
  }
  public getAddres(lat:number, long:number):Observable<any>{
    const options = {
      method: 'GET',
      url: 'https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi',
      params: {
        lat: '-24.19444',
        lng: '-65.29756'
      },
      headers: {
        'X-RapidAPI-Key': 'ebd5a0ca77msh4399c36041f7251p1fea76jsn2a6aa2f411ba',
        'X-RapidAPI-Host': 'address-from-to-latitude-longitude.p.rapidapi.com'
      }
    };
    return this._http.get('https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi', options)
  }
}
