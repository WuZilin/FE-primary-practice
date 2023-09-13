import san from 'san'
import './CalMain.css'
import { getFirstDayOfMonth, getDayNum } from './someFunctions';

var CalMain = san.defineComponent({
    template: ''
        + '<table>'
        + '<tr>'
        + '<th>日</th>'
        + '<th>一</th>'
        + '<th>二</th>'
        + '<th>三</th>'
        + '<th>四</th>'
        + '<th>五</th>'
        + '<th>六</th>'
        + '</tr>'
        + '<tr>'
        + '<td></td>'
        + '<td></td>'
        + '<td></td>'
        + '<td></td>'
        + '<td></td>'
        + '<td></td>'
        + '<td></td>'
        + '</tr>'
        + '<tr>'
        + '<td></td>'
        + '<td></td>'
        + '<td></td>'
        + '<td></td>'
        + '<td></td>'
        + '<td></td>'
        + '<td></td>'
        + '</tr>'
        + '<tr>'
        + '<td></td>'
        + '<td></td>'
        + '<td></td>'
        + '<td></td>'
        + '<td></td>'
        + '<td></td>'
        + '<td></td>'
        + '</tr>'
        + '<tr>'
        + '<td></td>'
        + '<td></td>'
        + '<td></td>'
        + '<td></td>'
        + '<td></td>'
        + '<td></td>'
        + '<td></td>'
        + '</tr>'
        + '<tr>'
        + '<td></td>'
        + '<td></td>'
        + '<td></td>'
        + '<td></td>'
        + '<td></td>'
        + '<td></td>'
        + '<td></td>'
        + '</tr>'
        + '<tr>'
        + '<td></td>'
        + '<td></td>'
        + '<td></td>'
        + '<td></td>'
        + '<td></td>'
        + '<td></td>'
        + '<td></td>'
        + '</tr>'
        + '</table>'
    ,

    initData() {
        return {
            realYear: new Date().getFullYear(),
            realMonth: new Date().getMonth() + 1,
            realDay: new Date().getDate(),
        }
    },

    attached() {
        this.showAll();
        this.watch('month', (month) => {
            this.data.set('month', month);
            this.showAll();
        });
    },


    showAll() {
        // console.log(this.data.get());
        const year = this.data.get('year');
        const month = this.data.get('month');
        const day = this.data.get('day');
        // console.log(year, month);
        const firstDay = getFirstDayOfMonth(year, month);
        // console.log(firstDay);
        const dayNum = getDayNum(year, month);
        const preMonthDaysNum = getDayNum(year, month - 1);
        const tds = document.querySelectorAll('td');

        // 给属于这个月的单元格，添加日期
        for (let i = 0; i < dayNum; ++i) {
            // console.log(i + firstDay);
            tds[i + firstDay].innerHTML = i + 1;
            tds[i + firstDay].className = 'canchose';
            console.log(this.data.get('chosenYear'), this.data.get('chosenMonth'), this.data.get('chosenDay'));
            if (i + 1 === this.data.get('chosenDay') && year === this.data.get('chosenYear') && month === this.data.get('chosenMonth')) {
                tds[i + firstDay].className = 'chosen';
            }
            // 给今天打上特殊记号
            if (this.data.get('realYear') === year && this.data.get('realMonth') === month && i + 1 === this.data.get('realDay')) {
                tds[i + firstDay].classList.add('today');
                // 默认先选择今天
            }

            // 给周末加上标记
            if ((i + firstDay) % 7 === 0 || (i + firstDay) % 7 === 6) {
                tds[i + firstDay].classList.add('weekend');
            }
            tds[i + firstDay].addEventListener('click', (e) => {
                this.chose(year, month, e);
            });
        }

        // 给属于下个月的单元格，添加日期
        for (let i = dayNum + firstDay; i < 42; ++i) {
            tds[i].innerHTML = i + 1 - dayNum - firstDay;
            tds[i].className = '';
            tds[i].classList.add('notTomonth');
        }

        // 给属于上个月的单元格，添加日期
        for (let i = firstDay - 1, j = preMonthDaysNum; i > -1; --i, --j) {
            tds[i].innerHTML = j;
            tds[i].className = '';
            tds[i].classList.add('notTomonth');
        }
    },

    chose(year, month, e) {
        // 先把被chosen的标记转让
        const preChosen = document.querySelector('.chosen');
        if (preChosen) {
            preChosen.classList.remove('chosen');
        }
        e.target.classList.add('chosen');
        this.dispatch('newDate', { 'year': year, 'month': month, 'day': parseInt(e.target.innerHTML) });
    }
});

export default CalMain;