import React, {useEffect, useState} from 'react';
import {ChevronRight, ChevronLeft} from 'lucide-react';
import {useSelector} from "react-redux";
import {Outlet, useNavigate, useParams} from "react-router-dom";
import DaysOfWeek from "src/copmonents/DaysOfWeek/DaysOfWeek.jsx";
import Month from "src/copmonents/Month/Month.jsx";
import calendarForRender from "src/utils/daysForRender.js";


import styles from './styles.module.scss'


const Calendar = () => {
	const navigate = useNavigate()
	
	const currentMonth = useSelector(state => (
		state.currentMonth.currentMonth))
	const months = useSelector(state => (
		state.months.months))
	const currentMonths = new Date().getMonth()

const [monthToChange, setMonthToChange]= useState(currentMonths)
const [changeCurrentMonth, setChangeCurrentMonth]= useState(currentMonths)
	console.log(changeCurrentMonth, 'fff')
	
	const monthNames = months.map(month => month.name.toLowerCase())
	
	
	const {month} = useParams()
	useEffect(() => {
		!monthNames.includes(month) ? navigate('/') : navigate(`/calendar/${month}`)
		
		const indexOfMonth = monthNames.indexOf(month)
		setMonthToChange(indexOfMonth)
		
	}, [month]);
	
	
	const firstDayOfMonth = new Date(2024, monthToChange, 1).getDay()
	const calendarDays = calendarForRender(months[changeCurrentMonth].days, firstDayOfMonth)
	
	const currentDayOfWeek = new Date().getDay();
	
	
	const handleNextMonth = () => {
		if (monthToChange < 11) {
			navigate(`/calendar/${months[changeCurrentMonth + 1].name.toLowerCase()}`)
			setMonthToChange(prevMonth => prevMonth + 1)
		}
	}
	const handlePrevMonth = () => {
		if (monthToChange > 0) {
			navigate(`/calendar/${months[changeCurrentMonth - 1].name.toLowerCase()}`)
			setMonthToChange(prevMonth => prevMonth - 1)
		}
	}
	
	
	return (
		<div className={styles.calendar}>
			<div className={styles.header}>
				<button
					className={`${styles.button} ${changeCurrentMonth === 0 ? styles.disabled : ''}`}
					onClick={() => {
						handlePrevMonth()
					}}><ChevronLeft/>
				</button>
				
				<span className={styles.month}>{months[changeCurrentMonth].name}, 2024</span>
				
				<button
					className={`${styles.button} ${changeCurrentMonth === 11 ? styles.disabled : ''}`}
					onClick={() => {
						handleNextMonth()
					}}><ChevronRight/>
				</button>
			</div>
			
			<Month calendarDays={calendarDays} changeCurrentMonth={changeCurrentMonth} mont={month}/>
			<DaysOfWeek currentDayOfWeek={currentDayOfWeek}/>
		</div>);
};

export default Calendar;
