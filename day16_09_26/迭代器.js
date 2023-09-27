const aaa = {
    nameList: ['aaa', 'bbb', 'ccc', 'ddd'],
    startIndex: 0,
    [Symbol.iterator]: function () {
        let index = this.startIndex;
        let nameList = this.nameList;
        return {
            next() {
                // console.log('----------', this);
                let result = {};
                if (index < nameList.length) {

                    result.value = nameList[index];
                    result.done = false;
                    index++;
                    return result;
                }
                else {
                    result.done = true;
                    result.value = index;
                    return result;
                }
            }
        }
    }
}

for (i of aaa) {
    console.log(i);
}

let aaaAry = Array.from(aaa);
aaaAry.push('eee');
console.log(aaaAry); // ['aaa', 'bbb', 'ccc', 'ddd', 'eee']
for (i of aaaAry) {
    console.log(i);
}

// let aaaIterator = aaa[Symbol.iterator]();
// console.log(aaaIterator); // [Function: next]
// console.log(aaaIterator()); // { value: 'aaa', done: false }
// console.log(aaaIterator()); // { value: 'bbb', done: false }
// console.log(aaaIterator()); // { value: 'ccc', done: false }
// console.log(aaaIterator()); // { value: 'ddd', done: false }
// console.log(aaaIterator()); // { value: 4, done: true }
// console.log(aaaIterator());

class Counter {
    constructor(limit) {
        this.count = 1;
        this.limit = limit;
    }
    [Symbol.iterator]() {
        let count = this.count;
        let limit = this.limit;
        return {
            next() {
                let result = {};
                if (count <= limit) {
                    result.value = count++;
                    result.done = false;
                }
                else {
                    result.done = true;
                    result.value = undefined;
                }
                return result;
            },
            // return() {
            //     console.log('Exiting early');
            //     return {
            //         done: true,
            //     }
            // }
        }
    }
}

let counter = new Counter(5);
let iter = counter[Symbol.iterator]();
iter.return = function () {
    console.log('Exiting early');
    return {
        value: 'ajja',
        done: true,
    }
}

for (let i of counter) {
    if (i > 2) {
        break;
    }
    console.log(i);

}

for (let i of counter) {
    console.log(i);
}

console.log('---------------------------------');
function haha(n) {
    if (n > 0) {
        haha(n - 1);
        console.log(n);
    }
}

haha(5);

console.log('---------------------------------');
function* nTimes(n) {
    if (n > 0) {
        yield* nTimes(n - 1);
        yield n - 1;
    }
}

for (const x of nTimes(4)) {
    console.log(x);
}