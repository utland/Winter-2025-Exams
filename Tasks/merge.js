// Refactor following solution
// Merge two dictionaries

//Fourth step: rename variables and parametrs, use camelCase stye

const merge = (object1, object2) => {
  const object3 = [{}][0];
  for (const name in object1) {
    object3[name] = object1[name];
  }
  for (const name in object2) {
    object3[name] = object2[name];
  }
  return object1, object2, object3;
};

module.exports = merge;
