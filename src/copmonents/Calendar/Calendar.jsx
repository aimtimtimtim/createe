import React, {useState} from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import {useSelector} from "react-redux";
import styles from './style.module.scss'
import DayEmpty from "../Days/DayEmpty/DayEmpty.jsx";

const Calendar = () => {
	const months = useSelector(state => state.months.months)
	const [currentMonth, setCurrentMonth] = useState(1)
    const currentMonthDays = Array.from({length: months[currentMonth].days}, (_, i) => ({
        id: i + 1,
        date: `${i + 1}-0${months[currentMonth].order}-2024`
    }))
    const nextMonth = () => {
        if (currentMonth === 11) {
        } else {
        
			setCurrentMonth(prevMonth => prevMonth + 1)
        }
    }
    const prevMonth = () => {
        if (currentMonth === 0) {
        } else {
            
            setCurrentMonth(prevMonth => prevMonth - 1)
        }
    }

	return (
		<div className={styles.calendar}>
            <div className={styles.header}>
                <button
					className={`${styles.button} ${currentMonth === 0 ? styles.disabled : ''}`}
					onClick={prevMonth}><ChevronLeft />
				</button>
				
                <span className={styles.month}>{months[currentMonth].name}, 2024</span>
				
                <button
					className={`${styles.button} ${currentMonth === 11 ? styles.disabled : ''}`}
					onClick={nextMonth}><ChevronRight />
				</button>
                
            </div>
   
			<div className={styles.days}>
				{currentMonthDays.map((day, index) => (
					<DayEmpty days={index + 1} date={day.date} key={index}/>
				))}
			
			
			</div>
		</div>
	);
};

export default Calendar;
