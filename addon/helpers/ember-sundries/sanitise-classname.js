import { helper } from '@ember/component/helper';
import sanitiseClassNameUtil from 'ember-sundries/utils/sanitise-classname';

export function sanitiseClassname(params/*, hash*/) {
  return sanitiseClassNameUtil(params[0]);
}

export default helper(sanitiseClassname);
