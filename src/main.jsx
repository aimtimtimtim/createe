import React from 'react'
import ReactDOM from 'react-dom/client'
import {useSelector} from "react-redux";
import FullDay from "src/copmonents/Days/FullDay/FullDay.jsx";
import Month from "src/copmonents/Month/Month.jsx";
import getDaysInMonth from "src/utils/daysInMonth.js";


import Calendar from "./copmonents/Calendar/Calendar.jsx";

import App from './App.jsx'
import './index.scss'

import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";
const currentMonth = new Date().getMonth()
const  months =  [
	{
		name: "January",
		days: 31,
		date: []
	},
	{
		name: "February",
		days: getDaysInMonth(1, 2024),
		date: []// 29 в високосном году
	},
	{
		name: "March",
		days: 31,
		date: []
	},
	{
		name: "Aprel",
		days: 30,
		date: []
	},
	{
		name: "May",
		days: 31,
		date: []
	},
	{
		name: "June",
		days: 30,
		date: []
	},
	{
		name: "July",
		days: 31,
		date: []
	},
	{
		name: "August",
		days: 31,
		date: []
	},
	{
		name: "September",
		days: 30,
		date: []
	},
	{
		name: "October",
		days: 31,
		date: []
	},
	{
		name: "November",
		days: 30,
		date: []
	},
	{
		name: "December",
		days: 31,
		date: []
	},
]
const router = createBrowserRouter([{
	path: '/',
	element: <App/>,
	errorElement: <div>
		<p>404 page not found</p>
		<Link to={'/'}>Back</Link>
	</div>,
	children: [
		{
			path: `calendar`,
			element: <Calendar/>,
			children: [
				{
					path: ':month',
					element: <Month/>,
					children: []
				},
			
			]
		},
		{
			path: 'calendar/:month/:day',
			element: <FullDay/>
		},
	]
}], {basename: `calendar/${months[currentMonth].name.toLowerCase()}`})

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>
);