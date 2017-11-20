const assert  = require('assert'),
      jsonConvert = require('json-convert');
describe('convert json to json', function () {
  it('json convert', () => {
    const json = {
      a: {
        s: 1
      },
      c: 4,
      d: [{
        c: 3
      }]
    };
    assert.deepEqual(jsonConvert(json, {'a.s': 't.x', c: 'd', 'd.0.c': 'x'}), {
      t: {
        x: 1
      },
      d: 4,
      x: 3
    });
  });
});