import san from 'san'
import './Calendar.css'
import TrueCalendar from './TrueCalendar/TrueCalendar';
var Calendar = san.defineComponent({
    template: ''
        + '<fragment>'
        + '<div id="inputBox">'
        + '<span>{{ year }} / {{month}} / {{ day }}</span> <div id="showCal" on-click="showCalendar"></div>'
        + '</div > '
        + `<TrueCalendar
         s-show="chosing" year = "{{year}}" month = "{{month}}" day = "{{day}}" 
         chosenYear="{{year}}" chosenMonth="{{month}}" chosenDay="{{day}}"></TrueCalendar> `
        + '</fragment>'
    ,
    initData() {
        return {
            date: new Date(),
            year: new Date().getFullYear(),
            month: new Date().getMonth() + 1,
            day: new Date().getDate(),
            chosing: false,
        }
    },

    components: {
        TrueCalendar
    },

    showCalendar() {
        this.data.set('chosing', true);
    },

    messages: {
        'newDate': function (arg) {
            this.data.set('year', arg.value.year);
            this.data.set('month', arg.value.month);
            this.data.set('day', arg.value.day);
            this.data.set('chosing', false);
        }
    }

});

export default Calendar;


