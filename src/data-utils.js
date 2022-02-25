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


/* 
Output: 
{
    Honda: 4,
    Volvo: 3,
    Toyota: 2,
    etc . . .
}
*/

export function getTotalUserOfEachCarMake(customers) {
    
  const countingHashMap = customers.reduce((accumulator, customer) => {
    if (accumulator[customer.car_make]) {
      accumulator[customer.car_make]++;
    } else {
      accumulator[customer.car_make] = 1;
    }
    
    return accumulator;
  }, {});
  //[{ x: car_make, y: 2 }]
  const keysArr = Object.entries(countingHashMap);
  const finalArr = keysArr.map(key => ({
    x: key[0],
    y: key[1]
  }));

  return finalArr;
}

export function getGenderBreakdownOfToyotaOwners(customers) {
  const filteredToyotaArr = customers
    .filter(customer => customer.car_make === 'Toyota')
    .reduce((accumulator, customer) => {
      if (accumulator[customer.gender]) {
        accumulator[customer.gender]++;
      } else {
        accumulator[customer.gender] = 1;
      }
    
      return accumulator;
    }, {});

  //[{ x: gender, y: 5}]
  const keysArr = Object.entries(filteredToyotaArr);
  const finalArr = keysArr.map(key => ({
    x: key[0],
    y: key[1],
  }));

  return finalArr;
}


export function getTotalOfEachGender(customers) {
  const countingHashMap = customers.reduce((accumulator, customer) => {
    if (accumulator[customer.gender]) {
      accumulator[customer.gender]++;
    } else {
      accumulator[customer.gender] = 1;
    }
    return accumulator;
  }, {});
 
  //[{ x: gender, y: 5}]
  const keysArr = Object.entries(countingHashMap);
  const finalArr = keysArr.map(key => ({
    x: key[0],
    y: key[1]
  }));

  return finalArr;
}