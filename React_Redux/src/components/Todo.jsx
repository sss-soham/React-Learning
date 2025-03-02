import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addTask, deleteTask, clearTask } from "../features/tasks/taskSlice.jsx";

export const Todo = () => {

	const [task , setTask] = useState("");

	const store = useSelector((state) => state.taskReducer.task);
	// console.log("react states: ", store.task);

	const dispatch = useDispatch();

	const handleFormSubmit = (e) => {
		e.preventDefault();
	    dispatch(addTask(task));
		return setTask("");
	};

	const handleTaskDelete = (id) => {
		return dispatch(deleteTask(id));
	};

	// const handleFetchTask = () => {
	// 	dispatch(fetchTask());
	// }

	return(
		<div>
			<div className="todo-app">
				<h1>
					To-do List
				</h1>
				<div className="row">
					<form onSubmit={handleFormSubmit}>
						<input type="text" id="input-box" placeholder="Add a new task"
						value={task}
						onChange={(e) => setTask(e.target.value)}/>
						<button>Add Task</button>
					</form>
				</div>

				{/* <button onClick={handleFetchTask}>Fetch Task</button> */}

				<ul>
					{store?.map((curTask, index) => {
							return <li key={index}>
								<p>{index} : {curTask}</p>
								<button
								onClick={() => handleTaskDelete(index)}>
									Delete
								</button>
							</li>
						})
					}
				</ul>
				<div>
					<button
					onClick={() => dispatch(clearTask())}>Clear all</button>
				</div>
			</div>
		</div>
	)
}

console.log("Hi")