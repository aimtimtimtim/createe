import React from "react";
import {useSelector} from "react-redux";
import styles from "src/copmonents/DaysOfWeek/styles.module.scss";

export const DaysOfWeek = ({currentDayOfWeek}) => {
	
	const daysOfWeek = useSelector(state => state.daysOfWeek.daysOfWeek)
	return (
		<div className={styles.daysOfWeek}>
			{daysOfWeek.map((day, i) => (
				<span
					key={i}
					className={`${styles.day} ${currentDayOfWeek === day.day ? styles.activeDay : ''}`}
					  key={day.day}>{day.name}</span>
			))}
		</div>
	)
}
export default DaysOfWeek