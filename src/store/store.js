import {configureStore} from "@reduxjs/toolkit";
import monthsReducer from './monthsSlice.js'
import daysOfWeekReducer from './daysOfWeek.js'

const store = configureStore({
	reducer: {
		months: monthsReducer,
		daysOfWeek: daysOfWeekReducer,
	}
})

export default store