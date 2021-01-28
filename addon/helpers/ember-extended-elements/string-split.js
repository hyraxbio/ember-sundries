import { helper } from '@ember/component/helper';

export default helper(function emberExtendedElementsStringSplit(params/*, hash*/) {
  return (params[0] || "").split(params[1] || "");
});
