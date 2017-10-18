const assert = require('assert');
const converter = require('./index');

describe('Buddhist - Christian era converter', function () {
  it('should return christian year', function () {
    assert.equal(converter.toChristianYear(0), -544);
    assert.equal(converter.toChristianYear(543), -1);
    assert.equal(converter.toChristianYear(544), 1);
    assert.equal(converter.toChristianYear(2560), 2017);
    assert.equal(converter.toChristianYear(2561), 2018);
  });

  it('should return buddhist year', function () {
    assert.equal(converter.toBuddhistYear(2017), 2560);
    assert.equal(converter.toBuddhistYear(1), 544);
    assert.equal(converter.toBuddhistYear(-1), 543);
  });
});
