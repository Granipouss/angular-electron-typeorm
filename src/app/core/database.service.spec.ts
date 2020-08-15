import { TestBed } from '@angular/core/testing';

import { DatabaseService } from './database.service';
import { ElectronService } from './electron.service';

describe('DatabaseService', () => {
  let service: DatabaseService;

  // beforeAll(() => {
  //   (window as any).require = () => ({});
  // });

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: ElectronService,
          useValue: { remote: { app: { getAppPath: () => '' } } },
        },
      ],
    });
    service = TestBed.inject(DatabaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
