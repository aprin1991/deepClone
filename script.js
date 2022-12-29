// custom deep clone

function deepClone(data) {
    if (typeof data !== "object" || data === null) return data;
    const newData = Array.isArray(data) ? [] : {};

    //recursive copying
    for (let key in data) {
        newData[key] = deepClone(data[key]);
    }

    return newData;
}

const arr = [1, 2, 3, { a: 1, b: { a: 2 } }];
const cloneOfArray = deepClone(arr);
console.log(cloneOfArray);