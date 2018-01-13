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
    const split = getSplit(string);
    const ints = getInts(split);
    const sum = getSumOfInts(ints);
    return sum;
}

function getSplit(string) {
    let split;
    if (string.includes('//')) {
        split = getCustomSplit(string);
    } else {
        split = getStandardSplit(string);
    }
    return split;
}

function getCustomSplit(string) {
    const splitOnNewline = string.split('\n');
    const delimiter = string[2];
    const split = splitOnNewline[1].split(delimiter);
    return split;
}

function getStandardSplit(string) {
    const split = [];
    const splitOnComma = string.split(',');
    splitOnComma.forEach((element) => {
        if (element.includes('\n')) {
            const splitOnNewline = element.split('\n');
            splitOnNewline.forEach((element) => {
                split.push(element);
            });
        } else {
            split.push(element);
        }
    });
    return split;
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
