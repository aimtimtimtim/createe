import React from "react";

import styles from "./styles.module.scss";
import Day from "src/copmonents/Days/Day/Day.jsx";

export const Month = ({calendarDays, changeCurrentMonth, monthPath }) => {
	return (
		<div className={styles.days}>
			{calendarDays.map((dayInCalendar, i) => (
				dayInCalendar === null ? <p></p> :
					<Day
						key={i}
						monthPath={monthPath}
						dayInCalendar={dayInCalendar}
						changeCurrentMonth={changeCurrentMonth}/>
			))}
		
		</div>
	)
}
export default Month