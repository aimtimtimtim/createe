import React from 'react'
import ReactDOM from 'react-dom/client'
import Month from "./components/Month/Month.tsx";
import Calendar from "./components/Calendar/Calendar.tsx";
import App from './App.tsx'
import './index.scss'

import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";
import FullDay from "./components/FullDay/FullDay.tsx";

const router = createBrowserRouter([{
		path: '/',
		element: <App/>,
		errorElement: <div>
			<p>404 page not found</p>
			<Link to={'/calendar'}>Back</Link>
		</div>,
		children: [
			{
				
				path: 'calendar',
				element: <Calendar/>,
				children: [{
					path: ':month',
					element: <Month/>
				}]
			},
			{
				path: 'calendar/:month/:day',
				element: <FullDay/>
			},
		]
	}
	],
)

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>
);