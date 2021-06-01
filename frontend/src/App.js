import { useState } from 'react'
import Header from './base/Header'
import Tasks from './home/Tasks'
import './base/css/base.css'

function App() {

	// Hook, takes in a list and a function to update the state
	const [tasks, setTasks] = useState([
		{
			id: 1,
			text: 'Doctors Appointment',
			day: 'Feb 5th at 2:30pm',
			reminder: true,
		},
		{
			id: 2,
			text: 'Meeting at School',
			day: 'Feb 6th at 1:30pm',
			reminder: true,
		},
		{
			id: 3,
			text: 'Food Shopping',
			day: 'Feb 5th at 2:30pm',
			reminder: false,
		},
	])

	// Delete Task
	const deleteTask = (id) => {

		console.log('id:', id)

		// Update state by filtering tasks
		setTasks(tasks.filter( (task) =>
			task.id !== id
		))
	}

	// Toggle Reminder
	const toggleReminder = (id) => {
		
		setTasks(
			tasks.map( (task) => 
				task.id === id ? {...task, reminder: !task.reminder} : task
			)
		)
	}

	return (

		<div className="container">
			<Header titleAddition='- Hi!' />
			{ tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks' }
		</div>

	);
}

export default App;