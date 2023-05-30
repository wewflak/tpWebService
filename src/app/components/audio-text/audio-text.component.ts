import { Component, OnInit } from '@angular/core';
import { PracticaService } from 'src/app/services/practica.service';

@Component({
  selector: 'app-audio-text',
  templateUrl: './audio-text.component.html',
  styleUrls: ['./audio-text.component.css']
})
export class AudioTextComponent implements OnInit{
  constructor(private audioService: PracticaService){

  }

  ngOnInit(): void {
  }

  getAudio(){
    this.audioService.transformText('Holaaa').subscribe(
      result=>{
        console.log(result)
      },
      error=>{
        console.log(error)
      }
    )
  }
}
