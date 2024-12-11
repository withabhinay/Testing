// import {describe, expect, test} from '@jest/globals';
// import {sum} from '../index';

// describe('sum module', () => {
//   test('adds 1 + 2 to equal 3', () => {
//     expect(sum(1, 2)).toBe(3);
//   });
// });

//for learning test in js -> have to learn describe, test/ it

import {describe, expect, it} from '@jest/globals';
import {sum, mul} from '../index';

describe('testing sum function', () => { //describe is a function that groups tests together
  //we can test as many as test possible in a describe
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('adds 1 + 2 to equal 3', () => {
    const finalanswer = sum(3, 2);
    expect(finalanswer).toBe(5);
  });
});

describe('testing multiply function', () => {
  it('multiply 1 * 2 to equal 2', () => {
    expect(mul(1, 2)).toBe(2);
  });
});
