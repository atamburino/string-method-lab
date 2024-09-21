// Is Valid helper Fuction
function isValidString(inputString) {
    if (typeof inputString !== 'string') {
        return `Value given to function was of Data Type: ${typeof inputString}`;
    }
    if (inputString.length === 0) {
        return 'String is empty';
    }
    return true;
}

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

function doesInclude (string1, string2) {
    // Check if string is not a string
    if (string1.length === 0) {
        return 'String is empty';
    }
    
    if (typeof string2 !== 'string') {
        return `Value given to function was of Data Type: ${typeof string2}`;
    }

    return string1.includes(string2);
}

function getIndexOf (testInputString, searchString) {
    const validationResult = isValidString(testInputString);
    if (validationResult !== true) {
        return validationResult;
    }
    return testInputString.indexOf(searchString);
}

function sliceString (testInputString, sliceOnIndex1, sliceOnIndex2) {
    const validationResult = isValidString(testInputString);
    if (validationResult !== true) {
        return validationResult;
    }
    return testInputString.slice(sliceOnIndex1, sliceOnIndex2);
}

function splitString (testInputString , splitPoint) {
    const validationResult = isValidString(testInputString);
    if (validationResult !== true) {
        return validationResult;
    }
    return testInputString.split(splitPoint);
}

function convertToLowerCase (testInputString) {
    const validationResult = isValidString(testInputString);
    if (validationResult !== true) {
        return validationResult;
    }
    return testInputString.toLowerCase();
}

function convertToUpperCase (testInputString) {
    const validationResult = isValidString(testInputString);
    if (validationResult !== true) {
        return validationResult;
    }
    return testInputString.toUpperCase();
}

function trimString (testInputString) {
    const validationResult = isValidString(testInputString);
    if (validationResult !== true) {
        return validationResult;
    }
    return testInputString.trim();
}

function replaceSubstring(testInputString, targetWord, replaceString) {
    const validationResult1 = isValidString(testInputString);
    const validationResult2 = isValidString(targetWord);
    const validationResult3 = isValidString(replaceString);
    
    if (validationResult1 !== true) {
      return validationResult1;
    }
    if (validationResult2 !== true) {
      return validationResult2;
    }
    if (validationResult3 !== true) {
      return validationResult3;
    }
    
    return testInputString.replace(targetWord, replaceString);
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


