import { Component } from '@angular/core';

import { UserService } from './user.service';

@Component({
  selector: 'app-user-list',
  template: '<pre>{{ users$ | async | json }}</pre>',
})
export class UserListComponent {
  constructor(private userService: UserService) {}

  users$ = this.userService.getAll();
}
