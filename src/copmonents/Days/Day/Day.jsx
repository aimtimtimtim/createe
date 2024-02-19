import React, { useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import styles from './style.module.scss'
import {Plus} from 'lucide-react';
import  {setSelectedDay} from 'src/store/selectedDay.js'


const Day = ({dayInCalendar, selectedMonth}) => {

    
    const months = useSelector(state => state.months.months)
    const currentDate = useSelector(state => state.currentDate.currentDate)
    const currentMonth = useSelector(state => state.currentMonth.currentMonth)
    const [hovered, setHovered] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const isToday = currentDate === dayInCalendar && selectedMonth === currentMonth




    const handleHover = () => {

        setHovered(!hovered)
    }
    
    const selectDay = (day, months, month) => {
        dispatch(setSelectedDay({day, month }))
        navigate(`/calendar`)
        
    }

    return (
        <div
            className={`${styles.day} ${isToday && styles.today}`}
            onClick={()=>{selectDay(dayInCalendar, months, selectedMonth)}}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}>
            
            <div className={styles.dayTop}>
                <span
                    className={`${styles.date} ${isToday && styles.currentDate}`}>
                    {dayInCalendar}
                </span>
                
                {isToday  && <span className={styles.todayBadge}>Today</span>}
            
            
            </div>
            
            <div className={`${styles.add} ${hovered ? styles.visible : ''}`}>
                <Plus size={40} strokeWidth={1} color="#BDBDBD"/>
            </div>
        
        </div>);
};

export default Day;
