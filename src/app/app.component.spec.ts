import { async, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { DatabaseService } from './core/database.service';
import { ElectronService } from './core/electron.service';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [UserModule],
      providers: [
        {
          provide: ElectronService,
          useValue: {},
        },
        {
          provide: DatabaseService,
          useValue: {},
        },
        {
          provide: UserService,
          useValue: { getAll: () => of([]) },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    jest.spyOn(console, 'log').mockImplementation();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
