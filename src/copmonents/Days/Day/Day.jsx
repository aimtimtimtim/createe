import React, { useState} from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import styles from './style.module.scss'
import {Plus} from 'lucide-react';
import  {setSelectedDay} from '../../../store/selectedDay.js'


const Day = ({day, currentDay, selectedMonth}) => {
    const [hovered, setHovered] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const isToday = currentDay === day


    const handleHover = () => {

        setHovered(!hovered)
    }
    
    const selectDay = (day, month) => {
        dispatch(setSelectedDay({day, month }))
        navigate('/day')
    }

    return (
        <div
            className={`${styles.day} ${isToday && styles.today}`}
            onClick={()=>{selectDay(day, selectedMonth.name)}}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}>
            
            <div className={styles.dayTop}>
                <span className={`${styles.date} ${isToday && styles.currentDate}`}>{day}</span>
                {isToday  && <span className={styles.todayBadge}>Today</span>}
            
            
            </div>
            
            <div className={`${styles.add} ${hovered ? styles.visible : ''}`}>
                <Plus size={40} strokeWidth={1} color="#BDBDBD"/>
            </div>
        
        </div>);
};

export default Day;
