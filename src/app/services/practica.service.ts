import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PracticaService {

  constructor( private _http: HttpClient) { }
  
    public getBooks(bookName: string): Observable<any>{
      let httpOptions={
        headers: new HttpHeaders({
          'X-RapidAPI-Key': '18359b2048mshefa50201df80486p14268djsncfef2ea642ec',
          'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
        })
      }
      return this._http.get('https://hapi-books.p.rapidapi.com/search/'+bookName+'',httpOptions)
    }
    public getDescription(book_id: string): Observable<any>{
      let httpOptions={
        headers: new HttpHeaders({
          'X-RapidAPI-Key': '18359b2048mshefa50201df80486p14268djsncfef2ea642ec',
          'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
        })
      }
      return this._http.get('https://hapi-books.p.rapidapi.com/book/'+book_id+'', httpOptions);
    }
    public getWeather(city:string):Observable<any>{
      let httpOptions={
        headers: new HttpHeaders({
          'X-RapidAPI-Key': '18359b2048mshefa50201df80486p14268djsncfef2ea642ec',
          'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
        })
      }
      return this._http.get('https://open-weather13.p.rapidapi.com/city/landon'+city+'', httpOptions);
    }
    public getQr(url:string): Observable<any>{
          const encodedParams = new HttpParams()
          .set('content', url)
          .set('width', '128')
          .set('height', '128')
          .set('fg-color', '#000000')
          .set('bg-color', '#ffffff');
        
        const headers = new HttpHeaders({
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': '18359b2048mshefa50201df80486p14268djsncfef2ea642ec',
          'X-RapidAPI-Host': 'neutrinoapi-qr-code.p.rapidapi.com'
        });
        const options = { 
          headers,
          responseType: 'blob' as 'json'
        };
        return this._http.post('https://neutrinoapi-qr-code.p.rapidapi.com/qr-code', encodedParams.toString(), options)
    }
    public transformText(text:string){
      const encodedParams = new URLSearchParams();
      encodedParams.set('voice_code', 'es-AR-1');
      encodedParams.set('text', text);
      encodedParams.set('speed', '1.00');
      encodedParams.set('pitch', '1.00');
      encodedParams.set('output_type', 'audio_url');
      let httpOptions={
        params: encodedParams.toString(),
        headers: new HttpHeaders({
          'content-type': 'application/x-www-form-urlencoded',
          'X-RapidAPI-Key': '18359b2048mshefa50201df80486p14268djsncfef2ea642ec',
          'X-RapidAPI-Host': 'cloudlabs-text-to-speech.p.rapidapi.com'
        })
      }
      return this._http.post('https://cloudlabs-text-to-speech.p.rapidapi.com/synthesize', httpOptions)
}
}
