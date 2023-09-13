import san from 'san'
import './TrueCalendar.css'
import Head from './Head'
import CalMain from './CalMain';

var TrueCalendar = san.defineComponent({
    template: ''
        + '<div id="calArea">'
        + '<Head></Head>'
        + `<CalMain year="{{year}}" month="{{month}}" day="{{day}}"
        chosenYear="{{chosenYear}}" chosenMonth="{{chosenMonth}}" chosenDay="{{chosenDay}}"
        ></CalMain>`
        + '</div > '
    ,
    // initData() {
    //     return {
    //         year: new Date().getFullYear(),
    //         month: new Date().getMonth() + 1,
    //         day: new Date().getDate()
    //     }
    // },

    components: {
        Head,
        CalMain
    },

    messages: {
        'preMonth': function (arg) {
            this.data.set('year', arg.value.year);
            this.data.set('month', arg.value.month);
        },
        'nextMonth': function (arg) {
            this.data.set('year', arg.value.year);
            this.data.set('month', arg.value.month);
        }
    }
});

export default TrueCalendar;