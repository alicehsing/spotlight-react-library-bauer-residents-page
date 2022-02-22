import { generateColumns } from './data-utils';

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