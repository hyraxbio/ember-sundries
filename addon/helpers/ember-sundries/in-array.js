import { helper } from '@ember/component/helper';

export default helper(function emberSundriesInArray(positional /*, named*/) {
  if (!positional[0] || !positional[1]) {
    return false;
  }
  return positional[0].includes(positional[1]);
});
