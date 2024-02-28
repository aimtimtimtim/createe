import {useOutletContext} from "react-router-dom";
import styles from "./styles.module.scss";
import Day from "../Day/Day.tsx";


export const Month = () => {
	const [calendarDays, monthToChange]: number[]=useOutletContext()

	return (
		<div className={styles.days}>
			{calendarDays.map((dayInCalendar: number, i: number) => (
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