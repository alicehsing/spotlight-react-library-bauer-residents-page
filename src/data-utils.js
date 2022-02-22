export function generateColumns(arr) {
    //first letter of the value of each key. ex: 'p' of pet
  const keys = Object.keys(arr[0]);
  const columns = keys.map(key => {
    return {
      key: key,
      name: key.split('_')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ')
    };
  });
  return columns;
}