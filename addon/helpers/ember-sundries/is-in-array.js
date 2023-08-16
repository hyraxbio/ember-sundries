import { helper } from '@ember/component/helper';

export function isInArray(params /*, hash*/) {
  if (!params[0] || !params[1]) {
    return;
  }
  var allowedsearchIteemTypes = ['boolean', 'number', 'bigint', 'string'];
  if (allowedsearchIteemTypes.indexOf(typeof params[0]) < 0) {
    console.warn(
      `Ember extended fields: The first arguemnt passed to the is-in-array mmust be a boolean, number, bigint or string. You passed ${params[0]}.`
    );
    return;
  }

  if (!Array.isArray(params[1])) {
    console.warn(
      `Ember extended fields: an array must be passed to the is-in-array helper as the second argument. You passed ${params[1]}.`
    );
    return;
  }
  return params[1].indexOf(params[0]) > -1;
}

export default helper(isInArray);
