import { helper } from '@ember/component/helper';

export function decimalToPercentage(params) {
  return params[0] * 100;
}

export default helper(decimalToPercentage);
