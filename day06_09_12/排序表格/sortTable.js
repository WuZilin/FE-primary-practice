class Class {
    constructor(students) {
        this.students = students;
    }

    // 根据order的要求给order排序
    sortStudents(order) {
        if (order === '-0') {
            this.students.sort((a, b) => {
                return b.total - a.total;
            });
        }
        else if (order === '+0') {
            this.students.sort((a, b) => {
                return a.total - b.total;
            });
        }
        else if (order === '-1') {
            this.students.sort((a, b) => {
                return b.chinese - a.chinese;
            });
        }
        else if (order === '+1') {
            this.students.sort((a, b) => {
                return a.chinese - b.chinese;
            });
        }
        else if (order === '-2') {
            this.students.sort((a, b) => {
                return b.math - a.math;
            });
        }
        else if (order === '+2') {
            this.students.sort((a, b) => {
                return a.math - b.math;
            });
        }
        else if (order === '-3') {
            this.students.sort((a, b) => {
                return b.english - a.english;
            });
        }
        else {
            this.students.sort((a, b) => {
                return a.english - b.english;
            });
        }

    }

    render(order) {
        // render之前先按照order的要求排序
        this.sortStudents(order);
        tbody.innerHTML = '';
        for (let i = 0; i < this.students.length; ++i) {
            let tr = document.createElement('tr');
            for (let key in this.students[i]) {
                let td = document.createElement('td');
                td.innerHTML = this.students[i][key];
                tr.appendChild(td);
            }
            tbody.appendChild(tr);
        }
    }
}

let order = '-0'; // 默认顺序是按总分降序
document.getElementById(order).classList.add('light');

const tbody = document.querySelector('tbody');
let students = [
    { 'name': 'haha', 'chinese': 1, 'math': 2, 'english': 3, 'total': '6' },
    { 'name': 'heihei', 'chinese': 3, 'math': 1, 'english': 0, 'total': '4' },
    { 'name': 'hoho', 'chinese': 1, 'math': 3, 'english': 1, 'total': '5' },
    { 'name': 'hehe', 'chinese': 2, 'math': 0, 'english': 4, 'total': '6' },
    { 'name': 'haha', 'chinese': 1, 'math': 2, 'english': 3, 'total': '6' },
    { 'name': 'heihei', 'chinese': 3, 'math': 1, 'english': 0, 'total': '4' },
    { 'name': 'hoho', 'chinese': 1, 'math': 3, 'english': 1, 'total': '5' },
    { 'name': 'hehe', 'chinese': 2, 'math': 0, 'english': 4, 'total': '6' },
    { 'name': 'haha', 'chinese': 1, 'math': 2, 'english': 3, 'total': '6' },
    { 'name': 'heihei', 'chinese': 3, 'math': 1, 'english': 0, 'total': '4' },
    { 'name': 'hoho', 'chinese': 1, 'math': 3, 'english': 1, 'total': '5' },
    { 'name': 'hehe', 'chinese': 2, 'math': 0, 'english': 4, 'total': '6' },
    { 'name': 'haha', 'chinese': 1, 'math': 2, 'english': 3, 'total': '6' },
    { 'name': 'heihei', 'chinese': 3, 'math': 1, 'english': 0, 'total': '4' },
    { 'name': 'hoho', 'chinese': 1, 'math': 3, 'english': 1, 'total': '5' },
    { 'name': 'hehe', 'chinese': 2, 'math': 0, 'english': 4, 'total': '6' },
    { 'name': 'haha', 'chinese': 1, 'math': 2, 'english': 3, 'total': '6' },
    { 'name': 'heihei', 'chinese': 3, 'math': 1, 'english': 0, 'total': '4' },
    { 'name': 'hoho', 'chinese': 1, 'math': 3, 'english': 1, 'total': '5' },
    { 'name': 'hehe', 'chinese': 2, 'math': 0, 'english': 4, 'total': '6' },
    { 'name': 'haha', 'chinese': 1, 'math': 2, 'english': 3, 'total': '6' },
    { 'name': 'heihei', 'chinese': 3, 'math': 1, 'english': 0, 'total': '4' },
    { 'name': 'hoho', 'chinese': 1, 'math': 3, 'english': 1, 'total': '5' },
    { 'name': 'hehe', 'chinese': 2, 'math': 0, 'english': 4, 'total': '6' },
    { 'name': 'haha', 'chinese': 1, 'math': 2, 'english': 3, 'total': '6' },
    { 'name': 'heihei', 'chinese': 3, 'math': 1, 'english': 0, 'total': '4' },
    { 'name': 'hoho', 'chinese': 1, 'math': 3, 'english': 1, 'total': '5' },
    { 'name': 'hehe', 'chinese': 2, 'math': 0, 'english': 4, 'total': '6' },
    { 'name': 'haha', 'chinese': 1, 'math': 2, 'english': 3, 'total': '6' },
    { 'name': 'heihei', 'chinese': 3, 'math': 1, 'english': 0, 'total': '4' },
    { 'name': 'hoho', 'chinese': 1, 'math': 3, 'english': 1, 'total': '5' },
    { 'name': 'hehe', 'chinese': 2, 'math': 0, 'english': 4, 'total': '6' },
    { 'name': 'haha', 'chinese': 1, 'math': 2, 'english': 3, 'total': '6' },
    { 'name': 'heihei', 'chinese': 3, 'math': 1, 'english': 0, 'total': '4' },
    { 'name': 'hoho', 'chinese': 1, 'math': 3, 'english': 1, 'total': '5' },
    { 'name': 'hehe', 'chinese': 2, 'math': 0, 'english': 4, 'total': '6' },
    { 'name': 'haha', 'chinese': 1, 'math': 2, 'english': 3, 'total': '6' },
    { 'name': 'heihei', 'chinese': 3, 'math': 1, 'english': 0, 'total': '4' },
    { 'name': 'hoho', 'chinese': 1, 'math': 3, 'english': 1, 'total': '5' },
    { 'name': 'hehe', 'chinese': 2, 'math': 0, 'english': 4, 'total': '6' },
    { 'name': 'haha', 'chinese': 1, 'math': 2, 'english': 3, 'total': '6' },
    { 'name': 'heihei', 'chinese': 3, 'math': 1, 'english': 0, 'total': '4' },
    { 'name': 'hoho', 'chinese': 1, 'math': 3, 'english': 1, 'total': '5' },
    { 'name': 'hehe', 'chinese': 2, 'math': 0, 'english': 4, 'total': '6' },
    { 'name': 'haha', 'chinese': 1, 'math': 2, 'english': 3, 'total': '6' },
    { 'name': 'heihei', 'chinese': 3, 'math': 1, 'english': 0, 'total': '4' },
    { 'name': 'hoho', 'chinese': 1, 'math': 3, 'english': 1, 'total': '5' },
    { 'name': 'hehe', 'chinese': 2, 'math': 0, 'english': 4, 'total': '6' },
];
const theClass = new Class(students);
theClass.render(order);

