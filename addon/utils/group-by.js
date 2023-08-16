import { isPresent } from '@ember/utils';

export default function groupBy(collection, property) {
  let groups = [];
  collection.forEach(function (item) {
    let value = item[property];
    let group = groups.findBy('value', value);

    if (isPresent(group)) {
      group.items.push(item);
    } else {
      group = { property: property, value: value, items: [item] };
      groups.push(group);
    }
  });
  return groups;
}
