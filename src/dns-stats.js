const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arrSplit = domains.reduce((acc, curr) => {
    const txtSplit = curr.split('.').reverse();

    txtSplit.forEach((__, index) => {
      acc.push(`.${txtSplit.slice(0, index + 1).join('.')}`)
    })

    return acc;
   }, [])

   const obj = arrSplit.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1
    return acc;
   }, {})

   return obj;
}

module.exports = {
  getDNSStats
};
