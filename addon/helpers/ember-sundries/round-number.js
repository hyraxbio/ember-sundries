import { helper } from '@ember/component/helper';

export default helper(function EmberSundriesRoundNumber(params) {
  const number =
    typeof params[0] === 'string' ? parseFloat(params[0]) : params[0];
  return Math.round(number);
});
