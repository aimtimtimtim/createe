import React, {useState} from 'react';
import {ChevronRight, ChevronLeft} from 'lucide-react';
import {useSelector} from "react-redux";
import Day from "../Days/Day/Day.jsx";
import DayEmpty from "../Days/DayEmpty/DayEmpty.jsx";
import styles from './style.module.scss'


const Calendar = () => {
	const months = useSelector(state => state.months.months)
	const currentMonth = new Date().getMonth()
	const currentDate = new Date().getDate()
	console.log(currentDate)
	
	
	return (
		<div className={styles.calendar}>
		<div className={styles.header}>
			<button className={`${styles.button}`}><ChevronLeft/></button>
			
			<span className={styles.month}>February, 2024</span>
			
			<button className={`${styles.button}`}><ChevronRight/></button>
		</div>
		
		<div className={styles.days}>
			{Array.from({length: months[currentMonth].days}).map((_, i)=>(
				i + 1 === currentDate ? <Day day={i + 1}/> : <DayEmpty day={i + 1}/>
			))}
			
		</div>
	</div>);
};

export default Calendar;
