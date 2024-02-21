import React, {useCallback, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import styles from './style.module.scss'
import {Plus} from 'lucide-react';
import {setSelectedDay} from 'src/store/selectedDay.js'


const Day = ({dayInCalendar, monthToChange}) => {
	
	const navigate = useNavigate()
	const dispatch = useDispatch()
	
	const currentDate = useSelector(state => (
		state.currentDate.currentDate))
	const currentMonth = useSelector(state => (
		state.currentMonth.currentMonth))
	const months = useSelector(state => (
		state.months.months))
	const [hovered, setHovered] = useState(false)
	
	const isToday = currentDate === dayInCalendar && monthToChange === currentMonth
	
	const handleHover = () => {
		setHovered(!hovered)
	}
	
	const selectDay = useCallback(
		(day, month) => {
			dispatch(setSelectedDay({day, month}))
			const monthPath = month.toLowerCase()
			navigate(`/${monthPath}-${dayInCalendar}`)
		}, [dispatch, navigate]);
	
	
	return (
		<div
			className={`${styles.day} ${isToday && styles.today}`}
			onClick={() => {
				selectDay(dayInCalendar, months[monthToChange].name)
			}}
			onMouseEnter={handleHover}
			onMouseLeave={handleHover}>
			
			<div className={styles.dayTop}>
                <span
					className={`${styles.date} ${isToday && styles.currentDate}`}>
                    {dayInCalendar}
                </span>
				
				{isToday && <span className={styles.todayBadge}>Today</span>}
			
			
			</div>
			
			<div className={`${styles.add} ${hovered ? styles.visible : ''}`}>
				<Plus size={40} strokeWidth={1} color="#BDBDBD"/>
			</div>
		
		</div>);
};

export default Day;
