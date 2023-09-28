var fullBloomFlowers = function (flowers, people) {
    let start = [];
    let end = [];
    for (let i = 0; i < flowers.length; ++i) {
        start.push(flowers[i][0]);
        end.push(flowers[i][1]);
    }
    start.sort((a, b) => a - b);
    end.sort((a, b) => a - b);

    function binarySearch(num, numList) {
        let left = 0;
        let right = numList.length;
        let index;
        while (left !== right) {
            index = Math.ceil((left + right) / 2);
            console.log(index, left, right);
            if (num < numList[index]) {
                right = index - 1;
                if (left === right && num > numList[left]) {
                    return right + 1;
                }
            }
            else if (num > numList[index]) {
                left = index + 1;
            }
            else {
                index++;
                while (numList[index] === num) {
                    index++;
                }
                return index;
            }
        }
        return left;
    }
    let result = [];
    for (let i = 0; i < people.length; ++i) {
        let a = binarySearch(people[i], start);
        let b = binarySearch(people[i], end);
        result.push(a - b);
    }
    return result;

}


console.log(fullBloomFlowers(flowwes, people));


// function binarySearch(num, numList) {
//     let left = 0;
//     let right = numList.length;
//     let index;
//     while (left !== right) {
//         index = Math.ceil((left + right) / 2);
//         console.log(index, left, right);
//         if (num < numList[index]) {
//             right = index - 1;
//             if (left === right && num > numList[left]) {
//                 return right + 1;
//             }
//         }
//         else if (num > numList[index]) {
//             left = index + 1;
//         }
//         else {
//             index++;
//             while (numList[index] === num) {
//                 index++;
//             }
//             return index;
//         }
//     }
//     return left;
// }

