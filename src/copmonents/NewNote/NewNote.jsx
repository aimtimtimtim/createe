import {XCircle} from "lucide-react";
import React from 'react';
import styles from "./styles.module.scss";

const NewNote = ({handleOpenNewNote}) => {
	const handleCloseModal = () => {
		handleOpenNewNote();
	};
	
	const handleFormClick = (event) => {
		event.stopPropagation(); // Остановить всплытие события
	};

	return (
		<div className={styles.blur} onClick={() => {
			handleOpenNewNote()
		}}>
			<form className={styles.newNote} onClick={handleFormClick}>
				<div className={styles.top}>
					<h3 className={styles.title}>New note</h3>
					<XCircle className={styles.close} onClick={() => {
						handleCloseModal()
					}}/>
				</div>
				<label className={styles.label}>Title</label>
				<input className={styles.input} placeholder={'Title'}/>
				<label className={styles.label}>Title</label>
				<textarea className={styles.textArea} placeholder={'Title'}/>
				<button className={styles.addButton}>Add</button>
			</form>
		</div>
	);
};

export default NewNote;
