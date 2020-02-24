import { Injectable } from '@angular/core';
import {Book} from "../interfaces/Book";
import {LibraryServiceService} from "./library-service.service";

@Injectable({
  providedIn: 'root'
})
export class BookServicesService {

  constructor(public libraryServiceService: LibraryServiceService) {
  }

  deleteBook(id: number): void {
    const listOfBook = this.libraryServiceService.books;
    this.libraryServiceService.books = listOfBook.filter((book: Book) => book.id != id);
  }

  saveBook(item: Book): void {
    const editedItem = this.libraryServiceService.books.find(elem => elem.id === item.id);
    editedItem.name = item.name;
    editedItem.author = item.author;
    editedItem.year = item.year;
    editedItem.genre = item.genre;
    editedItem.count = item.count;
  }
}
