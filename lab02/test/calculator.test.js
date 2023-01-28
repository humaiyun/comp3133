const calculator = require('../app/calculator');
const chai = require('chai');
const expect = chai.expect;

describe('Calculator', () => {
    describe('add', () => {
      it('should return the sum of two numbers', () => {
        const result = calculator.add(2, 3);
        expect(result).to.equal(5);
      });
      it('should return the sum of two numbers but fails', () => {
        const result = calculator.add(2, 3);
        expect(result).to.equal(6);
      });
    });
    
    describe('mul', () => {
      it('should return the product of two numbers', () => {
        const result = calculator.mul(2, 3);
        expect(result).to.equal(6);
      });
      it('should return the product of two numbers but fails', () => {
        const result = calculator.mul(2, 3);
        expect(result).to.equal(5);
      });
    });
    
    describe('div', () => {
      it('should return the quotient of two numbers', () => {
        const result = calculator.div(6, 3);
        expect(result).to.equal(2);
      });
      it('should return the quotient of two numbers but fails', () => {
        const result = calculator.div(6, 3);
        expect(result).to.equal(3);
      });
    });
    describe('sub', () => {
      it('should return the difference of two numbers', () => {
        const result = calculator.sub(6, 3);
        expect(result).to.equal(3);
      });
      it('should return the difference of two numbers but fails', () => {
        const result = calculator.sub(6, 3);
        expect(result).to.equal(2);
      });
    });
  });