import { helper } from '@ember/component/helper';

export default helper(function emberSundriesArrayIntersect(positional) {
  const intersection = positional[0].filter((item) =>
    positional[1].includes(item),
  );
  return intersection.length > 0 ? intersection : null;
});
