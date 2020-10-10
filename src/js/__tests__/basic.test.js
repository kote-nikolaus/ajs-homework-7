import validateUsername from '../basic';

test('should not validate username', () => {
  expect(validateUsername('Katya12')).toBeFalsy();
});

test('should not validate username 2', () => {
  expect(validateUsername('12Katya')).toBeFalsy();
});

test('should not validate username 3', () => {
  expect(validateUsername('_Katya')).toBeFalsy();
});

test('should not validate username 4', () => {
  expect(validateUsername('Katya_')).toBeFalsy();
});

test('should not validate username 5', () => {
  expect(validateUsername('-Katya')).toBeFalsy();
});

test('should not validate username 6', () => {
  expect(validateUsername('Katya-')).toBeFalsy();
});

test('should not validate username 7', () => {
  expect(validateUsername('Katya1993N')).toBeFalsy();
});

test('should not validate username 8', () => {
  expect(validateUsername('Катя')).toBeFalsy();
});

test('should not validate username 9', () => {
  expect(validateUsername('Katya!N')).toBeFalsy();
});

test('should validate username', () => {
  expect(validateUsername('Katya12N')).toBeTruthy();
});

test('should validate username 2', () => {
  expect(validateUsername('Katya_N')).toBeTruthy();
});

test('should validate username 3', () => {
  expect(validateUsername('Katya-N')).toBeTruthy();
});

test('should validate username 4', () => {
  expect(validateUsername('Katya12N')).toBeTruthy();
});

test('should validate username 5', () => {
  expect(validateUsername('K')).toBeTruthy();
});
