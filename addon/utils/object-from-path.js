export default function objectFromPath(path, value) {
  var levels = path.split('.');
  var object = {};
  var acc = object;
  levels.forEach((level, index) => {
    var lastIteration = levels.length - 1 === index;
    if (!acc[level]) {
      if (lastIteration) {
        acc[level] = value;
      } else {
        acc[level] = {};
      }
    }
    acc = acc[level];
  });
  return object;
}
