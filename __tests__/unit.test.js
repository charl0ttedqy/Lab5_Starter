// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

//isPhoneNumber jtests
test('valid phone number (dash)', () => {
  expect(isPhoneNumber('012-345-6789')).toBe(true);
});
test('valid phone number (parentheses first three)', () => {
  expect(isPhoneNumber('(012)-345-6789')).toBe(true);
});
test('invalid phone number (no dash)', () => {
  expect(isPhoneNumber('0123456789')).toBe(false);
});
test('invalid phone number (short)', () => {
  expect(isPhoneNumber('0123')).toBe(false);
});


//isEmail jtests
test('valid email (gmail.com)', () => {
  expect(isEmail('abc@gmail.com')).toBe(true);
});
test('valid email (ucsd.edu)', () => {
  expect(isEmail('abc@ucsd.edu')).toBe(true);
});
test('invalid email (ucsd.edu.com)', () => {
  expect(isEmail('abc@ucsd.edu.com')).toBe(false);
});
test('invalid email (no domain)', () => {
  expect(isEmail('abc@')).toBe(false);
});


//isStrongPassword jtests
describe('isStrongPassword', () => {
  test('valid strong password (abcde123)', () => {
    expect(isStrongPassword('abcde123')).toBe(true);
  });
  test('valid strong password (Abcde123_456)', () => {
    expect(isStrongPassword('Abcde123_456')).toBe(true);
  });
  test('invalid password (too short)', () => {
    expect(isStrongPassword('abc')).toBe(false);
  });
  test('invalid password (too long)', () => {
    expect(isStrongPassword('abcdefghijklmnopqrst')).toBe(false);
  });
});


//jtest isDate
test('valid date (single digit day and month)', () => {
  expect(isDate('5/5/2024')).toBe(true);
});
test('valid date (double digits day and month)', () => {
  expect(isDate('05/05/2024')).toBe(true);
});
test('invalid date (no slash)', () => {
  expect(isDate('05052024')).toBe(false);
});
test('invalid (dash)', () => {
  expect(isDate('5-5-2024')).toBe(false);
});


//isHexColor jtests
test('valid hex (3 nums)', () => {
  expect(isHexColor('#123')).toBe(true);
});
test('valid hex (6 nums/char)', () => {
  expect(isHexColor('#a1b2c3')).toBe(true);
});
test('invalid hex (too short)', () => {
  expect(isHexColor('#ab')).toBe(false);
});
test('invalid hex (too long)', () => {
  expect(isHexColor('#abcdef123456')).toBe(false);
});
