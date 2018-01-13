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
    const delimiters = getDelimiters(string);
    const input = string.split('\n')[1];
    const output = [];
    getNumbers(input, delimiters, output, 0);
    return output;
}

function getDelimiters(string) {
    const re = /\[.*?\]/g;
    const unParsedDelims = string.match(re);
    let delimiters;
    if (Array.isArray(unParsedDelims)) {
        delimiters = extractDelimiters(unParsedDelims);
    } else {
        delimiters = [string[2]];
    }
    return delimiters;
}

function getNumbers(input, delimiters, output, i) {
    const split = input.split(delimiters[i]);
    split.forEach((element) => {
        if (isSplitable(element, delimiters)) {
            getNumbers(element, delimiters, output, i + 1);
        } else {
            output.push(element);
        }
    });
}

function isSplitable(string, delimiters) {
    let splitable = false;
    delimiters.forEach((delimiter) => {
        if (string.indexOf(delimiter) > -1) {
            splitable = true;
        }
    });
    return splitable;
}

function extractDelimiters(array) {
    const delimiters = [];
    array.forEach((element) => {
        delimiters.push(element.slice(1, element.length -1));
    });
    return delimiters;
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
    const negatives = [];
    array.forEach((number) => {
        const int = parseInt(number);
        if (int < 0) {
            negatives.push(int);
        }
        ints.push(int);
    });
    if (negatives.length > 0) {
        throw new Error(`Negative numbers not allowed, ${negatives} found`);
    }
    return ints;
}

function getSumOfInts(array) {
    let sum = 0;
    array.forEach((int) => {
        if (int < 1001) {
            sum += int;
        }
    });
    return sum;
}

module.exports = {
    add,
};
