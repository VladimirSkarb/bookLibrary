import { Component } from '@angular/core';
import {User} from "../../interfaces/User";
import {UsersService} from "../../services/users.service";
import {LibraryServiceService} from "../../services/library-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-return-the-book',
  templateUrl: './return-the-book.component.html',
  styleUrls: ['./return-the-book.component.css']
})
export class ReturnTheBookComponent {

  constructor(private usersService: UsersService,
              private libraryServiceService: LibraryServiceService,
              private router: Router) { }

  listOfUsers: Array<User> = this.usersService.user;

  takeForm: boolean = false;


  userForm: User = {
    name: '',
    takeBook: [
      {
        book: ''
      }
    ]
  };

  onSubmit(): void {
    const filterName = this.listOfUsers.find(value => value.name === this.userForm.name);
    const findTitle = filterName.takeBook.find(value => value.book === this.userForm.takeBook[0].book);
    if (filterName && findTitle !== undefined) {
      const indexOfTitle = filterName.takeBook.indexOf(findTitle);
      filterName.takeBook.splice(indexOfTitle, 1);
      const takeItem = this.libraryServiceService.books.find(value => value.name === this.userForm.takeBook[0].book);
      takeItem.count = takeItem.count + 1;
      this.router.navigate(['books']).then(e =>
        console.log(e));
    } else {
      this.takeForm = !this.takeForm
    }
  }

}
