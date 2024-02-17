import React, { useState} from 'react';
import styles from './style.module.scss'
import {Plus} from 'lucide-react';

const DayEmpty = ({day}) => {
    const [hovered, setHovered] = useState(false)

    const handleHover = () => {
        setHovered(!hovered)
    }

    return (
        <div
        className={`${styles.day}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}>

        <span className={styles.date}>{day}</span>

            <div className={`${styles.add} ${hovered ? styles.visible : ''}`}>
                <Plus size={40} strokeWidth={1} color="#BDBDBD"/>
            </div>
            
    </div>);
};

export default DayEmpty;
