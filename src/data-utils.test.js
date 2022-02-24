import { generateColumns, getTotalUserOfEachCarMake } from './data-utils';
import customers from './data.js';

test('generateColumns function should make a nice array of columns that capitalizes the key and replaces underscore with space and turn them to name property', () => {
  const expected = [
    { key: 'first_name', name: 'First Name' },
    { key: 'age', name: 'Age' },
    { key: 'car_make', name: 'Car Make' },
  ];

  const actual = generateColumns([
    { first_name: 'Sally', age: 22, car_make: 'Audi' },
    { first_name: 'Leslie', age: 3, pet: 'Toyota' }
  ]);

  expect(actual).toEqual(expected);
});


test('getTotalUserOfEachCarMake function', () => {
  const expected = [
    { x: 'Audi', y: 2 },
    { x: 'Mazda', y: 2 },
    { x: 'Mercury', y: 2 },
    { x: 'Toyota', y: 8 },
    { x: 'BMW', y: 3 },
    { x: 'Porsche', y: 3 },
    { x: 'Volkswagen', y: 4 },
    { x: 'Cadillac', y: 3 },
    { x: 'Chevrolet', y: 11 },
    { x: 'Nissan', y: 3 },
    { x: 'Dodge', y: 4 },
    { x: 'Mercedes-Benz', y: 3 },
    { x: 'Honda', y: 2 },
    { x: 'GMC', y: 7 },
    { x: 'Subaru', y: 6 },
    { x: 'Buick', y: 1 },
    { x: 'Volvo', y: 3 },
    { x: 'Pontiac', y: 4 },
    { x: 'Ford', y: 5 },
    { x: 'Jeep', y: 2 },
    { x: 'Mitsubishi', y: 4 },
    { x: 'Saab', y: 3 },
    { x: 'Hummer', y: 2 },
    { x: 'Infiniti', y: 1 },
    { x: 'Chrysler', y: 2 },
    { x: 'MINI', y: 1 },
    { x: 'Oldsmobile', y: 2 },
    { x: 'Scion', y: 1 },
    { x: 'Lincoln', y: 1 },
    { x: 'Maserati', y: 1 },
    { x: 'Suzuki', y: 2 },
    { x: 'Bentley', y: 1 },
    { x: 'Plymouth', y: 1 }
  ];

  const actual = getTotalUserOfEachCarMake(customers);
  expect(actual).toEqual(expected);
});