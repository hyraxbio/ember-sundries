import { helper } from '@ember/component/helper';
import safeNameNameUtil from 'ember-sundries/utils/safe-name';

export function safeName(params /*, hash*/) {
  return safeNameNameUtil(params[0]);
}

export default helper(safeName);
