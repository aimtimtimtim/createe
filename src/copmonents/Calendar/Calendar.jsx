import React, {useState} from 'react';
import {ChevronRight, ChevronLeft} from 'lucide-react';
import {useSelector} from "react-redux";

import DaysOfWeek from "../DaysOfWeek/DaysOfWeek.jsx";
import Day from "../Days/Day/Day.jsx";
import styles from './style.module.scss'
import calendarForRender from "../../utils/daysForRender.js";

const Calendar = () => {
	const currentMonth = new Date().getMonth()
	const currentDate = new Date().getDate()
	
	const months = useSelector(state => state.months.months)
	
	const [monthToChange, setMonthToChange] = useState(currentMonth)
	const firstDayOfMonth = new Date(2024, monthToChange, 1).getDay()
	const calendarDays = calendarForRender(months[monthToChange].days, firstDayOfMonth)
	
	const currentDay = (monthToChange === currentMonth) && (calendarDays.find(day => day === currentDate))
	
	const currentDayOfWeek = new Date().getDay();
	
	
	const handleNextMonth = () => {
		if (monthToChange < 11) {
			setMonthToChange(prevMonth => prevMonth + 1)
		}
	}
	const handlePrevMonth = () => {
		if (monthToChange > 0) {
			setMonthToChange(prevMonth => prevMonth - 1)
		}
	}
	
	
	return (<div className={styles.calendar}>
		<div className={styles.header}>
			<button
				className={`${styles.button} ${monthToChange === 0 ? styles.disabled : ''}`}
				onClick={() => {
					handlePrevMonth()
				}}><ChevronLeft/>
			</button>
			
			<span className={styles.month}>{months[monthToChange].name}, 2024</span>
			
			<button
				className={`${styles.button} ${monthToChange === 11 ? styles.disabled : ''}`}
				onClick={() => {
					handleNextMonth()
				}}><ChevronRight/>
			</button>
		</div>
		
		<div className={styles.days}>
			{calendarDays.map(day => (
				day === null ? <p></p> :
					<Day
						day={day}
						currentDay={currentDay}
						selectedMonth={months[monthToChange]}/>
			))}
		
		</div>
		<DaysOfWeek currentDayOfWeek={currentDayOfWeek}/>
	</div>);
};

export default Calendar;
