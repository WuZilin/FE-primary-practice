// 获取座位的坐标
const seatNode = document.querySelector('.seat');
let seatX = seatNode.getBoundingClientRect().left;
let seatY = seatNode.getBoundingClientRect().top;

// 定义餐厅类
class Restaurant {
    constructor(money, numOfSeats, staffList, menu4Customer, menu4Staff) {
        this.money = money; // 餐厅资金
        this.numOfSeats = numOfSeats; // 餐厅座位数量
        // this.seats = [];
        this._seat = true;
        this.staffList = staffList; // 餐厅员工表
        this.menu4Customer = menu4Customer;
        this.menu4Staff = menu4Staff;
        this.historyStaffNum = staffList.length; // 历史员工数量，用于生成不会重复的工号
        for (let i = 0; i < this.historyStaffNum; i++) {
            this.staffList[i].id = i + 1;
        }
        // for (let i = 0; i < numOfSeats; ++i) {
        //     this.seats[i] = true;  // ture表示该座位是空的
        // }
    }

    get seat() {
        return this._seat;
    }

    set seat(value) {
        this._seat = value;
        if (value) {
            console.log('座位情况：有空位');
            // if (this.customer) {
            //     this.customer.sitDown();
            // }
        }
        else {
            console.log('座位情况：无空位');
        }
    }

    // 招聘
    hire(newStaff) {
        this.historyStaffNum++;
        newStaff.id = this.historyStaffNum;
        this.staffList.push(newStaff);
    }

    // 解雇 
    fire(badStaff) {
        this.staffList = this.staffList.filter(staff => staff !== badStaff);
    }

    // 判断现在还有没有座位, 有空位则返回座位号
    // hasSeats() {
    //     for (let i = 1; i < this.numOfSeats + 1; ++i) {
    //         if (this.seats[i - 1]) {
    //             return i
    //         }
    //     }
    //     return false;
    // }
}

// 定义职员类
class Stuff {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    finishAwork(work) {
        console.log(`${this.name}完成了${work}工作`);
    }
}

const waiterNode = document.querySelector('.waiter');
class Waiter extends Stuff {
    constructor(id, name, salary, node) {
        super(id, name, salary);
        this.node = node;
    }
    async order(dish) {
        // 走到客人身边需要2秒
        await new Promise(resolve => setTimeout(resolve, 0));
        this.node.classList.add('goseat');
        await new Promise(resolve => setTimeout(resolve, 2000));
        // 模拟服务员给客人点餐需要3秒
        customerNode.innerHTML = '我要这个';
        await new Promise(resolve => setTimeout(resolve, 3000));
        // 走回去也要两秒
        this.node.classList.remove('goseat');
        customerNode.innerHTML = '快点儿， 我等得花儿都谢了'
        await new Promise(resolve => setTimeout(resolve, 2000));
        return dish;
    }

    async serving() {
        await new Promise(resolve => setTimeout(resolve, 0));
        this.node.classList.add('goseat');
        await new Promise(resolve => setTimeout(resolve, 2000));
    }
}

const cookNode = document.querySelector('.cook');
class Cook extends Stuff {
    constructor(id, name, salary) {
        super(id, name, salary);
    }
    async cook(menu4Staff, sureDish) {
        // 烹饪出菜品, 炒一道菜要5秒钟
        cookNode.innerHTML = '正在做菜';
        await new Promise(resolve => setTimeout(resolve, 5000));
        let doneDish = new Dish(menu4Staff[sureDish]);
        // 菜做好了，成本从餐馆账户上扣掉
        ifeRestaurant.money -= doneDish.cost;
        cookNode.innerHTML = '厨师';
        return doneDish;
    }
}

class Customer {
    constructor(restaurant) {
        restaurant.customer = this;
        this.restaurant = restaurant;
        // console.log(this.restaurant);
        this.node = customerNode;
    }

