
import './App.scss'
import Home from '/src/pages/home/Home.jsx'
import {Provider} from "react-redux";
import store from './store/store.js'
function App() {


    return (
        <Provider store={store}>
            <Home/>
        </Provider>
    );
}

export default App
