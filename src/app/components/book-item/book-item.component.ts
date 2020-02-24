import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Book} from "../../interfaces/Book";
import {CrudBook} from "../../interfaces/CrudBook";

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent {
  @Input() item: Book;
  @Output() deleteEvent: EventEmitter<number> = new EventEmitter();
  @Output() saveEvent: EventEmitter<object> = new EventEmitter();


  bookForm: CrudBook = {
    name: '',
    author: '',
    year: 1,
    genre: '',
    count: 1
  };

  genres: string[] = ['Fantasy','Adventure','Romance','Contemporary','Mystery','Horror','Thriller','Art','Health','Humor'];

  formEdit: boolean = false;
  editBtn: string = 'Edit';

  deleteItem(): void{
    this.deleteEvent.emit(this.item.id);
  }

  editItem(): void {
    if (this.formEdit) {
      this.editBtn = 'Edit';
    } else {
      this.editBtn = 'Cancel';
    }
    this.formEdit = !this.formEdit;
    this.bookForm.name = this.item.name;
    this.bookForm.author = this.item.author;
    this.bookForm.year = this.item.year;
    this.bookForm.genre = this.item.genre;
    this.bookForm.count = this.item.count;
  }

  onSubmit(): void {
    this.saveEvent.emit({id: this.item.id, ...this.bookForm});
    this.formEdit = !this.formEdit;
    this.editBtn = 'Edit';
  }

}
