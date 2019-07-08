import { helper } from '@ember/component/helper';

export function toJson(params, options) {
  var object = params[0];
  return object.toJSON(options);
}

export default helper(toJson);
