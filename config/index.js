import path from 'path';
import util from 'util';

import development from './env/development';
import test from './env/test';
import production from './env/production';

const extend = (util)._extend;
const defaults = {
  root: path.normalize(`${__dirname}/..`),
};

const environment = {
  development: extend(development, defaults),
  test: extend(test, defaults),
  production: extend(production, defaults),
}[process.env.DARIES_NODE_ENV || 'development'];

export default environment;
