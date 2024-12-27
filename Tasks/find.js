// Refactor following solution
// Find key by value

//Fourth step: prefer for..of to for..in

const find = (object, value) => {
  const keys = Object.keys(object);
  for (const key of keys) {
    if (object[key] === value) return key;
  }
  return undefined;
};

module.exports = find;
