import { helper } from '@ember/component/helper';

export default helper(function emberExtendedElementsForceDecimals(params/*, hash*/) {
  var decimals = params[1] || 2;
  return (Math.round(parseFloat(params[0]) * 100) / 100).toFixed(decimals);
});
