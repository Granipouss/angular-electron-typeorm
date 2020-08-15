export const environment = {
  production: true,
  dbPathFactory: (getAppPath: (key?: string) => string) =>
    [getAppPath('userData'), 'database.db'].join('/'),
};
