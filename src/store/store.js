import {configureStore} from "@reduxjs/toolkit";
import monthsReducer from './monthsSlice.js'
import daysOfWeekReducer from './daysOfWeek.js'
import selectedDayReducer from './selectedDay.js'

const store = configureStore({
	reducer: {
		months: monthsReducer,
		daysOfWeek: daysOfWeekReducer,
		selectedDay: selectedDayReducer
		
	}
})

export default store