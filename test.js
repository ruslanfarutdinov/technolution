let expect = require('chai').expect;
let CashRegister = require('./assignment.js');

describe('Cash Register', function() {
  let register = new CashRegister();

  describe('ringUp', function() {
    it('should only accept number type as an argument', function() {
      expect(register.ringUp.bind(register, 'string')).to.throw();
    });
    it('should return undefined', function() {
      expect(register.ringUp(1)).to.equal(undefined);
    });
  });

  describe('getMax', function() {
    it('should always return the max integer', function() {
      register.ringUp(0);
      expect(register.getMax()).to.equal(1);
    });
  });

  describe('getMin', function() {
    it('should always return the min integer', function() {
      expect(register.getMin()).to.equal(0);
    });
  });

  describe('getMean', function() {
    it('should return the correct mean', function() {
      register.ringUp(3);
      register.ringUp(1);
      expect(register.getMean()).to.equal(1.25);
    });
  });

  describe('getMode', function() {
    it('should return the correct mode', function() {
      expect(register.getMode()).to.equal(1);
    });
  });
  
});