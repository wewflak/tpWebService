import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from 'src/app/models/album';
import { Artist } from 'src/app/models/artist';
import { Deezer } from 'src/app/models/deezer';
import { Track } from 'src/app/models/track';
import { MusicaService } from 'src/app/services/musica.service';
declare var window:any;
@Component({
  selector: 'app-musica',
  templateUrl: './musica.component.html',
  styleUrls: ['./musica.component.css']
})
export class MusicaComponent implements OnInit{
artists: any;
formModal:any;
modalError:any;
artistId!:number
albumPicture!:string
tracksOf:Array<Track>;
artistSearched!:string
objectData!:any
sameArtist=false;
deezerData: Array<Deezer>;
artistData:Artist;
submitted=false;
artistsSelected=false;
displayedColumns=['id', 'picture', 'name'];
filterArtist:any;
ngOnInit(){
  this.formModal=new window.bootstrap.Modal(
    document.getElementById("exampleModal")
  )
  this.modalError = new window.bootstrap.Modal(
    document.getElementById("compra")
  )
}
openModal(){
  this.formModal.show()
}
doSomething(){
  this.formModal.hide()
}
constructor(private artistService: MusicaService, private router:Router){
  this.deezerData = new Array<Deezer>
  this.artistSearched=""
  this.artistData = new Artist()
  this.tracksOf = new Array<Track>
}
getArtists() {
  console.log(this.artistSearched)
  this.cleanTracks();
  this.artistService.getArtist(this.artistSearched).subscribe(async (data: any) => {
    this.submitted = true
    this.objectData = await data.data;
    this.deezerData= data.data
    this.artistId = data.data[0].artist.id
    this.getTrack(data.data)
  });
}
public cleanTracks(){
  while(this.tracksOf.length>0){
    this.tracksOf.pop();
  }
}
public cleanObject(object:any){
  object.trackTitle=""
  object.trackId=0
  object.trackAlbumName=""
  object.trackAlbumPicture=""
  object.trackArtistName=""
}
verArray(array:any){
  if(array.length>2){
    
  console.log("Pruebaaa Inicio")
    for(let i=0;i<array.length;i++){
  
    }
    
    console.log("Pruebaaa Fin")
  }
}
getTrack(data:any){
  for(let i=0;i<data.length && i<9;i++){
    var nueva = new Track(
      data[i].id,
      data[i].title,
      data[i].preview,
      data[i].album.cover_xl,
      data[i].artist.name,
      data[i].album.title
    )
    this.tracksOf.push(nueva)
  }
  this.verArray(this.tracksOf)
}
getDetail(data:any){
  this.artistData.artistID = data.artist.id
  this.artistData.artistName = data.artist.name
  this.artistData.artistPicture = data.artist.picture_xl
  console.log(this.artistData.artistName+''+this.artistData.artistID+'artistaaa' + this.artistId+' de antes')
}
getAlbumDetail(data:any){

}
goToArtistDetail(data:any){
  this.router.navigate(['artist-detail'],{state:{data}});
  console.log(this.router.navigate(['artist-detail'],{state:{data}}))
}
}
