import { Component, OnInit } from '@angular/core';
import {User} from "../../interfaces/User";
import {UsersService} from "../../services/users.service";

@Component({
  selector: 'app-take-the-book-list',
  templateUrl: './take-the-book-list.component.html',
  styleUrls: ['./take-the-book-list.component.css']
})
export class TakeTheBookListComponent {

  constructor(private usersService: UsersService) { }

  list: Array<User> = this.usersService.user;
}
