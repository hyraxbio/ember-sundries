import { helper } from '@ember/component/helper';

export function arrayJoin(item, joinWithString = ', ') {
  if (!typeof array === 'array') {
    console.warn(`You must pass an array to the array join helper. You passed ${item}`);
  }
  return item.join(joinWithString);
}

export default helper(arrayJoin);
