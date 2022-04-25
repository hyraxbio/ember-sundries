import { helper } from '@ember/component/helper';

export function htmlSafe(params) {
  if (!params[0]) { return; }
  return params[0].htmlSafe();
}

export default helper(htmlSafe);
