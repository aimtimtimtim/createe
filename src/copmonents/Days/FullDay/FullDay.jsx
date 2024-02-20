import {ChevronLeft,CircleFadingPlus} from "lucide-react";
import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import styles from './style.module.scss'

const FullDay = () => {
	const navigate = useNavigate()
	const {day, month} = useParams()
	
	const handleBack = () => {
		navigate(`/calendar/${month}`)
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
			<span className={styles.date}>{day} {month.charAt(0).toUpperCase() + month.slice(1)}</span>
			<button className={styles.addNewButton}>
				<CircleFadingPlus className={styles.addIcon} color="#ffffff" strokeWidth={1.5} />
				New task
			</button>
			</div>
		</div>
	)
}
export default FullDay