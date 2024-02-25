import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useOutletContext, useParams} from "react-router-dom";

import styles from "./styles.module.scss";
import Day from "src/copmonents/Days/Day/Day.jsx";

export const Month = () => {
	const [calendarDays, monthToChange]=useOutletContext()

	return (
		<div className={styles.days}>
			{calendarDays.map((dayInCalendar, i) => (
				dayInCalendar === null ? <p key={i}></p> :
					<Day
						key={i}
						dayInCalendar={dayInCalendar}
						monthToChange={monthToChange}/>
			))}
		
		</div>
	)
}
export default Month