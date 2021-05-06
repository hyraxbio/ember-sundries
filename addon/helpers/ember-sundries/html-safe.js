import { helper } from '@ember/component/helper';

export function htmlSafe(params) {
  return params[0].htmlSafe();
}

export default helper(htmlSafe);
