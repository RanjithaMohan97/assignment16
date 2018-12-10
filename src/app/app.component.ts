import { Component } from '@angular/core';
import {UserService} from './user.service';
import {Users} from './users';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  users1 : Users[];
  constructor(private _userService:UserService){

  }
  ngOnInit(){
    this._userService.getUsers().subscribe(u => this.users1=u);

  }
}
