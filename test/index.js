import 'babel-polyfill';
import parseMarginArray from '../src';
import chai from 'chai';
chai.should();

describe('parseMarginArray', () => {
  it('should parse a single margin', () => {
    parseMarginArray(10).should.eql({
      top: 10, right: 10, bottom: 10, left: 10,
    });
    parseMarginArray([ 10 ]).should.eql({
      top: 10, right: 10, bottom: 10, left: 10,
    });
  });

  it('should parse a pair of margins', () => {
    parseMarginArray([ 10, 20 ]).should.eql({
      top: 10, right: 20, bottom: 10, left: 20,
    });
  });

  it('should parse a trio of margins', () => {
    parseMarginArray([ 10, 20, 30 ]).should.eql({
      top: 10, right: 20, bottom: 30, left: 20,
    });
  });

  it('should parse a quartet of margins', () => {
    parseMarginArray([ 10, 20, 30, 40 ]).should.eql({
      top: 10, right: 20, bottom: 30, left: 40,
    });
  });
});
