export class Pelicula {
    imdbId!: string
    movieTitle!: string
    movieYear!: number
    movieScore!: number
    constructor(imdbId: string,movieTitle: string,movieYear: number,movieScore: number ){
        this.imdbId=imdbId
        this.movieTitle = movieTitle
        this.movieYear=movieYear
        this.movieScore=movieScore
    }
}
