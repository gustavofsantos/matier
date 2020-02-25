const match = require('./index');
const assert = require('assert');

const id = (x) => x;

const isString = (x) => typeof x === 'string';
const isNumber = (x) => typeof x === 'number';
const isPromise = (x) => typeof x === 'object' &&
  'then' in object &&
  x instanceof Promise;

const uppercase = (x) => x.toUpperCase();
const addOne = (x) => x + 1;

assert.strictEqual(
  match('two', [isString, uppercase], [isNumber, addOne]),
  'TWO',
  'Should apply the right function in strings'
);

assert.strictEqual(
  match(2, [isString, uppercase], [isNumber, addOne]),
  3,
  'Should apply the right function in numbers'
);