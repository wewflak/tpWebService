import { Component } from '@angular/core';
import { Sign } from 'src/app/models/sign';
import { HoroscopoService } from 'src/app/services/horoscopo.service';

@Component({
  selector: 'app-horoscopo',
  templateUrl: './horoscopo.component.html',
  styleUrls: ['./horoscopo.component.css']
})
export class HoroscopoComponent {
  sign!:Sign
  changedText!:string
  choseSign!:string
  choseDate!:string
  choseType!:string
  active!:number
  submitted!:boolean
  month!:boolean
  constructor(private horoscopeService: HoroscopoService){
    this.active=1
    this.month=false
    this.submitted=false
  }
  ngOnInit(){

  }
  changeText(sign:string){
    if(this.choseSign=="gemini"){
      this.changedText="Geminis"
    }else if(this.choseSign=="capricorn"){
      this.changedText="Capricornio"
    }else if(this.choseSign=="aries"){
      this.changedText="Aries"
    }else if(this.choseSign=="libra"){
      this.changedText="Libra"
    }else if(this.choseSign=="sagittarius"){
      this.changedText="Sagitario"
    }else if(this.choseSign=="pisces"){
      this.changedText="Piscis"
    }else if(this.choseSign=="taurus"){
      this.changedText="Tauro"
    }else if(this.choseSign=="virgo"){
      this.changedText="Virgo"
    }else if(this.choseSign=="leo"){
      this.changedText="Leo"
    }else if(this.choseSign=="scorpio"){
      this.changedText="Scorpio"
    }else if(this.choseSign=="aquarius"){
      this.changedText="Acuario"
    }
  }
  horoscopeDay(sign:string){
    this.horoscopeService.horoscope(sign,"today","es","general").subscribe(
      result=>{
        this.active=0
        this.submitted=true
        console.log(result.general)
        this.choseSign=result.sign
        this.choseDate=result.date
        this.choseType=result.general
        this.changeText(this.choseSign)
      },
      error=>
      {
        console.log(error)
      }
    )
  }
  horoscopeMonth(sign:string){
    this.horoscopeService.horoscope(sign,"monthly","es","general").subscribe(
      result=>{
        this.active=0
        this.submitted=true
        this.month=true
        console.log(result.general)
        this.choseSign=result.sign
        this.choseDate=result.date
        this.choseType=result.general
        this.changeText(this.choseSign)
      },
      error=>
      {
        console.log(error)
      }
    )
  }

}
