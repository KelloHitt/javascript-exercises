const palindromes = function (string) {
    let newString = string.toLowerCase();
    let noPunct = "";
    earliestNum = String(0);
    lastNum = String(9);
    for (let i = 0; i < string.length; i++) {
        if ((string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 122) || (string.charCodeAt(i) >= earliestNum.charCodeAt(0) && (string.charCodeAt(i) >= lastNum.charCodeAt(0))));
        noPunct += string[i];
        console.log("String: ", string[i]);
    }
    console.log("No punctuation: ", noPunct);
    let reversedArray = noPunct.split('');
    reversedArray.reverse();
    let reversedString = reversedArray.join('');
    console.log('reversed string: ', reversedString);
    return noPunct == reversedString;

};

// Do not edit below this line
module.exports = palindromes;
