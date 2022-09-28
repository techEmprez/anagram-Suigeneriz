module.exports = function (strA, strB) {
  // write your code here
  
  let sorted2 = strB
    .split("")
    .sort()
    .join("")
    .toLowerCase("")
    .replaceAll(/[^\w]|_/g, "");
  for (i = 0; i < sorted1.length; i++) {
    if (sorted1.length === sorted2.length) {
      if (sorted1[i] === sorted2[i]) {
        return true;
      }
    }
    if (sorted1.length !== sorted2.length) {
      return false;
    }
  }
};
