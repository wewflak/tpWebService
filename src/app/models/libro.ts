export class Libro {
    bookId!:number
    bookName!: string
    bookCover!: string
    bookAuthor!: Array<string>
    constructor(bookId:number, bookName:string, bookCover:string, bookAuthor:Array<string>){
        this.bookId = bookId
        this.bookName = bookName 
        this.bookCover = bookCover
        this.bookAuthor = bookAuthor
    }
}
