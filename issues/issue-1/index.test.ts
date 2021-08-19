import { isPalindrome } from './index';

test('repaper equal true', () => {
    expect(isPalindrome('repaper')).toBe(true);
});

test('malayalam equal true', () => {
    expect(isPalindrome('malayalam')).toBe(true);
});

test('I equal true', () => {
    expect(isPalindrome('I')).toBe(true);
});

test('bob equal true', () => {
    expect(isPalindrome(' bob ')).toBe(true);
});

test('never odd or even equal false', () => {
    expect(isPalindrome('never odd or even')).toBe(false);
});

test('procrastination equal false', () => {
    expect(isPalindrome('procrastination')).toBe(false);
});

test('string with spaces string equal false', () => {
    expect(isPalindrome('   ')).toBe(false);
});

test('empty string equal false', () => {
    expect(isPalindrome('')).toBe(false);
});

test('without any agruments equal false', () => {
    expect(isPalindrome()).toBe(false);
});
