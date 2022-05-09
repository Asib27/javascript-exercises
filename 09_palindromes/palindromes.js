const palindromes = function (str) {
    let i = 0, j = str.length;
    str = str.toLowerCase();

    while(i <= j){
        while(i < str.length && !str.charAt(i).match(/[a-z]/i)) i++;
        while(j >= 0 && !str.charAt(j).match(/[a-z]/i)) j--;

        if(i <= j && str.charAt(i) !== str.charAt(j))
            return false;
        i++;
        j--;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
