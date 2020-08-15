import { Injectable } from '@angular/core';
import { BehaviorSubject, from, Observable } from 'rxjs';
import { finalize, mapTo, shareReplay, switchMap } from 'rxjs/operators';

import { User } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private repo: UserRepository) {}

  updateSubject = new BehaviorSubject(true);

  getAll(): Observable<User[]> {
    return this.updateSubject.pipe(
      switchMap(() => from(this.repo.find())),
      shareReplay(),
    );
  }

  save(entity: Partial<User>): Observable<void> {
    return from(this.repo.save(entity)).pipe(
      finalize(() => this.updateSubject.next(true)),
      mapTo(undefined),
    );
  }
}
