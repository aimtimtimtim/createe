import {MoreVertical, Trash2, X} from "lucide-react";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {deleteNote} from "src/store/tasksSlice.js";
import styles from './style.module.scss'

const TaskCard = ({title, content, time, id}) => {
	const dispatch = useDispatch()
	const [isOpen, setIsOpen] = useState(false)
	const handleOpen = () => {
		setIsOpen(prevState => !prevState)
	}
	
	const handleDeleteNote = (id) => {
		console.log(id)
		dispatch(deleteNote({id}))
	}
	return (
		
		<div className={styles.taskCard}>
			<div className={styles.top}>
				<h4 className={styles.taskTitle}>{title}</h4>
				<MoreVertical className={styles.more} onClick={handleOpen}/>
			</div>
			<span className={styles.taskTime}>{time}</span>
			
			<p className={styles.taskContent}>{content}</p>
			{
				isOpen && (
					<div className={styles.modal}>
						<div className={styles.options}>
							<span>Options</span>
							<X className={styles.icn} size={16} strokeWidth={1.5} onClick={handleOpen}/>
						</div>
						<div className={styles.delete} onClick={()=>{handleDeleteNote(id)}}>
							<Trash2 size={18} strokeWidth={1.5}/>
							<span>Delete</span>
						</div>
					
					</div>
				)
			}
		</div>
	
	)
}
export default TaskCard