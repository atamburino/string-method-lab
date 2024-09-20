

// charAt
// Return the index
// return string info on number
// return string is empy on empty string
function getCharAt (string, index) {
    if (string.length === 0) {
        return 'String is empty';
    }
    else if (typeof string !== 'string'){
        return 'Value given to function was of Data Type: number';
    }
    else {
        return string.charAt(index);
    }
}

function concatenateStrings (string1, string2) {
    // Check if string1 is not a string
    if (typeof string1 !== 'string') {
        return `Value given to function was of Data Type: ${typeof string1}`;
    }
    // Check if string2 is not a string
    if (typeof string2 !== 'string') {
        return `Value given to function was of Data Type: ${typeof string2}`;
    }
    return string1.concat(string2)
}

function doesInclude () {
    return "hello";
}

function getIndexOf () {
    return "hello";
}

function sliceString () {
    return "hello";
}

function splitString () {
    return "hello";
}

function convertToLowerCase () {
    return "hello";
}

function convertToUpperCase () {
    return "hello";
}

function trimString () {
    return "hello";
}

function replaceSubstring () {
    return "hello";
}

module.exports = {
    getCharAt,
    concatenateStrings,
    doesInclude,
    getIndexOf,
    sliceString,
    splitString,
    convertToLowerCase,
    convertToUpperCase,
    trimString,
    replaceSubstring
};


