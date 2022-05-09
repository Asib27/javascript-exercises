const sumAll = function(start, finish) {
    if(typeof(start) !== 'number' || typeof(finish) !== 'number')
        return 'ERROR';
    
    if(start < 0 || finish < 0) return 'ERROR';
    if(start > finish){
        [start, finish] = [finish, start];
    }

    let sum = 0;
    for(let i = start; i <= finish; i++)
        sum += i;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
