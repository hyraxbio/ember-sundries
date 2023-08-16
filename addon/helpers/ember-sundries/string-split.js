import { helper } from '@ember/component/helper';

export default helper(function EmberSundriesStringSplit(params /*, hash*/) {
  return (params[0] || '').split(params[1] || '');
});
