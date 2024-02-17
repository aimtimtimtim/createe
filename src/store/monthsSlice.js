import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	months: [
		{
			order: 1,
			name: "January",
			days: 31,
			date: []
		},
		{
			order: 2,
			name: "February",
			days: 28,
			date: []// 29 в високосном году
		},
		{
			order: 3,
			name: "March",
			days: 31,
			date: []
		},
		{
			order: 4,
			name: "Aprel",
			days: 30,
			date: []
		},
		{
			order: 5,
			name: "May",
			days: 31,
			date: []
		},
		{
			order: 6,
			name: "June",
			days: 30,
			date: []
		},
		{
			order: 7,
			name: "July",
			days: 31,
			date: []
		},
		{
			order: 8,
			name: "August",
			days: 31,
			date: []
		},
		{
			order: 9,
			name: "September",
			days: 30,
			date: []
		},
		{
			order: 10,
			name: "October",
			days: 31,
			date: []
		},
		{
			order: 11,
			name: "November",
			days: 30,
			date: []
		},
		{
			order: 12,
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