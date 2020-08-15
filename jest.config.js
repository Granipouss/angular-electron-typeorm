// tslint:disable:quotemark
// tslint:disable:object-literal-sort-keys

module.exports = {
  globals: {
    'ts-jest': {
      allowSyntheticDefaultImports: true,
    },
  },
  transform: {
    '^.+\\.js$': 'babel-jest',
  },
  setupFiles: ['./jest.setup.ts'],
};
