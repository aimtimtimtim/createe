import {Provider} from "react-redux";
import {Outlet} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import store from './store/store.ts'
import './App.scss'

function App() {
	return (
		<Provider store={store}>
			<div className='home'>
				<Sidebar/>
				<Outlet/>
			</div>
		</Provider>);
}

export default App
