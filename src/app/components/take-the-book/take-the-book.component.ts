import { Component } from '@angular/core';
import {User} from "../../interfaces/User";
import {UsersService} from "../../services/users.service";
import {LibraryServiceService} from "../../services/library-service.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-take-the-book',
  templateUrl: './take-the-book.component.html',
  styleUrls: ['./take-the-book.component.css']
})
export class TakeTheBookComponent {

  constructor(private usersService: UsersService,
              private libraryServiceService: LibraryServiceService,
              private router: Router) { }

  listOfUsers: Array<User> = this.usersService.user;

  takeForm: boolean = false;

  userForm: User = {
    name: '',
    takeBook: [
      {
        book: '',
        date: ''
      }
    ]

  };

  onSubmit(): void {
    const filterName = this.listOfUsers.find(value => value.name === this.userForm.name);
    const takeItem = this.libraryServiceService.books.find(value => value.name === this.userForm.takeBook[0].book);
    const newUser: User = {
      ...this.userForm,
    };
    const enterBook = this.userForm.takeBook[0].book;

    if (!filterName && takeItem && takeItem.count >= 1) {
      takeItem.count = takeItem.count-1;
      this.listOfUsers.push(newUser);
      this.router.navigate(['books']).then(e =>
        console.log(e));
    } else if (takeItem && takeItem.count >= 1 && filterName.name  && !filterName.takeBook.find(el => el.book === this.userForm.takeBook[0].book)) {
      !filterName.takeBook.find(el => el.book === enterBook);
      takeItem.count = takeItem.count-1;
      filterName.takeBook.push(newUser.takeBook[0]);
      this.router.navigate(['books']).then(e =>
        console.log(e));
    } else {
      this.takeForm = !this.takeForm
    }
  }

}
