import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookItemComponent } from './components/book-item/book-item.component';
import {FormsModule} from "@angular/forms";
import { BookAddComponent } from './components/book-add/book-add.component';
import { TakeTheBookComponent } from './components/take-the-book/take-the-book.component';
import { ReturnTheBookComponent } from './components/return-the-book/return-the-book.component';
import { TakeTheBookListComponent } from './components/take-the-book-list/take-the-book-list.component';
import { TakeTheBookItemComponent } from './components/take-the-book-item/take-the-book-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BookItemComponent,
    BookAddComponent,
    TakeTheBookComponent,
    ReturnTheBookComponent,
    TakeTheBookListComponent,
    TakeTheBookItemComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
