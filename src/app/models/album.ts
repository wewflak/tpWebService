import { Track } from "./track"
import { Artist } from "./artist"
export class Album {
    idVideo!: string
    nameVideo!:string
    channelVideo!:string
    chanelPicture!:string
    urlVideo!:string
    constructor(idVideo:string, nameVideo:string, channelVideo:string, chanelPicture:string, urlVideo:string){
        this.idVideo = idVideo
        this.nameVideo= nameVideo
        this.channelVideo = channelVideo
        this.chanelPicture = chanelPicture
        this.urlVideo = urlVideo

    }
}
