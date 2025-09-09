const findTheOldest = function (peopleArray) {
    let age = 0;
    let oldestObject = {};
    for (const obj of peopleArray) {
        let oldness = 0;
        if ('yearOfDeath' in obj) {
            oldness = obj.yearOfDeath - obj.yearOfBirth;
        } else {
            const currentDate = new Date();
            oldness = currentDate.getFullYear() - obj.yearOfBirth;
            console.log("Seeing age: ", obj.name, oldness);
        }
        if (oldness > age) {
            age = oldness;
            oldestObject = obj;
        }
    }
    return oldestObject;
}

// Do not edit below this line
module.exports = findTheOldest;
