const seats = document.querySelectorAll('.seat');

// 移动函数
function move(node, targetX, targetY) {
    let minSpeedX = targetX - node.offsetLeft > 0 ? 0.5 : -0.5;
    let minSpeedY = targetY - node.offsetTop > 0 ? 0.5 : -0.5;
    // 一定要设置个最小速度啊， 不然会出大事！！！
    let speedX = ((targetX - node.offsetLeft) / 150) + minSpeedX;
    let speedY = ((targetY - node.offsetTop) / 150) + minSpeedY;
    let minErrorX = Math.abs(targetX - node.offsetLeft) / 70;
    let minErrorY = Math.abs(targetY - node.offsetTop) / 70;
    return new Promise(resolve => {
        node.aMoveTimer = setInterval(() => {
            let nowX = node.offsetLeft;
            let nowY = node.offsetTop;
            if (Math.abs(targetX - nowX) > minErrorX || Math.abs(targetY - nowY) > minErrorY) {
                if (Math.abs(targetX - nowX) > minErrorX) {
                    node.style.left = nowX + speedX + 'px';
                }
                if (Math.abs(targetY - nowY) > minErrorY) {
                    node.style.top = nowY + speedY + 'px';
                }
                // console.log(Math.abs(targetX - nowX), minErrorX);
                // console.log(nowX, targetX);
                // console.log(speedX);
            }
            else {
                // console.log('到达');
                resolve();
                clearInterval(node.aMoveTimer);
            }
        }, 10);
    })
}
// 定义餐厅类
class Restaurant {
    constructor(money, waiterList, cookList, menu4Customer, menu4Staff) {
        this.money = money; // 餐厅资金
        this.seats = [true, true, true]; // 默认餐厅有3个座位
        this.waiterList = waiterList; // 餐厅服务工表
        this.cookList = cookList;  // 餐厅厨师列表
        this.menu4Customer = menu4Customer;
        this.menu4Staff = menu4Staff;
        // this.historyStaffNum = staffList.length; // 历史员工数量，用于生成不会重复的工号
        // for (let i = 0; i < this.historyStaffNum; i++) {
        //     this.staffList[i].id = i + 1;
        // }
        // // for (let i = 0; i < numOfSeats; ++i) {
        // //     this.seats[i] = true;  // ture表示该座位是空的
        // // }
    }
    // 招聘
    hire(newStaff) {
        if (newStaff instanceof Waiter) {
            this.waiterList.push(newStaff);
        } else if (newStaff instanceof Cook) {
            this.cookList.push(newStaff);
        }
    }
    // 解雇 
    fire(badStaff) {
        if (badStaff instanceof Waiter) {
            this.waiterList = this.waiterList.filter(staff => staff !== badStaff);
        } else if (badStaff instanceof Cook) {
            this.cookList = this.cookList.filter(staff => staff !== badStaff);
        }
    }

    // 判断现在还有没有座位, 有空位则返回座位号
    hasSeats() {
        for (let i = 0; i < this.seats.length; ++i) {
            if (this.seats[i]) {
                return i + 1;
            }
        }
        return false;
    }

    open() {
        // 别搞那么极限，先简单点，也让店里的服务员休息休息，每一秒检查一次店里的座位
        // 开蒙后开始生产顾客(雾),2-8s生产一个顾客
        createCustomerWithRandomDelay(2000, 8000);
        let seatListener = setInterval(() => {
            // 检查有没有空位
            let emtrySeat = this.hasSeats();
            if (emtrySeat) {
                // 如果有空位则看店门口有没有顾客在排队
                if (customerList.length !== 0) {
                    var newCustomer = customerList.shift();
                    newCustomer.sitDown(emtrySeat - 1);
                    // 有顾客进店，则店外面排队的顾客往前走
                    for (let i = 0; i < customerList.length; ++i) {
                        customerList[i].lineMove();
                    }
                }
            }
        }, 1000);
    }

