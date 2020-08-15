import { APP_INITIALIZER, Injectable, Provider, Type } from '@angular/core';
import {
  Connection,
  ConnectionOptions,
  createConnection,
  Repository,
} from 'typeorm';

import { environment } from '../../environments/environment';
import { ElectronService } from './electron.service';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(protected electron: ElectronService) {}

  protected options: ConnectionOptions = {
    type: 'sqlite',
    database: environment.dbPathFactory(this.electron.remote.app.getAppPath),
    synchronize: true,
    logging: 'all',
    logger: 'simple-console',
  };

  protected connection: Connection | null = null;

  protected async connect(): Promise<void> {
    this.connection = await createConnection(this.options);
  }

  // tslint:disable-next-line:ban-types
  public static provide(entities: Function[]): Provider {
    return {
      provide: APP_INITIALIZER,
      multi: true,
      deps: [DatabaseService],
      useFactory: (db: DatabaseService) => () => {
        db.options = {
          ...db.options,
          entities,
        };

        return db.connect();
      },
    };
  }

  public getRepository<T>(entity: Type<T>): Repository<T> {
    if (!this.connection) {
      throw new Error('Connection is not ready');
    }
    return this.connection.getRepository(entity);
  }
}
