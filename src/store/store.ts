import {configureStore} from "@reduxjs/toolkit";
import monthsReducer from 'src/store/monthsSlice.ts'
import daysOfWeekReducer from 'src/store/daysOfWeek.ts'
import selectedDayReducer from 'src/store/selectedDay.ts'
import currentDateReducer from 'src/store/currentDate.ts'
import currentMonthReducer from 'src/store/currentMonth.ts'
import currentDayOfWeekReducer from 'src/store/currentDayOfWeek.ts'
import tasksSliceReducer from './tasksSlice.ts'
import isOpenNewNoteSliceReducer from 'src/store/isOpenNewNote.ts'

const store = configureStore({
	reducer: {
		months: monthsReducer,
		daysOfWeek: daysOfWeekReducer,
		selectedDay: selectedDayReducer,
		currentDate: currentDateReducer,
		currentDayOfWeek: currentDayOfWeekReducer,
		currentMonth: currentMonthReducer,
		tasks: tasksSliceReducer,
		isOpenNewNote: isOpenNewNoteSliceReducer
		
	}
})

export default store