    async sitDown() {
        await new Promise(resolve => setTimeout(resolve, 500));
        // 模拟一下坐下这个动作需要2秒
        this.node.classList.add('goseat');
        this.node.innerHTML = '找个位子坐';
        await new Promise(resolve => setTimeout(resolve, 2000));
        // 坐下后，就要开始点菜了
        this.restaurant.seat = false;
        console.log('顾客已入坐');
        // this.order();
    }

    async order() {
        // 点菜
        let dish = Math.floor(Math.random() * this.restaurant.menu4Customer.length);
        // 同样模拟点菜需要3秒
        this.node.innerHTML = '吃什么好呢';
        await new Promise(resolve => setTimeout(resolve, 3000));
        this.node.innerHTML = '决定了！ 服务员！';
        return dish;
    }
    async eat(doneDish) {
        // 吃
        this.node.innerHTML = '干饭中...';
        await new Promise(resolve => setTimeout(resolve, 5000));
        // 吃完要付钱了
        this.restaurant.money += doneDish.price;
    }

    async standUp() {
        await new Promise(resolve => setTimeout(resolve, 1));
        this.node.classList.remove('goseat');
        this.node.innerHTML = '吃饱了, 溜了溜了';
        await new Promise(resolve => setTimeout(resolve, 2000));
        this.restaurant.seat = true;
        console.log('用餐完餐厅的资产：' + this.restaurant.money);
    }
}


class Dish {
    constructor(obj) {
        this.name = obj.name;
        this.cost = obj.cost;
        this.price = obj.price;
    }
}
let menu4Customer = [
    { 'name': 'a', 'price': 10 },
    { 'name': 'b', 'price': 20 },
    { 'name': 'c', 'price': 30 },
    { 'name': 'd', 'price': 40 },
    { 'name': 'f', 'price': 50 }
];

let menu4Staff = [
    { 'name': 'a', 'cost': 5, 'price': 10 },
    { 'name': 'b', 'cost': 10, 'price': 20 },
    { 'name': 'c', 'cost': 15, 'price': 30 },
    { 'name': 'd', 'cost': 20, 'price': 40 },
    { 'name': 'f', 'cost': 25, 'price': 50 }
];
var ifeRestaurant = new Restaurant(1000, 1, [], menu4Customer, menu4Staff);

var newCook = new Cook(1, "Tony", 10000);
var newWaiter = new Waiter(2, "Mike", 5000, waiterNode);
ifeRestaurant.hire(newCook);
ifeRestaurant.hire(newWaiter);

// console.log(ifeRestaurant.staffList);

// ifeRestaurant.fire(newCook);
// console.log(ifeRestaurant.staffList);




let customerList = [];
async function createCustomerWithRandomDelay(min, max) {
    const delay = Math.random() * (max - min) + min;
    await new Promise(resovle => {
        setTimeout(() => {
            var newCustomer = new Customer(ifeRestaurant);
            customerList.push(newCustomer);
            // console.log(customerList);
            resovle();
        }, delay);
    });
    createCustomerWithRandomDelay(min, max);
}

// createCustomerWithRandomDelay(5000, 10000);
const customerNode = document.createElement('div');
customerNode.className = 'customer';
customerNode.id = 'aa';
var a = new Customer(ifeRestaurant);

document.body.appendChild(customerNode);


async function open() {
    if (a.restaurant.seat) {
        // 先坐下
        await a.sitDown();
        // 然后点菜
        let dish = await a.order();
        console.log('顾客已决定' + dish + '号菜品');
        let sureDish = await newWaiter.order(dish);
        console.log('服务员点餐完成，已交给交给厨师');
        let doneDish = await newCook.cook(menu4Staff, sureDish);
        console.log('厨师做完菜了');
        await newWaiter.serving();
        console.log('服务员已将菜送到顾客手上');
        await a.eat(doneDish);
        console.log('顾客已用餐完毕');
        await a.standUp();
    }
}

open();