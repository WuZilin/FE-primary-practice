

// function getFirstDayOfMonth(year, month) {
//     // 创建一个 Date 对象，月份从 0 开始，所以我们需要- 1
//     var date = new Date(year, month - 1, -1);

//     // getDay() 返回星期几，0 表示星期日，1 表示星期一，以此类推
//     var dayOfWeek = date.getDay();

//     // 返回星期几的名称
//     return dayOfWeek;
// }

// // 使用函数
// console.log(getFirstDayOfMonth(2023, 1));
// var date = new Date();
// console.log(Date.prototype);

// class Restaurant {
//     constructor(seats) {
//         this._seats = seats;
//     }

//     set seats(value) {
//         console.log('set触发了');
//         this._seats = value;
//         for (let i = 0; i < this._seats.length; i++) {
//             if (this._seats[i] === true) {
//                 console.log(i);
//             }
//         }
//     }

//     get seats() {
//         return this._seats;
//     }
// }

// var ifeRestaurant = new Restaurant([false, false, false]);

// console.log(ifeRestaurant.seats);
// console.log('------------')

// ifeRestaurant.seats = [false, true, false];
// console.log(ifeRestaurant.seats);
// console.log('------------')

// ifeRestaurant.seats[0] = true;
// console.log(ifeRestaurant.seats);
// console.log('------------')

// // 当类中某个属性是数组时，我们对其设置set，当通过下标的方式修改数组中的
// // 的某一项时，并不会触发set方法， 只有给这个数组整个重新赋值，才会
// // 触发set方法


// let a = 0;
// if (a) {
//     console.log('true');
// }
// else {
//     console.log('false');
// }

// let balls = [];

// function haha(balls) {
//     balls.push(1);
// }

// haha(balls);
// console.log(balls);


// function Person() {
//     this.test1 = function (a, b) {
//         console.log(a, b);
//     }
//     this.test1 = function (a) {
//         console.log(a);
//     }
// }
// var p1 = new Person();
// p1.test1("1", "2");
// p1.test1("3");



// let reg = new RegExp('^allBlog/');
// let aa = 'asfd';
// let bb = 'allBlogwfw';

// console.log(reg.test(bb));
// console.log(reg.test(aa));

// let qq = '10t3eg';
// console.log(parseInt(qq));

Array.prototype.bar = 1;

let products = [1001, "mouse", "monitor", { firstName: "Jin Vincent" }];
for (let prop in products) {
    console.log(prop);
}

console.log(products);