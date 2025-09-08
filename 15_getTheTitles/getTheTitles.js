const getTheTitles = function (array) {
    arrayNew = []
    for (const obj of array) {
        arrayNew.push(obj['title']);
    }
    return arrayNew;


};

// Do not edit below this line
module.exports = getTheTitles;
