'use strict';

function add(numbers) {
    if (numbers === '') {
        return 0;
    }
    if (numbers.length < 2) {
        return parseInt(numbers);
    }
    const sum = parseInt(numbers[0]) + parseInt(numbers[2]);
    return sum;
}

module.exports = {
    add,
};
