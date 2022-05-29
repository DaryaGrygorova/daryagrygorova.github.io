export const updateObjectInArray =
  (array, itemId, objectPropName, newObjectProps) => {
 return array.map(item => {
    if (item[objectPropName] === itemId) {
      return { ...item, ...newObjectProps };
    }
  return item},
)}