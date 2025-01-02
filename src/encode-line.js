const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let n = 1;

  let txt = '';

  for (let i = 0; i <= str.length; i++) {
    if(str[i] === str[i + 1]) {
      n++
    } else {
      txt += (n === 1) ? str[i] : n + str[i];
      n = 1
    }
  };

  return txt;
}

module.exports = {
  encodeLine
};
