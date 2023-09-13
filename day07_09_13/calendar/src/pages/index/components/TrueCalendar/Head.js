import san from 'san'
import './Head.css'

var Head = san.defineComponent({
    template: ''
        + '<div id="topBar"> '
        + '<div id="preMonth" on-click="preMonth"></div>'
        + '<div id="showMonth">{{year}}年{{month}}月</div>'
        + '<div id="nextMonth" on-click="nextMonth"></div>'
        + '</div>'
    ,
    initData() {
        return {
            date: new Date(),
        }
    },

    attached() {
        var date = this.data.get('date');
        this.data.set('year', date.getFullYear());
        this.data.set('month', date.getMonth() + 1);
    },

    preMonth() {
        let month = this.data.get('month');
        if (month === 1) {
            this.data.set('month', 12);
            this.data.set('year', this.data.get('year') - 1);
        }
        else {
            this.data.set('month', month - 1);
        }
        this.dispatch('preMonth', { 'year': this.data.get('year'), 'month': this.data.get('month') });
    },

    nextMonth() {
        let month = this.data.get('month');
        if (month === 12) {
            this.data.set('month', 1);
            this.data.set('year', this.data.get('year') + 1);
        }
        else {
            this.data.set('month', month + 1);
        }
        this.dispatch('nextMonth', { 'year': this.data.get('year'), 'month': this.data.get('month') });
    }
});

export default Head;