    close() {
        clearInterval(seatListener);
    }
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

const waiter1Node = document.querySelector('#waiter1');
const waiter2Node = document.querySelector('#waiter2');
const waiter3Node = document.querySelector('#waiter3');

class Waiter extends Stuff {
    constructor(name, salary, node, seat) {
        super(name, salary);
        this.node = node;
        this.seat = seat;
        this.restaurant = ifeRestaurant;
    }
    async order(dish) {
        // 走到客人身边
        await move(this.node, 200, this.node.offsetTop);
        // 模拟服务员给客人点餐需要3秒
        let str = '我要';
        for (let i = 0; i < dish.length; ++i) {
            str += ` ${dish[i].name}`;
        }
        this.customer.node.innerHTML = str;
        await new Promise(resolve => setTimeout(resolve, 3000));
        // 走回去
        await move(this.node, 0, this.offsetTop);
        this.customer.node.innerHTML = '快点儿， 我等得花儿都谢了'
        // 通知厨师做菜了
        this.restaurant.cookList[this.seat].cook(menu4Staff, dish);
    }

    async serving(doneDish) {
        this.node.innerHTML = '上菜中';
        await move(this.node, 200, this.node.offsetTop);
        this.node.innerHTML = `服务员${this.name}`;
        let str = ``;
        for (let i = 0; i < doneDish.length; ++i) {
            str += ` ${doneDish[i].name}`;
        }
        seats[this.seat].innerHTML = str;
        this.customer.eat(doneDish);
        await move(this.node, 0, this.node.offsetTop);
    }
}

const cook1Node = document.querySelector('#cook1');
const cook2Node = document.querySelector('#cook2');
const cook3Node = document.querySelector('#cook3');

class Cook extends Stuff {
    constructor(name, salary, node, seat) {
        super(name, salary);
        this.node = node;
        this.seat = seat;
        this.restaurant = ifeRestaurant;
    }
    async cook(menu4Staff, sureDish) {
        // 烹饪出菜品, 炒一道菜要4秒钟
        this.node.innerHTML = '正在做菜';
        let doneDish = [];
        let sumCost = 0;
        for (let i = 0; i < sureDish.length; ++i) {
            await new Promise(resolve => setTimeout(resolve, 4000));
            doneDish.push(new Dish(menu4Staff[sureDish[i].number]));
            sumCost += menu4Staff[sureDish[i].number].cost;
        }
        // 菜做好了，成本从餐馆账户上扣掉
        ifeRestaurant.money -= sumCost;
        document.getElementById('money').innerHTML = `当前餐厅的资金：¥${ifeRestaurant.money}`;
        this.node.innerHTML = `厨师${this.name}`;
        // 通知服务员，菜做好了,让其送给顾客
        ifeRestaurant.waiterList[this.seat].serving(doneDish);
    }
}
var cook1 = new Cook("Tony", 10000, cook1Node, 0);
var cook2 = new Cook("Mike", 10000, cook2Node, 1);
var cook3 = new Cook("John", 10000, cook3Node, 2);

class Customer {
    constructor(restaurant) {
        this.id = Math.random();
        restaurant.customer = this;
        this.restaurant = restaurant;
        this.node = document.createElement('div');
        this.node.className = 'customer';
        document.body.appendChild(this.node);
        // 根据当前排队的人数，让顾客节点的位置对应改变，实现排队的效果
        let linePosition = customerList.length * 80;
        this.node.style.top = this.node.offsetTop - linePosition + 'px';
    }

    async lineMove() {
        let movedDistance = 0;
        return new Promise(resolve => {
            let moveTimer = setInterval(() => {
                if (movedDistance >= 80) {
                    resolve();
                    clearInterval(moveTimer);
                }
                else {
                    this.node.style.top = this.node.offsetTop + 0.8 + 'px';
                    movedDistance += 0.8;
                }
            }, 10);
        });
    }

