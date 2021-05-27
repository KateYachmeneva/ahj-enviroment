import demo from '../app';

test('Demo function return correct value', () => {
  const expected = 'test';
  expect(demo('test')).toBe(expected);
});
