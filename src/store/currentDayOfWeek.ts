import {createSlice} from "@reduxjs/toolkit";
import getDaysInMonth from "../utils/daysInMonth.ts";

const initialState = {
	currentDayOfWeek: new Date().getDay()
}

const currentDayOfWeekSlice = createSlice({
	name: 'currentDayOfWeek',
	initialState,
})

export default currentDayOfWeekSlice.reducer