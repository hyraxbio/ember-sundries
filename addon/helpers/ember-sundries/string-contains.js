import { helper } from '@ember/component/helper';

export function stringContains(params /*, hash*/) {
  var testString = params[0].toLowerCase();
  var searchString = params[1].toLowerCase();
  return testString.indexOf(searchString) > -1;
}

export default helper(stringContains);
