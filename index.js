
const BUDDHIST_TO_CHRISTIAN_ADJUSTMENT = 544;

/**
 * Convert from Buddhist year to Christian year
 * If the value lower than 0 mean Before Christian Year
 * @param {Number} buddhistYear 
 * @returns {Number} christianYear
 */
function toChristianYear(buddhistYear) {
  const christianYear = buddhistYear - BUDDHIST_TO_CHRISTIAN_ADJUSTMENT;
  return christianYear >= 0 ? christianYear + 1 : christianYear;
}

/**
 * Convert from Christian year to Buddhist year
 * If the value lower than 0 mean Before Buddhist Year
 * @param {Number} christianYear 
 * @returns {Number} buddhistYear
 */
function toBuddhistYear(christianYear) {
  if (christianYear == 0) {
    throw new Error('Christian year 0 is not existed');
  }

  if (christianYear < 1) {
    return christianYear + BUDDHIST_TO_CHRISTIAN_ADJUSTMENT;
  }

  return christianYear - 1 + BUDDHIST_TO_CHRISTIAN_ADJUSTMENT;
}

module.exports = {
  toChristianYear,
  toBuddhistYear
}