    async sitDown(seat) {
        this.seat = seat;
        this.restaurant.seats[seat] = false;
        this.node.innerHTML = '找个位子坐';
        let seatTop;
        if (seat === 0) {
            seatTop = 160;
        }
        else if (seat === 1) {
            seatTop = 330;
        }
        else {
            seatTop = 500;
        }
        document.getElementById('lineNum').innerHTML = `当前排队人数：${customerList.length}`;
        await move(this.node, 850, seatTop);
        // 坐下后，就要开始点菜了
        this.order();
    }

    async order() {
        // 点菜
        let dish = [];
        this.node.innerHTML = '吃什么好呢';
        for (let i = 0; i < 5; ++i) {
            let flag = Math.random();
            if (flag > 0.5) {
                dish.push(menu4Customer[i]);
            }
        }
        // 同样模拟点菜需要3秒
        await new Promise(resolve => setTimeout(resolve, 3000));
        if (dish.length === 0) {
            // 没有点什么菜，直接走完
            let x = false;
            this.standUp(x);
            return;
        }
        this.node.innerHTML = '决定了！ 服务员！';
        // 呼叫服务员, 坐在几号桌就叫几号服务员
        this.callWaiter(dish, this.seat);
    }

    callWaiter(dish, seat) {
        // 服务员和桌子绑定，每个服务员有且只有对一张桌子负责
        this.waiter = this.restaurant.waiterList[seat];
        this.waiter.customer = this;
        this.waiter.order(dish);
    }

    async eat(doneDish) {
        // 吃
        this.node.innerHTML = '干饭中...';
        let sumPrice = 0;
        for (let i = 0; i < doneDish.length; ++i) {
            await new Promise(resolve => setTimeout(resolve, 4000));
            sumPrice += doneDish[i].price;
        }
        // 吃完要付钱了
        this.restaurant.money += sumPrice;
        document.getElementById('money').innerHTML = `当前餐厅的资金：¥${this.restaurant.money}`;
        // 付完钱，可以溜了
        let x = true;
        this.standUp(x);
    }

    async standUp(x) {
        this.node.innerHTML = x ? '吃饱了, 溜了溜了' : '没啥想吃的，去下一家看看吧';
        seats[this.seat].innerHTML = `${this.seat}号桌`;
        await move(this.node, 850, 680);
        document.body.removeChild(this.node);
        this.restaurant.seats[this.seat] = true;
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
    { 'name': '面包', 'price': 10, number: 0 },
    { 'name': '咖啡', 'price': 20, number: 1 },
    { 'name': '拉面', 'price': 30, number: 2 },
    { 'name': '蛋糕', 'price': 40, number: 3 },
    { 'name': '烤肉', 'price': 50, number: 4 }
];

let menu4Staff = [
    { 'name': '面包', 'cost': 5, 'price': 10 },
    { 'name': '咖啡', 'cost': 10, 'price': 20 },
    { 'name': '拉面', 'cost': 15, 'price': 30 },
    { 'name': '蛋糕', 'cost': 20, 'price': 40 },
    { 'name': '烤肉', 'cost': 25, 'price': 50 }
];
var ifeRestaurant = new Restaurant(1000, [], [], menu4Customer, menu4Staff);


var waiter1 = new Waiter("Dave", 5000, waiter1Node, 0);
var waiter2 = new Waiter("Alice", 5000, waiter2Node, 1);
var waiter3 = new Waiter("Bob", 5000, waiter3Node, 2);
ifeRestaurant.hire(cook1);
ifeRestaurant.hire(cook2);
ifeRestaurant.hire(cook3);
ifeRestaurant.hire(waiter1);
ifeRestaurant.hire(waiter2);
ifeRestaurant.hire(waiter3);


let customerList = [];
async function createCustomerWithRandomDelay(min, max) {
    const delay = Math.random() * (max - min) + min;
    await new Promise(resovle => {
        setTimeout(() => {
            var newCustomer = new Customer(ifeRestaurant);
            customerList.push(newCustomer);
            document.getElementById('lineNum').innerHTML = `当前排队人数：${customerList.length}`;
            resovle();
        }, delay);
    });
    createCustomerWithRandomDelay(min, max);
}



document.getElementById('open').addEventListener('click', () => {
    ifeRestaurant.open();
});