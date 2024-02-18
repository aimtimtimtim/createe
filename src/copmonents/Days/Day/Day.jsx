import React, { useState} from 'react';
import styles from './style.module.scss'
import {Plus} from 'lucide-react';

const Day = ({day, monthToChange, currentMonth, currentDate}) => {
    
    
    const [hovered, setHovered] = useState(false)
    
    
    const handleHover = () => {
        setHovered(!hovered)
    }
    
    return (
        <div
            className={`${styles.day}`}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}>
            <div className={styles.dayTop}>
                <span className={styles.date}>{day}</span>
                {(monthToChange === currentMonth) && (day === currentDate) ?
                    <span className={styles.today}>Today</span> : null}
            
            
            </div>
            
            
            {hovered && (
                <div className={styles.add}>
                    <Plus size={40} strokeWidth={1} color="#BDBDBD"/>
                </div>
            )}
        
        
        </div>);
};

export default Day;
