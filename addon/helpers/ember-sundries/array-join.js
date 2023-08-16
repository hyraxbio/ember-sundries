import { helper } from '@ember/component/helper';

export function arrayJoin(params) {
  var joinWith = params[1] || ', ';
  if (!params[0]) {
    return;
  }
  if (!Array.isArray(params[0])) {
    console.warn(
      `[ember-sundries/array-join] You must pass an array as the first argument, You passed ${params[0]}] `
    );
    return params[0];
  }
  return params[0].join(joinWith);
}
export default helper(arrayJoin);
