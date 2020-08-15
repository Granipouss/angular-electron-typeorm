import { Injectable } from '@angular/core';
import { Repository } from 'typeorm';

import { DatabaseService } from '../core/database.service';
import { User } from './user.entity';

@Injectable({
  providedIn: 'root',
  useFactory: (db: DatabaseService) => db.getRepository(User),
  deps: [DatabaseService],
})
export class UserRepository extends Repository<User> {}
