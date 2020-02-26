module.exports = function createDreamTeam(arr) {
  if (arr == null || arr == undefined) {
    return false;
  }
  let dreamTeam = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "string") {
      let bigStr = arr[i].trim().toUpperCase();
      dreamTeam.push(bigStr[0]);
    }
  }
  return dreamTeam.length > 0 ? dreamTeam.sort().join('') : false;
};