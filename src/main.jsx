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

const router = createBrowserRouter([{
	path: '/',
	element: <App/>,
	errorElement: <div>
		<p>404 page not found</p>
		<Link to={'/'}>Back</Link>
	</div>,
	children: [{
			index: true,
			element: <Calendar/>,
	       },
		   {
			   path: 'calendar/:month-day',
			    element: <FullDay/>
		   },]
}],)

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>
);