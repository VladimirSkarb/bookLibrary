import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookAddComponent} from "./components/book-add/book-add.component";
import {BooksListComponent} from "./components/books-list/books-list.component";
import {TakeTheBookComponent} from "./components/take-the-book/take-the-book.component";
import {TakeTheBookListComponent} from "./components/take-the-book-list/take-the-book-list.component";
import {ReturnTheBookComponent} from "./components/return-the-book/return-the-book.component";


const routes: Routes = [
  {path: '', component: BooksListComponent},
  {path: 'add', component: BookAddComponent},
  {path: 'books', component: BooksListComponent},
  {path: 'takeBook', component: TakeTheBookComponent},
  {path: 'takeList', component: TakeTheBookListComponent},
  {path: 'returnList', component: ReturnTheBookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
