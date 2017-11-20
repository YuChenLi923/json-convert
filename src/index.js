const isPlainObject = require('lodash.isplainobject');

function createNewData(json, newjson, key, newKey) {
  let keys = (key = key.replace(/(\.)+$/, '')) && key.split('.'),
      newKeys = (newKey = newKey.replace(/(\.)+$/, '')) && newKey.split('.'),
      value = json,
      i,
      len = keys.length;
  for (i = 0; i < len; i++) {
    let key = keys[i];
    if (typeof value === 'object') {
      value = value[key];
    } else {
      break;
    }
  }
  for (i = 0, len = newKeys.length; i < len - 1; i++) {
    !newjson[newKeys[i]] && (newjson[newKeys[i]] = {});
    newjson = newjson[newKeys[i]];
  }
  newjson[newKeys[len - 1]] = value;
}

function jsonConvert(json, rule) {
  let rules = isPlainObject(rule) && Object.keys(rule),
      newjson = {};
  rules.forEach((key) => {
    createNewData(json, newjson, key, rule[key]);
  });
  return newjson;
}
module.exports = jsonConvert;
