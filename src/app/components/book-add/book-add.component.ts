import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {CrudBook} from "../../interfaces/CrudBook";
import {NgForm} from "@angular/forms";
import {Book} from "../../interfaces/Book";
import {LibraryServiceService} from "../../services/library-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent {
  @Output() submitEvent: EventEmitter<CrudBook> = new EventEmitter();
  @ViewChild('mainForm', {static: false}) form: NgForm;

  constructor(private libraryServiceService: LibraryServiceService,
              private router: Router) { }

  list: Array<Book> = this.libraryServiceService.books;



  genres: string[] = ['Fantasy','Adventure','Romance','Contemporary','Mystery','Horror','Thriller','Art','Health','Humor'];

  bookForm: CrudBook = {
    name: '',
    author: '',
    year: 2020,
    genre: `${this.genres[0]}`,
    count: 1
  };


  onSubmit(): void {
    const newBook: Book = {
      ...this.bookForm,
      id: Math.random()
    };
    this.list.push(newBook);
    this.router.navigate(['books']).then(e =>
    console.log(e));
  }

}
