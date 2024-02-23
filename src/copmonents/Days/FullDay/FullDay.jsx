import {ChevronLeft, CircleFadingPlus} from "lucide-react";
import React, {useEffect, useState} from "react";
import {XCircle} from 'lucide-react';
import {useDispatch, useSelector} from "react-redux";
import {useFetcher, useNavigate, useParams} from "react-router-dom";
import NewNote from "src/copmonents/NewNote/NewNote.jsx";
import {setSelectedDay} from "src/store/selectedDay.js";
import styles from './style.module.scss'

const FullDay = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const {month, day} = useParams()
	const [newNote, setNewNote] = useState(false)
	
	useEffect(()=>{
		dispatch(setSelectedDay({day, month}))
	}, [day])

	const handleOpenNewNote = () => {
		setNewNote(prevState => !prevState)
	}
	
	const handleBack = () => {
		console.log(month.toLowerCase())
		navigate(`/calendar/${month}`)
	}
	
	return (
		<div className={styles.fullDay}>
			<div className={styles.header}>
				<button
					className={styles.backBtn}
					onClick={() => {
						handleBack()
					}}>
					<ChevronLeft
						size={16}
						color="#ffffff"
						strokeWidth={1.5}/>
					<span>Back</span>
				</button>
				<span className={styles.date}>{day} {`${month.charAt(0).toUpperCase()}${month.slice(1)}`}</span>
				<button
					className={styles.addNewButton}
					onClick={() => {
						handleOpenNewNote()
					}}>
					<CircleFadingPlus color="#ffffff" strokeWidth={1.5}/>
					Note
				</button>
			</div>
			<div className={styles.empty}>
				<h2>You don't have any note</h2>
				<span onClick={()=>{handleOpenNewNote()}}>Create one</span>
			</div>
			{newNote && (<NewNote handleOpenNewNote={handleOpenNewNote}/>)}
		</div>
	)
}
export default FullDay