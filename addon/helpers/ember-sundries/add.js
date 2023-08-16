import { helper } from '@ember/component/helper';

export function add(params) {
  var total = 0;
  params.forEach((param) => {
    total += parseInt(param);
  });
  return total;
}

export default helper(add);
