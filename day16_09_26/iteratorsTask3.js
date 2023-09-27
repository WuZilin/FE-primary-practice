function isIterable(data) {
    return typeof data[Symbol.iterator] === 'function';
}

const books = {
    html: ['HTML5高级程序设计', 'Head First HTML and CSS'],
    css: ['精通CSS', 'CSS权威指南', 'CSS禅意花园', '响应式Web设计实践', '网站重构'],
    javascript: ['JavaScript DOM编程艺术', 'JavaScript高级程序设计', '高性能JavaScript', '编写可维护的JavaScript', 'JavaScript模式'],
    node: ['深入浅出Node.js', '了不起的Node.js: 将JavaScript进行到底', 'Node.js实战'],
};

books[Symbol.iterator] = function () {
    let bookList = this.html.concat(this.css.concat(this.javascript.concat(this.node)));
    let index = 0;
    return {
        next: function () {
            if (index < bookList.length) {
                return { value: bookList[index++], done: false };
            }
            else {
                return { value: undefined, done: true };
            }
        }
    }
}
//测试用例
console.log(isIterable(books))// => true
for (let book of books) {
    console.log(book)
}
//HTML5高级程序设计
//Head First HTML and CSS
//精通CSS
//CSS权威指南
//...
//Node.js实战

let [html_book1, html_book2] = [...books];
console.log(`第一本 html 书籍：${html_book1},第二本 html 书籍：${html_book2}`)
//第一本 html 书籍：HTML5高级程序设计,第二本 html 书籍：Head First HTML and CSS


function fibonacciIterator(endIndex) {
    // your code here     
    let index = 1;
    let f1 = 1;
    let f2 = 1;
    return {
        next: function () {
            let result = {};
            if (index <= endIndex) {
                if (index === 1 || index === 2) {
                    result.value = 1;
                }
                else {
                    result.value = f1 + f2;
                    f1 = f2;
                    f2 = result.value;
                }
                result.done = false;
                index++;
            }
            else {
                result.done = true;
                result.value = undefined;
            }
            return result;
        }
    }
}

// 测试用例
let fibonacci = fibonacciIterator(10); // 生成最开始的10个数字
let result = fibonacci.next();
while (!result.done) {
    console.log(result.value); // 1 1 2 3 5 8 13 21 34 55
    result = fibonacci.next();
}

let arr = ['apple', 'banana']

let iter1 = arr[Symbol.iterator]()
let iter2 = arr[Symbol.iterator]()
console.log(iter1.next())
console.log(iter1.next())
console.log(iter2.next())
console.log(iter2.next())
