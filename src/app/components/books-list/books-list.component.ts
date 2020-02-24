import {Component} from '@angular/core';
import {Book} from "../../interfaces/Book";
import {BookServicesService} from "../../services/book-services.service";
import {LibraryServiceService} from "../../services/library-service.service";

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent {

  constructor(private libraryServiceService: LibraryServiceService,
              private bookServicesService: BookServicesService) { }


  list: Array<Book> = this.libraryServiceService.books;

  onDeleteItem(id: number): void {
    this.bookServicesService.deleteBook(id);
    this.list = this.libraryServiceService.books
  }

  onSaveItem(item: Book): void {
    this.bookServicesService.saveBook(item)
  }

}
