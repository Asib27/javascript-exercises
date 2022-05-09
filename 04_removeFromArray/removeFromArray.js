const removeFromArray = function(array, ...num) {
    return array.filter(el => num.indexOf(el) == -1);
};

// Do not edit below this line
module.exports = removeFromArray;
