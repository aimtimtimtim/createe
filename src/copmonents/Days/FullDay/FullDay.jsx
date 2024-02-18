import {useSelector} from "react-redux";
import styles from './style.module.scss'

const FullDay = () => {
	const selectedDay = useSelector(state => state.selectedDay.selectedDay)
	console.log(selectedDay.month)
	console.log(selectedDay)
	return (
		<div className={styles.fullDay}>
			<p className={styles.date}>{selectedDay.day} {selectedDay.month}</p>
		</div>
	)
}
export  default FullDay