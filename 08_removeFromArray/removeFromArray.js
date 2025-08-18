const removeFromArray = function (array, ...args) {
    console.log(array);
    console.log(args);
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        if (!(args.includes(array[i]))) {
            newArray.push(array[i]);
        }
    }
    console.log(newArray);
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
