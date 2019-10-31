'use strict';

const chai = require('chai');
const sinon = require('sinon');
const { Generator } = require('../index.js');

const should = chai.should();

const debug = sinon.spy(console, 'debug');

describe('The Generator', () => {
  const generator = new Generator();

  it('should provide a default name with no extra call', () => {
    should.exist(generator.default);
  });

  describe('#make', () => {
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

    it('should throw with an invalid race', () => {
      (() => {
        generator.make({ debug: false, adjective: true, race: 'duviri' });
      }).should.throw();
    });

    it('should throw with an invalid type', () => {
      (() => {
        generator.make({ debug: false, adjective: true, type: 'verb' });
      }).should.throw();
    });

    it('should call console debug when debugging', () => {
      generator.make({ debug: true, adjective: true });
      debug.callCount.should.equal(1);
    });

    it('should include race if requested', () => {
      const name = generator.make({
        debug: false, adjective: true, type: 'names', includeRace: true, race: 'grineer',
      });
      name.should.include('Grineer');
    });

    it('should generate a string with no spaces if told to ignore spaces', () => {
      (() => {
        const name = generator.make({
          debug: false, adjective: true, race: 'grineer', spaces: false,
        });
        name.should.not.include(' ');
      }).should.not.throw();
    });
  });
  describe('#getNoun', () => {
    it('should not throw with no parameters', () => {
      (() => {
        generator.random;
      }).should.not.throw();
    });

    it('should throw if provided a bad race', () => {
      (() => {
        generator.getNoun([], { race: 'duviri' });
      }).should.throw();
    });

    it('should throw if provided a bad type', () => {
      (() => {
        generator.getNoun([], { race: 'grineer', type: 'verb' });
      }).should.throw();
    });

    it('should succeed if not provided a race', () => {
      (() => {
        generator.getNoun([], { type: 'names' });
      }).should.not.throw();
    });
  });
  describe('#another', () => {
    it('should retrieve another entry not already in tokens', () => {
      (() => {
        const another = generator.another(['De\'Thaym']);
        another.should.not.include('De\'Thaym');
      });
    });

    it('should not throw with no parameters', () => {
      (() => {
        generator.another();
      }).should.not.throw();
    });
  });
});
