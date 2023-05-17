export class PeliculaDetalle {
    title!:string
    year!:number
    date!:string
    description!:string
    runtime!:number
    imdbRating!:number
    imdbVotes!:number
    metacriticRating!:number
    metacriticVotes!:number
    rottenTomatoesRating!:number
    rottenTomatoesVotes!:number
    ageRated!:number
    language!:string
    country!:string
    status!:string
    trailer!:string
    poster!:string
    constructor(title:string, year:number, date:string, description:string, runtime:number, imdbRating:number, imdbVotes:number,
        metacriticVotes:number, metacriticRating:number, rottenTomatoesRating:number, rottenTomatoesVotes:number, ageRated:number,
        language:string, country:string, status:string, trailer: string, poster:string){
            this.title=title
            this.year=year
            this.date=date
            this.description=description
            this.runtime=runtime
            this.imdbRating=imdbRating
            this.imdbVotes=imdbVotes
            this.metacriticVotes=metacriticVotes
            this.metacriticRating=metacriticRating
            this.rottenTomatoesRating=rottenTomatoesRating
            this.rottenTomatoesVotes=rottenTomatoesVotes
            this.ageRated=ageRated
            this.language=language
            this.country=country
            this.status= status
            this.trailer=trailer
            this.poster=poster
    }
}
