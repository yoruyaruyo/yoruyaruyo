import uniqueRandomArray from 'unique-random-array';
import yorubaNames from './yoruba-names.json';

var getRandomName = uniqueRandomArray(yorubaNames);

module.exports = {
    all: yorubaNames,
    random: random,
    Royalname: Royalname

};

function random(number) {
    if (number === undefined) {
        return getRandomName();
    } else {
        var randomNames = [];
        for (var i = 0; i < number; i++) {
            randomNames.push(getRandomName());
        }
        return randomNames;
    }
}

function Royalname(number) {
    var arr = [];
    if (number == undefined) {
        for (i = 0; i < yorubaNames.length; i++) {
            if (yorubaNames[i].match(/Adé/i)) {

                arr.push(yorubaNames[i]);

            }
        }
        return arr[Math.floor(Math.random() * arr.length)];

    } else {
        var randomNames = [];
        for (var i = 0; i < yorubaNames.length; i++) {
            if (yorubaNames[i].match(/Adé/i)) {
                randomNames.push(yorubaNames[i]);
            }

        }
        var select = randomNames.sort(() => .4 - Math.random())
        return select.slice(0, number)
    }
}