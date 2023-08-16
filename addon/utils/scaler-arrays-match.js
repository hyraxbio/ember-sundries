export default function scalerArraysMatch(array1, array2, options = {}) {
  if (options.matchOrder) {
    return (
      array1.length === array2.length &&
      array1.every(function (value, index) {
        return value === array2[index];
      })
    );
  }
  return (
    array1.length === array2.length &&
    array1.sort().every(function (value, index) {
      return value === array2.sort()[index];
    })
  );
}
