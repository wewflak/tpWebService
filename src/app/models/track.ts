import { Album } from "./album"
import { Artist } from "./artist"
export class Track {
    trackId!:number
    trackTitle!:string
    trackPreview!:string
    trackAlbumPicture!:string
    trackArtistName!:string
    trackAlbumName!:string

    constructor(trackId:number, trackTitle:string, trackPreview:string, trackAlbumPicture:string, trackArtistName:string,
        trackAlbumName:string){
        
            this.trackId = trackId
            this.trackTitle = trackTitle
            this.trackPreview = trackPreview
            this.trackAlbumPicture = trackAlbumPicture
            this.trackArtistName = trackArtistName
            this.trackAlbumName = trackAlbumName
        }
}
