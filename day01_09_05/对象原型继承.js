function Person(name, age, hobbies) {
    this.name = name;
    this.age = age;
    this.hobbies = hobbies;
    this.sayHi = function () {
        console.log('hello ' + this.name);
    };
    this.eat = function () {
        console.log(this.name + ' is eating');
    };
    this.sleep = function () {
        console.log(this.name + ' is sleeping');
    }
}


//测试用例
var person1 = new Person("Jasckson", '18')
console.log(person1.name); // Jackson
person1.sayHi() // Jackson在吃饭
person1.name = 'Jack'
console.log(person1.name); // Jack

var person2 = new Person("Naomi", '6')
console.log(person2.age); // 6
person2.sleep() // Naomi在睡觉
person2.age = '7'
console.log(person2.age); // 7