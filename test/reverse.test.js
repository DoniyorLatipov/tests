import reverese from '../src/reverse';

test('reverse', () => {
  expect(reverese('hello')).toEqual('olleh');
  expect(reverese('')).toEqual('');
});
