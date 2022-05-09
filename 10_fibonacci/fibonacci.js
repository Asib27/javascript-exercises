const fibonacci = function(num) {
    num = +num;

    if(num < 0) return "OOPS";
    
    let cur = 1, prev = 0;
    for(let i = 1; i < num; i++){
        [cur, prev] = [cur+prev, cur]
    }
    return cur;
};

// Do not edit below this line
module.exports = fibonacci;
