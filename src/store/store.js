import {configureStore} from "@reduxjs/toolkit";
import monthsReducer from './monthsSlice.js'

const store = configureStore({
	reducer: {
		months: monthsReducer
	}
})

export default store