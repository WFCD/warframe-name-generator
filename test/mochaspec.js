'use strict';

const chai = require('chai');
const { Generator } = require('../index.js');

const should = chai.should();

describe('The Generator', () => {
  const generator = new Generator();

  it('should provide a default name with no extra call', () => {
    should.exist(generator.default);
  });

  it('should generate a name with no parameters', () => {
    (() => {
      const name = generator.make({ debug: false, adjective: true });
      should.exist(name);
    }).should.not.throw();
  });

  it('should generate unique names', () => {
    const name = generator.make({ debug: false, adjective: true });
    const name2 = generator.make({ debug: false, adjective: true });
    should.not.equal(name, name2);
  });

  it('should generate 10k names without issues', () => {
    (() => {
      for (let i = 0; i < 10000; i += 1) {
        generator.make({ debug: false, adjective: true, nouns: Math.floor(Math.random() * 10) });
      }
    }).should.not.throw();
  });
});
