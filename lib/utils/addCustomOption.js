'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCustomOption = getCustomOption;

var _uniqueId = require('lodash/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getCustomOption(text, labelKey) {
  return _defineProperty({
    customOption: true,
    id: (0, _uniqueId2.default)('new-id-')
  }, (0, _index.getStringLabelKey)(labelKey), text);
}

function addCustomOption(results, text, labelKey) {
  var exactMatchFound = results.some(function (o) {
    return (0, _index.getOptionLabel)(o, labelKey) === text;
  });

  if (!text.trim() || exactMatchFound) {
    return results;
  }

  return [].concat(_toConsumableArray(results), [getCustomOption(text, labelKey)]);
}

exports.default = addCustomOption;