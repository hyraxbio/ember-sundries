export default function objectsInPathCheck(obj, path) {
  obj = obj || {};
  const keys = path.split('.');
  function addlevel(obj, key) {
    obj[key] = obj[key] || {};
    return obj[key];
  }
  keys.reduce(addlevel, obj);
  return obj;
}
