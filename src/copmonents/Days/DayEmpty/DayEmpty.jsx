import React, {memo, useState} from 'react';
import styles from './style.module.scss'
import {Plus} from 'lucide-react';

const DayEmpty = ({days, date}) => {
    console.log('DayEmpty render')
    const [hovered, setHovered] = useState(false)

    const handleHover = () => {
        setHovered(!hovered)
    }

    return (
        <div
        className={`${styles.day}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}>

        <span className={styles.date}>{days}</span>
        <span className={styles.date}>{date}</span>

        {hovered && (
            <div className={styles.add}>
                <Plus size={40} strokeWidth={1} color="#BDBDBD"/>
            </div>
        )}


    </div>);
};

export default memo(DayEmpty);
