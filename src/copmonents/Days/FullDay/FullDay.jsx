import {ChevronLeft,CircleFadingPlus} from "lucide-react";
import React from "react";
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import styles from './style.module.scss'

const FullDay = () => {
	const {day, month} = useSelector(state => state.selectedDay.selectedDay)
	const navigate = useNavigate()
	
	const handleBack = () => {
		navigate(`/`)
	}
	
	return (
		<div className={styles.fullDay}>
			<div className={styles.sider}>
			<button className={styles.backBtn} onClick={() => {
				handleBack()
			}}>
				<ChevronLeft size={16} color="#ffffff" strokeWidth={1.5}/>
				<span>Back</span>
			</button>
			<span className={styles.date}>{day} {month}</span>
			<button className={styles.addNewButton}>
				<CircleFadingPlus color="#ffffff" strokeWidth={1.5} />
				New task
			</button>
			</div>
		</div>
	)
}
export default FullDay