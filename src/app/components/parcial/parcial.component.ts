import { Component, OnInit } from '@angular/core';
import { IpInfo } from 'src/app/models/ip-info';
import { ParcialService } from 'src/app/services/parcial.service';

@Component({
  selector: 'app-parcial',
  templateUrl: './parcial.component.html',
  styleUrls: ['./parcial.component.css']
})
export class ParcialComponent implements OnInit {
  ipSearched!:string
  ipObject!:IpInfo
  submited=false
  latitude!:any
  longitude!:any
  direccion!:string
  constructor(private parcialService: ParcialService){
  }
  getIpInfo(){
    this.parcialService.getInfo(this.ipSearched).subscribe(
      result=>{
        console.log(result)
        var nuevo = new IpInfo(
          result.country,
          result.city,
          result.timezone.date,
          result.timezone.time,
          result.timezone.offset
        )
        this.submited=true
        this.latitude= result.latitude
        this.longitude = result.longitude
        this.ipObject= nuevo
      },
      error=>{
        console.log(error)
      }
    )
  }
  getAddress(){
    console.log(this.latitude + ' aaa' + this.longitude)
    this.parcialService.getAddres(this.latitude, this.longitude).subscribe(
      result=>{
        console.log(result)
      },
      error=>{
        console.log(error)
      }
    )
  }
  prueba(){
    this.parcialService.getAddres(this.latitude, this.longitude).subscribe(
      result=>{
        console.log(result)
      },
      error=>{
        console.log(error)
      }
    )
  }
  ngOnInit(): void {
  }
}
