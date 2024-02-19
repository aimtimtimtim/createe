import {createSlice} from "@reduxjs/toolkit";
import getDaysInMonth from "../utils/daysInMonth.js";

const initialState = {
	currentDate: new Date().getDate()
}

const currentDateSlice = createSlice({
	name: 'currentDate',
	initialState,
})

export default currentDateSlice.reducer