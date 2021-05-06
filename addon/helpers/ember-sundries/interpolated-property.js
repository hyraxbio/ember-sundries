import { helper } from '@ember/component/helper';

export function interpolatedProperty(params) {
  var baseObject = params[0];
  var property = params[1];
  return baseObject[property];
}

export default helper(interpolatedProperty);
