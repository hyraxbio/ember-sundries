import { helper } from '@ember/component/helper';

export function emberExtendedElementsSimpleAddition(params/*, hash*/) {

  return params.reduce((acc, item) => {
    return acc + item;
  }, 0);
}

export default helper(emberExtendedElementsSimpleAddition);
