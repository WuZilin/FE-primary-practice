function getFirstDayOfMonth(year, month) {
    // 创建一个 Date 对象，月份从 0 开始，所以我们需要- 1
    var date = new Date(year, month - 1, 1);

    // getDay() 返回星期几，0 表示星期日，1 表示星期一，以此类推
    var dayOfWeek = date.getDay();

    // 返回星期几的名称
    return dayOfWeek;
}

// 我得知道这个月有多少天
function getDayNum(year, month) {
    // 为了方便求上一个月有多少天
    if (month === 0) {
        year--;
        month = 12;
    }
    if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
        return 31;
    }
    else if (month === 4 || month === 6 || month === 9 || month === 11) {
        return 30;
    }
    else {
        if ((year % 4) === 0 && (year % 100) !== 0 && (year % 400) === 0) {
            return 29;
        }
        else {
            return 28;
        }
    }
}

export { getFirstDayOfMonth, getDayNum };