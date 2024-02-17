import React from 'react';
import Sidebar from "../../copmonents/Sidebar/Sidebar.jsx";
import Calendar from "../../copmonents/Calendar/Calendar.jsx";
import styles from './style.module.scss'


const Home = () => {
    return (
        <div className={styles.home}>
            <Sidebar/>
            <Calendar/>
        </div>
    );
};

export default Home;
