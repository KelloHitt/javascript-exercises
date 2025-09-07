const palindromes = function (string) {
    let noPunct = "";
    for (let i = 0; i < string.length; i++) {
        if ((string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 122) || (!isNaN(Number(string[i]))) && string[i] != " ") {
            noPunct += string[i].toLowerCase();
            console.log("String: ", string[i]);
        }

    }
    let reversedArray = noPunct.split('');
    reversedArray.reverse();
    let reversedString = reversedArray.join('');
    return noPunct == reversedString;

};

// Do not edit below this line
module.exports = palindromes;
