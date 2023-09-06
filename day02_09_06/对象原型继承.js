// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.hobbies = ['游泳', '跑步'];
//     this.sayHi = function () {
//         console.log('你好我叫' + this.name);
//     };
//     this.eat = function () {
//         console.log(this.name + '在吃饭');
//     };
//     this.sleep = function () {
//         console.log(this.name + '在睡觉');
//     };
// }


// ---------------------task0、1----------------------
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.hobbies = ['游泳', '跑步'];
}

Person.prototype.sayHi = function () {
    console.log('你好我叫' + this.name);
};

Person.prototype.eat = function () {
    console.log(this.name + '在吃饭');
};

Person.prototype.sleep = function () {
    console.log(this.name + '在睡觉');
}

//测试用例
console.log('------------task0 print------------');
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

console.log('------------task1 print------------');
console.log(person1.sayHi == person2.sayHi) // ->true
console.log(person1.eat == person2.eat) // ->true
console.log(person1.sleep == person2.sleep) // ->true


// ---------------------task2----------------------
function Teacher(name, age, subject) {
    Person.call(this, name, age); // 调用父类的构造函数
    this.subject = subject;
}

// 子类继承父类的原型
Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;
Teacher.prototype.teach = function () {
    console.log(this.name + '正在教授' + this.subject + '课程');
};

var teacherWang = new Teacher("Miss Wang", "28", "English");
var teacherLiu = new Teacher("Miss Liu", "34", "Chiese");

//验证obj_instance是否是obj_proto的实例对象，如果是返回true，如果不是返回false
function isInstance(obj_instance, obj_proto) {
    // your code here
    return obj_instance instanceof obj_proto;
}

//获取 obj 的原型对象
function getProto(obj) {
    // your code here
    return obj.__proto__;
}

//验证attr属性是否是obj自己的属性而不是继承而来的，如果是返回true，如果不是返回false
function isOwnProperty(attr, obj) {
    return obj.hasOwnProperty(attr);
}

console.log('------------task2 print------------');
teacherWang.teach(); //Miss Wang正在教授English课程
teacherLiu.teach(); //Miss Wang正在教授Chinese课程

console.log(isInstance(teacherWang, Teacher)); // ->true  teacherWang是Teacher的实例
console.log(isInstance(teacherLiu, Teacher)); // ->true  teacherLiu是Teacher的实例
console.log(isInstance(teacherLiu, Person));
console.log(getProto(teacherLiu)); // -> Teacher

console.log(isOwnProperty("hobbies", teacherLiu)); // -> true hobbies是teacherLiu实例私有属性
console.log(isOwnProperty("hobbies", teacherWang)); // -> true hobbies是teacherWang实例私有属性
teacherWang.hobbies.push("阅读"); //teacherWang添加了一个阅读爱好
teacherLiu.hobbies.push("爬山"); //teacherLiu添加了一个爬山爱好
console.log(teacherWang.hobbies); //(3) ['跑步', '游泳', '阅读']
console.log(teacherLiu.hobbies); //(3) ['跑步', '游泳', '爬山']
