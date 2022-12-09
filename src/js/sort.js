export default function sort(obj, args) {
  const result = [];
  for (let i = 0; i < args.length; i += 1) {
    for (const prop in obj) {
      if (prop === args[i]) {
        result.push({ key: prop, value: obj[prop] });
        delete obj[prop];
      }
    }
  }
  const propSort = Object.keys(obj).sort();
  for (let i = 0; i < propSort.length; i += 1) {
    result.push({ key: propSort[i], value: obj[propSort[i]] });
  }
  return result;
}
