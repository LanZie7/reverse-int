module.exports = function reverse (n) {
    const string = Math.abs(n).toString();
    const reversedString = parseInt(string.split('').reverse().join(''));
    return reversedString;
}
