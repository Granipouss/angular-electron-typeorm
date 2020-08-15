/* eslint-disable @typescript-eslint/unbound-method */

import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { UserService } from './user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
})
export class UserFormComponent {
  constructor(private userService: UserService, private fb: FormBuilder) {}

  newUserForm = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
  });

  onSubmit(): void {
    if (this.newUserForm.invalid) {
      return;
    }

    this.userService.save(this.newUserForm.value).subscribe(() => {
      this.newUserForm.setValue({ firstName: '', lastName: '' });
    });
  }
}
