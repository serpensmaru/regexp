import Validator from '../Validator';

test('test OK', () => {
  const V = new Validator();
  const x = V.validateUsername('sdfsdfssfg');
  expect(x).toBe(true);
});

test('test allowed Symbol', () => {
  const V = new Validator();
  const x = V.validateUsername('sdfsdfssfg%%');
  expect(x).toBe(false);
});

test('test 3 number', () => {
  const V = new Validator();
  const x = V.validateUsername('sdfsdf333ssfg');
  expect(x).toBe(false);
});

test('test number ^ and $', () => {
  const V = new Validator();
  const x = V.validateUsername('12sdfsdf123ssfg');
  const y = V.validateUsername('sdfsdf123ssfg_');
  expect(x).toBe(false);
  expect(y).toBe(false);
});
