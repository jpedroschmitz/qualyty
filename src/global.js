const expect = require('./methods/expect');
const test = require('./methods/test');
const describe = require('./methods/describe');

global.test = test;
global.expect = expect;
global.describe = describe;
