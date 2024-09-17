import { helper } from '@ember/component/helper';

export default helper(function emberSundriesCharAt(positional) {
  const [string, index] = positional;
  return string[index];
});
