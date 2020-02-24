const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(n) {
  if (typeof(n) != "string" || n.trim() == "") {
    return false;
  }
  if (n.match(/[\d]+[.][\d]+[.]/)) {
    n = n.slice(0,n.lastIndexOf("."))+n.slice(n.lastIndexOf(".")+1,n.length-1);
  }
  if (isNaN(n)) {
    return false;
  }
  if (n>15 || n <= 0) {
    return false;
  }
  n = Number(n);
  let rez = 0, k;
  k = 0.693 / HALF_LIFE_PERIOD;
  return Math.ceil(Math.log(MODERN_ACTIVITY/n)/k);
};
