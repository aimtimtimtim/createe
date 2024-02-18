import {createSlice} from "@reduxjs/toolkit";
import getDaysInMonth from "../utils/daysInMonth.js";

const initialState = {
	months: [
		{
			id: 1,
			name: "January",
			days: 31,
			date: []
		},
		{
			id: 2,
			name: "February",
			days: getDaysInMonth(1, 2024),
			date: []// 29 в високосном году
		},
		{
			id: 3,
			name: "March",
			days: 31,
			date: []
		},
		{
			id: 4,
			name: "Aprel",
			days: 30,
			date: []
		},
		{
			id: 5,
			name: "May",
			days: 31,
			date: []
		},
		{
			id: 6,
			name: "June",
			days: 30,
			date: []
		},
		{
			id: 7,
			name: "July",
			days: 31,
			date: []
		},
		{
			id: 8,
			name: "August",
			days: 31,
			date: []
		},
		{
			id: 9,
			name: "September",
			days: 30,
			date: []
		},
		{
			id: 10,
			name: "October",
			days: 31,
			date: []
		},
		{
			id: 11,
			name: "November",
			days: 30,
			date: []
		},
		{
			id: 12,
			name: "December",
			days: 31,
			date: []
		},
	]
}

const monthsSlice = createSlice({
	name: 'month',
	initialState,
})

export default monthsSlice.reducer