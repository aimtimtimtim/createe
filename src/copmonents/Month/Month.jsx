import React from "react";
import {useOutletContext, useParams} from "react-router-dom";
import styles from "./styles.module.scss";
import Day from "src/copmonents/Days/Day/Day.jsx";

export const Month = () => {
	const [calendarDays, monthToChange, monthPath] = useOutletContext()

	return (
		<div className={styles.days}>
			{calendarDays.map((dayInCalendar, i) => (
				dayInCalendar === null ? <p></p> :
					<Day
						key={dayInCalendar}
						monthPath={monthPath}
						dayInCalendar={dayInCalendar}
						selectedMonth={monthToChange}/>
			))}
		
		</div>
	)
}
export default Month