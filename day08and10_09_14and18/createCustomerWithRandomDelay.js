
// let randomTime = Math.ceil((Math.random() * 10) * 1000);
// let customerBorn = setInterval(() => {
//     var newCustomer = new Customer();
//     customerList.push(newCustomer);
//     console.log(customerList);
//     randomTime = Math.ceil((Math.random() * 10)) * 1000;
//     console.log(randomTime);
// }, randomTime);

// 实现每隔一个随机的时间生成一个顾客
import { Customer } from "./restaurant.js";


async function createCustomerWithRandomDelay(min, max) {
    const delay = Math.random() * (max - min) + min;
    await new Promise(resovle => {
        setTimeout(() => {
            var newCustomer = new Customer(ifeRestaurant);
            customerList.push(newCustomer);
            console.log(customerList);
            resovle();
        }, delay);
    })
    createCustomerWithRandomDelay(min, max);
}

export default createCustomerWithRandomDelay;