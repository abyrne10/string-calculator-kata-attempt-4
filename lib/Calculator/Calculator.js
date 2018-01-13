'use strict';

function add(numbers) {
    if (numbers === '') {
        return 0;
    }
    if (numbers.length < 2) {
        return parseInt(numbers);
    }
    const sum = sumDigitsInString(numbers);
    return sum;
}

function sumDigitsInString(string) {
    const numbers = string.split(',');
    const ints = getInts(numbers);
    const sum = getSumOfInts(ints);
    return sum;
}

function getInts(array) {
    const ints = [];
    array.forEach((number) => {
        ints.push(parseInt(number));
    });
    return ints;
}

function getSumOfInts(array) {
    let sum = 0;
    array.forEach((int) => {
        sum += int;
    });
    return sum;
}

module.exports = {
    add,
};
