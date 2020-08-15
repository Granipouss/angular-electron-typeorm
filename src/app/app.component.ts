import { Component } from '@angular/core';

import { DatabaseService } from './core/database.service';
import { ElectronService } from './core/electron.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    protected electron: ElectronService,
    protected db: DatabaseService,
  ) {
    console.log('ElectronService:', electron);
    console.log('DatabaseService:', db);
  }
}
