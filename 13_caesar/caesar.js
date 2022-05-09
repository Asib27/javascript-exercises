const caesar = function(text, shift) {
    return text.split("").
    map(code => {
        let isUpper = code.match(/[A-Z]/);
        code = code.toLowerCase();

        if(!code.match(/[a-z]/)) return code;

        code = ((code.charCodeAt(0) - 'a'.charCodeAt(0) + 26 + shift) % 26) + 'a'.charCodeAt(0);

        if(isUpper)
            return String.fromCharCode(code).toUpperCase();
        else
            return String.fromCharCode(code);
    }).join("");
};

// Do not edit below this line
module.exports = caesar;
