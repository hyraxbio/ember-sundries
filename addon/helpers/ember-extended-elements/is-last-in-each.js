import { helper } from '@ember/component/helper';

export function emberExtendedElementsIsLastInEach(params/*, hash*/) {
  if (params[0] === params[1] + 1) {
    return true;
  } return false;
}

export default helper(emberExtendedElementsIsLastInEach);
