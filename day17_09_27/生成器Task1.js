/**
 * @description  随机生成数字序列生成器函数
 * @method *isIcreateRandomGeneratorterable
 * @param  {number}start  生成数字的范围下限
 * @param  {number}end  生成数字的范围上限
 * @param  {number}num  生成数字的个数
 **/

function* createRandomGenerator(start = 0, end = 10, num = 5) {
    // your code here
    for (let i = 0; i < num; ++i) {
        yield Math.ceil(Math.random() * (end - start) + start);
    }
}

// 测试用例
let randowSequence = createRandomGenerator(0, 20, 10); //调用生成器,随机生成范围是1-20的10个数字
let randowSequence2 = createRandomGenerator(10, 100, 50); //调用生成器,随机生成范围是10-100的5个数字

for (let number1 of randowSequence) {
    console.log(number1);
}
//打印出10个范围为1-20的数字

for (let number2 of randowSequence2) {
    console.log(number2);
}
//打印出5个范围为10-100的数字