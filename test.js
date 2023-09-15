

function getFirstDayOfMonth(year, month) {
    // 创建一个 Date 对象，月份从 0 开始，所以我们需要- 1
    var date = new Date(year, month - 1, -1);

    // getDay() 返回星期几，0 表示星期日，1 表示星期一，以此类推
    var dayOfWeek = date.getDay();

    // 返回星期几的名称
    return dayOfWeek;
}

// 使用函数
console.log(getFirstDayOfMonth(2023, 1));
var date = new Date();
console.log(Date.prototype);