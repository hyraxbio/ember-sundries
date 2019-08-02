import { helper } from '@ember/component/helper';

export function arrayJoin(params) {
var array = params[0];
var joinWithString = params[1] || ', ';
  return array.join(joinWithString);
}

export default helper(arrayJoin);
