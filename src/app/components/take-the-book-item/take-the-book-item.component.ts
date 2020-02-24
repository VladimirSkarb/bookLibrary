import {Component, Input } from '@angular/core';
import {User} from "../../interfaces/User";

@Component({
  selector: 'app-take-the-book-item',
  templateUrl: './take-the-book-item.component.html',
  styleUrls: ['./take-the-book-item.component.css']
})
export class TakeTheBookItemComponent {
  @Input() item: User;

}
