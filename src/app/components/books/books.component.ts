import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { PracticaService } from 'src/app/services/practica.service';

declare var window:any;
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  bookSearched!:string
  bookAuthors!:Array<string>
  booksArray!:Array<Libro>
  submitted=false
  bookDescription!:any
  bookName!:string
  id!:any;
  formModal:any;
  modalDescription:any;
  constructor(private booksService: PracticaService){
    this.booksArray = new Array<Libro>
    this.bookAuthors = new Array<string>
  }
  ngOnInit(){
    this.formModal=new window.bootstrap.Modal(
      document.getElementById("bookModal")
    )
    this.modalDescription=new window.bootstrap.Modal(
      document.getElementById("bookDescription")
    )
  }
  openModal(){
    this.formModal.show()
  }
  doSomething(){
    this.formModal.hide()
  }
  openModal2(){
    this.modalDescription.show()
  }
  doSomething2(){
    this.modalDescription.hide()
  }
  getBookDescription(id:number){
    this.id = id.toString()
    console.log(this.id)
    this.booksService.getDescription(this.id).subscribe(
      result=>{
        console.log(result)
        this.bookDescription = result.synopsis
        this.bookName = result.name
        this.openModal2()
      },
      error=>{
        console.log(error)
      }
    )
  }
  getBooks(){
    if(this.bookSearched.length==0){
      console.log('no pasa')
      this.openModal()
    }else{
      this.clearArray(this.booksArray)
    this.booksService.getBooks(this.bookSearched).subscribe(
      result=>{
        console.log(result)
        this.submitted=true
        for(let i=0;i<result.length;i++){
          this.clearArray(this.bookAuthors)
        for(let element of result[i].authors){
          this.bookAuthors.push(element)
        }
        var nuevo = new Libro(
          result[i].book_id,
          result[i].name,
          result[i].cover,
          this.bookAuthors
        )
        console.log(nuevo.bookCover 
          + 'nuevo')
        this.booksArray.push(nuevo)
        }
      },
      error=>{
        console.log(error)
      }
    )
  }
}
  clearArray(array:any){
      while(array.length>0){
        array.pop()
      }
    }
}
