// tslint:disable:quotemark

import { resolve } from 'path';
import { Configuration } from 'webpack';

export default {
  externals: {
    sqlite3: "window.require('sqlite3')",
    typeorm: "window.require('typeorm')",
  },
  resolve: {
    alias: {
      typeorm: resolve(__dirname, '../node_modules/typeorm/typeorm-model-shim'),
    },
  },
} as Configuration;
