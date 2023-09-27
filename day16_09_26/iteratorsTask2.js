function isIterable(data) {
    return typeof data[Symbol.iterator] === 'function';
}

const books = {
    html: ['HTML5高级程序设计', 'Head First HTML and CSS'],
    css: ['精通CSS', 'CSS权威指南', 'CSS禅意花园', '响应式Web设计实践', '网站重构'],
    javascript: ['JavaScript DOM编程艺术', 'JavaScript高级程序设计', '高性能JavaScript', '编写可维护的JavaScript', 'JavaScript模式'],
    node: ['深入浅出Node.js', '了不起的Node.js: 将JavaScript进行到底', 'Node.js实战'],
}
const a = [1, 2, 3]

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
//测试用例
console.log(isIterable(books))// => false
console.log(isIterable(a))// => true
console.log(isIterable(aaa))// => true
