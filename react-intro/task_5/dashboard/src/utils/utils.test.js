import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('utils', () => {
  // Test case for getFullYear
  test('getFullYear returns the correct year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toBe(currentYear);
  });

  // Test case for getFooterCopy with isIndex true
  test('getFooterCopy returns the correct string when isIndex is true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  // Test case for getFooterCopy with isIndex false
  test('getFooterCopy returns the correct string when isIndex is false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });

  // Test case for getLatestNotification
  test('getLatestNotification returns the correct string', () => {
    expect(getLatestNotification()).toBe(
      '<strong>Urgent requirement</strong> - complete by EOD'
    );
  });
});