import {ChevronLeft} from "lucide-react";
import React from "react";
import {useSelector} from "react-redux";
import {Link, useNavigate, useParams} from "react-router-dom";
import styles from './style.module.scss'

const FullDay = () => {
	const params = useParams()
	console.log(params)
	const navigate = useNavigate()
	const {day, month} = useSelector(state => state.selectedDay.selectedDay)
	const months = useSelector(state => state.months.months)
	const handleBack = () => {
		navigate('/')
	}
	
	return (
		<div className={styles.fullDay}>
			<p className={styles.day}>{day}</p>
			<span className={styles.month}>{months[month].name}</span>
			<span>
			
			<button
				className={`${styles.button}`}
				onClick={() => {
					handleBack()
				}}><ChevronLeft/>
			</button>
			</span>
			<h1 style={{
				fontSize: '140px'
			}}>Дидар Хуйдрын</h1>
		</div>
	)
}
export default FullDay