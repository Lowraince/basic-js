const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  const arrF = members.filter(el => typeof el === 'string')

  const arrNew = arrF.map((el) => el.trim().slice(0, 1).toUpperCase())

  arrNew.sort((a,b) => a.localeCompare(b))

  return arrNew.sort((a,b) => a.localeCompare(b)).join('');
}

module.exports = {
  createDreamTeam
};