const inputs = document.querySelectorAll('input');
const btn = document.querySelector('button');

// 添加学生成绩
btn.addEventListener('click', () => {
    let stu = {};
    // 检查输入信息是否完整
    for (let i = 0; i < inputs.length; ++i) {
        if (inputs[i].value === '') {
            alert('请填写完整的学生信息或成绩');
            return;
        }
    }
    stu.name = inputs[0].value;
    // 检查输入的成绩是否正确
    for (let i = 1; i < inputs.length; ++i) {
        if (inputs[i].value > 100 || inputs[i].value < 0) {
            alert('请填写正确的成绩');
            return;
        }
    }
    stu.chinese = inputs[1].value;
    stu.math = inputs[2].value;
    stu.english = inputs[3].value;
    stu.total = parseInt(inputs[1].value) + parseInt(inputs[2].value) + parseInt(inputs[3].value);
    inputs[0].value = '';
    inputs[1].value = '';
    inputs[2].value = '';
    inputs[3].value = '';
    theClass.students.push(stu);
    theClass.render(order);
});

// 给排序的小三角绑定点击事件
const orders = document.querySelectorAll('th div');
for (let i = 0; i < orders.length; ++i) {
    orders[i].addEventListener('click', (e) => {
        order = e.target.id;
        theClass.render(order);
        document.querySelector('.light').classList.remove('light');
        e.target.classList.add('light');
    });
}

const thead = document.querySelector('thead');
window.addEventListener('scroll', () => {
    var scrollTop = document.documentElement.scrollTop; // 页面滚动高度
    if (scrollTop > thead.offsetHeight) {
        thead.style.position = 'fixed';
        thead.style.top = 0;
        console.log('haah');
    }
    else {
        thead.style.position = 'sticky';
        thead.style.top = `${thead.offsetHeight}px`;
    }
});