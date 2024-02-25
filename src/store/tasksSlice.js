import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	tasks: [
	
	]
}

const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		addNewNote(state, action){
			const {month, day, id, title, content, time} = action.payload
			const task = {
				month, day, id, title, content, time
			}
			state.tasks.push(task)
		},
		deleteNote(state, action){
			const {id} = action.payload
			state.tasks = state.tasks.filter(task => task.id !== id);
		}
	}
})

export const {addNewNote, deleteNote} = tasksSlice.actions
export default tasksSlice.reducer