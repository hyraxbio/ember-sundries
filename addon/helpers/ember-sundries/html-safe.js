import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';
export function htmlSafeHelper(params) {
  if (!params[0]) {
    return;
  }
  return htmlSafe(params[0]);
}

export default helper(htmlSafeHelper);
