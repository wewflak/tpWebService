import { Component, OnInit } from '@angular/core';
import { PracticaService } from 'src/app/services/practica.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit{
  cityName!:string
  cityLat!:number
  cityLon!:number
  cityCountry!:string
  cityMain!:string
  cityDesc!:string
  constructor(private climaService: PracticaService){

  }
  ngOnInit(): void {
  }

}
