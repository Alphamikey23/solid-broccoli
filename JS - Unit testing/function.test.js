const {add , subtract, isPalindrome } = require('./app.js');

test('adds 1 + 2 to equal 3', () => {
    expect(add(1,2)).toBe(3);
});

test('subtracts 5-2 equal 3',() => {
    expect(subtract(5,2)).toBe(3);

})


test('It should return true',() => {
    expect(isPalindrome('madam')).toBe(true);
})

test('It should return false', () => {
    expect(isPalindrome('river')).toBe(false);
})

test('It should return false for empty string',() => {
    expect(isPalindrome('')).toBe(false);
})