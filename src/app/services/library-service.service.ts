import { Injectable } from '@angular/core';
import {Book} from "../interfaces/Book";

@Injectable({
  providedIn: 'root'
})
export class LibraryServiceService {
  public books: Array<Book> = [
    {
      id:1,
      name: 'Хочу и буду',
      author: 'Михаил Лабковский',
      year: 2018,
      genre: 'Health',
      count: 1
    },
    {
      id:2,
      name: 'Гаррі Поттер',
      author: 'Джоан Роулинг',
      year: 2016,
      genre: 'Fantasy',
      count: 10
    },
    {
      id:3,
      name: 'Rework',
      author: 'Джейсон Фрайд',
      year: 2016,
      genre: 'Health',
      count: 10
    },
    {
      id:4,
      name: 'Шантарам',
      author: 'Грегори Дэвид Робертс',
      year: 2013,
      genre: 'Romance',
      count: 10
    },
    {
      id:5,
      name: '1984',
      author: 'Джордж Оруэлл',
      year: 2015,
      genre: 'Thriller',
      count: 10
    }
  ];

  constructor() { }
}
