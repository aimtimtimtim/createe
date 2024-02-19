import {configureStore} from "@reduxjs/toolkit";
import monthsReducer from './monthsSlice.js'
import daysOfWeekReducer from './daysOfWeek.js'
import selectedDayReducer from './selectedDay.js'
import currentDateReducer from './currentDate.js'
import currentMonthReducer from  './currentMonth.js'

const store = configureStore({
	reducer: {
		months: monthsReducer,
		daysOfWeek: daysOfWeekReducer,
		selectedDay: selectedDayReducer,
		currentDate: currentDateReducer,
		currentMonth: currentMonthReducer,
		
	}
})

export default store