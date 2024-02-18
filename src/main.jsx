import React from 'react'
import ReactDOM from 'react-dom/client'
import FullDay from "./copmonents/Days/FullDay/FullDay.jsx";
import Calendar from "./copmonents/Calendar/Calendar.jsx";


import Root from "./routes/Root.jsx";
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
	children: [
		{
			path: '/day',
			element: <FullDay/>
		},
		{
			index: true,
			element: <Calendar />
		}
	
	]
	
}])

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>
);