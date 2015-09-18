import resolver from './helpers/resolver';
import {
  setResolver
} from 'ember-qunit';

import startApp from './helpers/start-app';
export default startApp;

setResolver(resolver);
