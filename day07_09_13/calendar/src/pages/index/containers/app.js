
import san from 'san';
import Calendar from '../components/Calendar';
import './app.css';

var AppComponent = san.defineComponent({
    template: `<fragment>
                    <div>
                        <label for="htmlDate">html自带的日历:</label>
                        <input type="date" id="htmlDate">
                    </div>
                    <div id="myCalendar">
                        <p>自己的日历组件：</p>
                        <Calendar></Calendar>
                    </div>
                </fragment>`,

    components: {
        Calendar
    }
});

export default AppComponent;