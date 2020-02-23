const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(/* sampleActivity */) {
  if (typeof(n) != "string" || n.trim() == "") {
    return false;
  }
  if (isNaN(n)) {
      return false;
  }
  n = Number(n);
  let rez = 0, HALF_LIFE_PERIOD = 5730, MODERN_ACTIVITY = 0.693, k;
  k = MODERN_ACTIVITY / HALF_LIFE_PERIOD;
  return Math.round(Math.log(15/n)/k);
};
