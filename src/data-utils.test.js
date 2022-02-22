import { generateColumns } from './data-utils';

test('generateColumns function should make a nice array of columns that capitalizes the key and replaces underscore with space and turn them to name property', () => {
  const expected = [
    { key: 'first_name', name: 'First Name' },
    { key: 'age', name: 'Age' },
    { key: 'pet', name: 'Pet' },
  ];

  const actual = generateColumns([
    { first_name: 'Sally', age: 22, pet: 'American Bulldog' },
    { first_name: 'Leslie', age: 3, pet: 'Caribou' }
  ]);

  expect(actual).toEqual(expected);
});