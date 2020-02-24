import { Injectable } from '@angular/core';
import {User} from "../interfaces/User";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  public user: Array<User> = [
    {
      name: 'Vladimir',
      takeBook: [
        {
          book: 'Хочу и буду',
          date: '2020-12-17',
        }
      ]
    },
    {
      name: 'Kseniya',
      takeBook: [
        {
          book: 'Хочу и буду',
          date: '2021-04-14',
        }
      ]
    },
    {
      name: 'Oleg',
      takeBook: [
        {
          book: 'Хочу и буду',
          date: '2021-05-24',
        }
      ]
    }
  ];
  constructor() { }
}
