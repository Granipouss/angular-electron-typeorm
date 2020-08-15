import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserFormComponent } from './user-form.component';
import { UserListComponent } from './user-list.component';

@NgModule({
  declarations: [UserFormComponent, UserListComponent],
  exports: [UserFormComponent, UserListComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class UserModule {}
