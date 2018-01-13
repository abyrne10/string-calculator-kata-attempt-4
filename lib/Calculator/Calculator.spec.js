'use strict';

const Calculator = require('./Calculator');
const expect = require('chai').expect;

describe('Calculator module', () => {
    describe('add', () => {
        it('should export a function', () => {
            expect(Calculator.add).to.be.a('function');
        });
        it('should return 0 when given an empty string', () => {
            expect(Calculator.add('')).to.equal(0);
        });
        it('should return 1 when given "1"', () => {
            expect(Calculator.add('1')).to.equal(1);
        });
        it('should return 3 when given "1,2"', () => {
            expect(Calculator.add('1,2')).to.equal(3);
        });
        it('should return 10 when given "1,2,3,4"', () => {
            expect(Calculator.add('1,2,3,4')).to.equal(10);
        });
        it('should should return 6 when given "1\\n2,3"', () => {
            expect(Calculator.add('1\n2,3')).to.equal(6);
        });
    });
});
