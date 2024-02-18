import './App.scss'
import React from "react";
import {Provider} from "react-redux";
import {BrowserRouter, Link, Outlet, Routes, useLocation} from "react-router-dom";
import Calendar from "./copmonents/Calendar/Calendar.jsx";
import Sidebar from "./copmonents/Sidebar/Sidebar.jsx";
import store from './store/store.js'

function App() {
	const {pathname} = useLocation()
	console.log(pathname)
	
	return (<Provider store={store}>
		<div className='home'>
			<Sidebar/>
			<Outlet/>
		</div>
	</Provider>);
}

export default App
