

const data = require('../Data.json');

//names extractor for the names of skills available
const namesExtractor = function () {
    let temp = [];

    for (let key of Object.values(data.data.techRoot.skills)) {
        temp.push(Object.keys(key)[0]);
    };


    return temp;
}
//extracts how much of each skill there is.
const valuesExtractor = function () {
    let temp = [];

    for (let key of Object.values(data.data.techRoot.location)) {
        temp.push(Object.values(key)[0]);
    };

    return temp;
}
//extract the locations jobs are available
const locationExtractor = function () {
    let temp = [];

    for (let key of Object.values(data.data.techRoot.location)) {
        temp.push(Object.keys(key)[0]);
    };


    return temp;
}
export { valuesExtractor, namesExtractor, locationExtractor };