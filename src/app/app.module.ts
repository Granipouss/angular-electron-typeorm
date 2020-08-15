import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DatabaseService } from './core/database.service';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, UserModule],
  providers: [DatabaseService.provide([User])],
  bootstrap: [AppComponent],
})
export class AppModule {}
